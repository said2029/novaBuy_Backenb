const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema(
  {
    titel: {
      type: String,
      required: true,
    },
    discription: { type: String, required: true },
    salePrice: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: String, required: true },
    images: { type: [String], required: true },
    colors: { type: [String] },
    size: { type: [String] },
    rate: String,
    price: String,
    tags: [String],
    slug: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const product_md =
  mongoose.models.product || mongoose.model("product", productSchema);

module.exports = product_md;
