const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String },
  image: { type: String },
  is_active: { type: Boolean, default: true },
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sub_category",
    },
  ],
});

const category_md = mongoose.model("category", CategorySchema);

module.exports = category_md;
