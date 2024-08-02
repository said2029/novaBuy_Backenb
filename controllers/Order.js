const Order_md = require("../models/order_model");

const getOrders = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const limit = 10;
    const filter = [
      {
        $match: {
          ...(req.query.status && { status: req.query.status }),
          ...(req.query.paymentMethod && {
            paymentMethod: req.query.paymentMethod,
          }),
          ...(req.query.startDate && {
            createdAt: {
              $gte: new Date(req.query.startDate),
              $lte: new Date(req.query.endDate).setDate(1),
            },
          }),
        },
      },
      {
        $match: {
          ...(req.query.search && { "products.titel": req.query.search }),
        },
      },
    ];
    const count = await Order_md.aggregate([...filter]);
    const orders = await Order_md.aggregate([
      ...filter,
      {
        $lookup: {
          from: "users",
          localField: "customerId",
          foreignField: "_id",
          as: "userDetals",
        },
      },
      {
        $skip: page * limit,
      },
      {
        $limit: limit,
      },
      {
        $lookup: {
          from: "products",
          localField: "items.productId",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);
    return res.json({ totalOrder: count.length, limit, orders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getById = async (req, res) => {
  try {
    const order = await Order_md.findById(req.params.id);
    return res.json(order);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
const CreateOrder = async (req, res) => {
  try {
    const newOrder = new Order_md(req.body);
    newOrder.InvocId = newOrder._id.toString().slice(-6);
    const result = await newOrder.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const Update = async (req, res) => {
  try {
    const updatedOrder = await Order_md.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(updatedOrder);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getOrders,
  getById,
  CreateOrder,
  Update,
};
