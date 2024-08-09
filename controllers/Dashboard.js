const moment = require("moment");
const Order_md = require("../models/order_model");

const filterOrdersData = async (start, end) => {
  try {
    const orders = await Order_md.find({
      createdAt: {
        $gte: new Date(start),
        $lt: new Date(end),
      },
    });
    return orders;
  } catch (error) {
    throw error;
  }
};
const filterOrdersStatus = async (status) => {
  try {
    const orders = await Order_md.find({
      status: status,
    });
    return orders;
  } catch (error) {
    throw error;
  }
};

const Summary = async () => {
  let Yesterday = await filterOrdersData(
    moment().subtract(1, "d").format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD")
  );
  Yesterday = Yesterday.reduce((sum, order) => sum + +order.totalAmount, 0);
  let Today = await filterOrdersData(
    moment().format("YYYY-MM-DD"),
    moment().add(1, "day").format("YYYY-MM-DD")
  );
  Today = Today.reduce((sum, order) => sum + +order.totalAmount, 0);
  // this month
  let ThisMonth = await filterOrdersData(
    moment().startOf("month").format("YYYY-MM-DD"),
    moment().add(1, "day").format("YYYY-MM-DD")
  );
  ThisMonth = ThisMonth.reduce((sum, order) => sum + +order.totalAmount, 0);
  // last month
  let LastMonth = await filterOrdersData(
    moment().subtract(1, "month").startOf("month").format("YYYY-MM-DD"),
    moment().startOf("month").format("YYYY-MM-DD")
  );
  LastMonth = LastMonth.reduce((sum, order) => sum + +order.totalAmount, 0);
  let Summary = {
    today: Today,
    Yesterday: Yesterday,
    ThisMonth: ThisMonth,
    LastMonth: LastMonth,
  };
  return Summary;
};

const Weekly_sales = async () => {
  const orders = [],
    Labels = [],
    sale = [];

  const dataNow = moment();
  const dataEnd = moment().add(1, "day");
  for (let i = 0; i < 7; i++) {
    Labels.push(dataNow.format("YYYY-MM-Do"));
    const data = await filterOrdersData(
      dataNow.format("YYYY-MM-DD"),
      dataEnd.format("YYYY-MM-DD")
    );
    sale.push(
      data.reduce((sum, order) => {
        if (+order?.totalAmount != NaN) {
          return sum + +order.totalAmount;
        } else return 0;
      }, 0)
    );
    orders.push(data.length);
    dataNow.subtract(1, "day");
    dataEnd.subtract(1, "day");
  }
  orders.reverse();
  Labels.reverse();
  sale.reverse();

  return { orders, Labels, sale };
};

const Order_Status = async () => {
  const Pending = await filterOrdersStatus("Pending");
  const Cancel = await filterOrdersStatus("Cancel");
  const Processing = await filterOrdersStatus("Processing");
  const Delivered = await filterOrdersStatus("Delivered");

  return {
    Pending,
    Cancel,
    Processing,
    Delivered,
  };
};

// Best Selling Products
function compareSort(a, b) {
  if (a.salePrice > b.salePrice) {
    return -1;
  }
  if (a.salePrice < b.salePrice) {
    return 1;
  }
  return 0;
}

const BestSellingProducts = async () => {
  try {
    const orders = await Order_md.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "items.productId",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);
    const products = [];
    orders.map((order) => {
      order.products.map((i) => {
        i["salePrice"] =
          +i["salePrice"] *
            order?.items?.find(
              (item) => item.productId.toString() == i._id.toString()
            )?.quantity || 0;

        products.push(i);
        products.sort(compareSort);
      });
    });
    const bast = {};
    products.map((pro) => {
      bast[pro.titel] = (bast[pro.titel] || 0) + pro.salePrice;
    });

    const lables = [],
      values = [];

    Object.entries(bast).map(([key, value]) => {
      lables.push(key);
      values.push(value);
    });

    // remove the top 6 products

    return { lables: lables?.slice(0, 6), values: values?.slice(0, 6) };
  } catch (error) {
    throw error;
  }
};

const Dashboard = async (req, res) => {
  const summary = await Summary();
  const orderStatus = await Order_Status();
  const WeeklySales = await Weekly_sales();
  const best_Products = await BestSellingProducts();
  try {
    const body = { summary, orderStatus, WeeklySales, best_Products };
    return res.json(body);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports =  Dashboard ;
