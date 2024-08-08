const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
require("./DB");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

const UserRouter = require("./routers/User");
const ProductRouter = require("./routers/Products");
const OrderRouter = require("./routers/Order");
const CouponRouter = require("./routers/Coupon");
const StaffRoute = require("./routers/OurStaff");
const CategoryRouter = require("./routers/Category");
const Sub_category_Router = require("./routers/SubCategory");
const Store_SettingRouter = require("./routers/Store Customizations/Store_Setting");
const Store_customiza = require("./routers/Store Customizations/HomeSetting");
const golble_SettingRouter = require("./routers/Setting");
const Attribute_Router = require("./routers/Attribuets");
const Dashboard_route = require("./routers/Dashboard");
const NodeMiler_route = require("./controllers/nodeMiler");
const Home_route = require("./routers/home");
const PORT = process.env.POST || 3001;

// #region  Routers
app.use("/", Home_route);
app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/order", OrderRouter);
app.use("/coupon", CouponRouter);
app.use("/staff", StaffRoute);
app.use("/category", CategoryRouter);
app.use("/sub_category", Sub_category_Router);
app.use("/store_setting", Store_SettingRouter);
app.use("/store_customiza", Store_customiza);
app.use("/setting", golble_SettingRouter);
app.use("/attribute", Attribute_Router);
app.use("/dasboard", Dashboard_route);
app.use("/sendEmail", NodeMiler_route);

// #endregion

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
