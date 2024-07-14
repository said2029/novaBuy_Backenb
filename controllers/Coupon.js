const Coupon_md = require("../models/coupon");

const getCoupons = async (_, res) => {
  try {
    const coupons = await Coupon_md.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getById = async (req, res) => {
  try {
    const coupon = await Coupon_md.findById(req.params.id);
    res.json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const CreateConpon = async (req, res) => {
  try {
    const coupon = new Coupon_md(req.body);
    const newCoupon = await coupon.save();
    res.json(newCoupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const Delete = async (req, res) => {
  try {
    const coupons = await Coupon_md.findByIdAndDelete(req.params.id);
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const UpdateCoupon = async (req, res) => {
  try {
    const coupons = await Coupon_md.findByIdAndUpdate(req.params.id,req.body, {
      new: true,
    });
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoupons,
  getById,
  CreateConpon,
  Delete,
  UpdateCoupon,
};
