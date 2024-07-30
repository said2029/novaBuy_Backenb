const mongoose = require("mongoose");
const staff_Schema = mongoose.Schema(
  {
    image: { type: String, minlength: 0, default: 'image' },
    name: { type: String, minlength: 2 },
    email: { type: String, minlength: 2 },
    role: { type: String },
    phone: { type: String, minlength: 2 },
    password: { type: String, minlength: 2 },
    is_activait: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const staff_md = mongoose.model("our_staff", staff_Schema);

module.exports = staff_md;
