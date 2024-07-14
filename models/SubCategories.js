const mongoose = require("mongoose");

const SubCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String },
  is_active: { type: Boolean, default: true },
});

const Subcategory_md = mongoose.model("sub_category", SubCategorySchema);

module.exports = Subcategory_md;
