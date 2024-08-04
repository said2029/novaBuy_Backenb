const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema(
  {
    titel: {
      type: String,
      required: true,
    },
    discription: { type: String, required: true },
    salePrice: { type: mongoose.Types.Decimal128, required: true },
    category: { type: mongoose.Types.ObjectId, required: true },
    subCategory: { type: [mongoose.Types.ObjectId] },
    stock: { type: String, required: true },
    images: { type: [String], required: true },
    rate: String,
    price: Number,
    tags: [String],
    slug: { type: String, unique: true },
    attribute: [
      {
        attribute_id: { type: mongoose.Types.ObjectId },
        values: [
          {
            value: { name: String, value: mongoose.Types.ObjectId  },
            salePrice: { type: mongoose.Types.Decimal128 },
            price: Number,
            stock: { type: String },
          },
        ],
      },
    ],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const product_md =
  mongoose.models.product || mongoose.model("product", productSchema);

module.exports = product_md;
