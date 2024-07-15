const { default: mongoose } = require("mongoose");

const User_Schema = mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    image:{type:String},
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
    },
    isActive: { type: Boolean, default: true },
    isVerifed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User_md = mongoose.models.user || mongoose.model("user", User_Schema);

module.exports = User_md;
