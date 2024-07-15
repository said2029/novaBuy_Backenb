const Order_md = require("../models/order_model");

const getOrders = async (req, res) => {
  try {
    const orders = await Order_md.aggregate([
      {
        $match: {
          ...(req.query.status && { status: req.query.status }),
          ...(req.query.paymentMethod && {
            paymentMethod: req.query.paymentMethod,
          }),
          createdAt: {
            $gte: new Date(req.query.startDate),
            $lte: new Date(req.query.endDate),
          },
        },
      },
    ]);
    return res.json(orders);
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
    const result = await newOrder.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrders,
  getById,
  CreateOrder,
};
