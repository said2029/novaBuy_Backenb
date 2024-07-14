const express = require("express");
var bodyParser = require("body-parser");
require("./DB");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const UserRouter = require("./routers/User");
const ProductRouter = require("./routers/Products");
const OrderRouter = require("./routers/Order");
const CouponRouter = require("./routers/Coupon");
const StaffRoute = require("./routers/OurStaff");
const CategoryRouter = require("./routers/Category");
const Sub_category_Router = require("./routers/SubCategory");
const PORT = 3001;

// #region  Routers
app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/order", OrderRouter);
app.use("/coupon", CouponRouter);
app.use("/staff", StaffRoute);
app.use("/category", CategoryRouter);
app.use("/sub_category", Sub_category_Router);

// #endregion

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
