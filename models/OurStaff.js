const mongoose = require("mongoose");
const staff_Schema = mongoose.Schema(
  {
    name: String,
    phone: String,
    role: String,
    image:String,
    email: String,
    password: String,
    is_validate: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const staff_md = mongoose.model("our_staff", staff_Schema);

module.exports = staff_md;
