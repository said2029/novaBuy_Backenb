const { default: mongoose } = require("mongoose");
const product_md = require("../models/Prodouct_model");

const Create = async (req, res) => {
  const product = new product_md(req.body);
  try {
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).send(error.message);
  }
};

const UpdataProduct = async (req, res) => {
  try {
    const product = await product_md.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).send(error.message);
  }
};
const Delete = async (req, res) => {
  try {
    const product = await product_md.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const GetById = async (req, res) => {
  try {
    const product = await product_md.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const GetAll = async (req, res) => {
  try {
    const MaxProducts = 15;
    const countDocuments = await product_md.countDocuments();
    const products = await product_md.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "sub_categories",
          localField: "subCategory",
          foreignField: "_id",
          as: "sub_categories",
        },
      },
      {
        $match: {
          titel: new RegExp(req.query.search, "i"),
          category: {
            $elemMatch: { name: new RegExp(req.query.categoryName, "i") },
          },
          ...(req.query.subCategoryId && {
            subCategory: new mongoose.Types.ObjectId(req.query.subCategoryId),
          }),
          ...(req.query.isActive && { isActive: req.query.isActive }),
        },
      },
      {
        $sort: {
          ...(req.query.PriceSort && { salePrice: +req.query.PriceSort }),
          createdAt: 1,
        },
      },
      {
        $skip: +req.query.page ? (+req.query.page - 1) * MaxProducts : 0,
      },
      {
        $limit: MaxProducts,
      },
    ]);
    return res.json({ products, countDocuments, limit: MaxProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = { Create, UpdataProduct, Delete, GetById, GetAll };
