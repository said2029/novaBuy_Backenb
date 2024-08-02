const express = require("express");
const router = express.Router();
const {
  getCoupons,
  getById,
  CreateConpon,
  Delete,
  UpdateCoupon,
} = require("../controllers/Coupon");

router.get("/", getCoupons);
router.get("/:id", getById);
router.post("/create", CreateConpon);
router.delete("/:id", Delete);
router.put("/update/:id", UpdateCoupon);

module.exports = router;
