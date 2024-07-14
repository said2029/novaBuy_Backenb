const { default: mongoose } = require("mongoose");

// schema Order
const CouponSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    discount: { type: Number, required: true },
    is_active: { type: Boolean, default: true, required: true },
    time_validate: Date,
    MaxUse: Number,
    Image:{type:String}
  },
  { timestamps: true }
);

// create model Order

const Coupon_md = mongoose.model("conpon", CouponSchema);

module.exports = Coupon_md;
