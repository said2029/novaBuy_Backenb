const Coupon_md = require("../models/coupon");

const getCoupons = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = 10;
    const count = await Coupon_md.countDocuments({ name: new RegExp(req.query.search,"i") });
    const coupons = await Coupon_md.find({ name: new RegExp(req.query.search,"i") })
      .skip(page * limit)
      .limit(limit);
    return res.json({ coupons, limit, count });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getById = async (req, res) => {
  try {
    const coupon = await Coupon_md.findById(req.params.id);
    return res.json(coupon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const CreateConpon = async (req, res) => {
  try {
    const coupon = new Coupon_md(req.body);
    const newCoupon = await coupon.save();
    return res.json(newCoupon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const Delete = async (req, res) => {
  try {
    const coupons = await Coupon_md.findByIdAndDelete(req.params.id);
    return res.json(coupons);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const UpdateCoupon = async (req, res) => {
  try {
    const coupons = await Coupon_md.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(coupons);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoupons,
  getById,
  CreateConpon,
  Delete,
  UpdateCoupon,
};
