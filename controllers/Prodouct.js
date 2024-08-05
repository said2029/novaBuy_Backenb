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
    const limit = 15;
    const count = await product_md.countDocuments();
    const page = parseInt(req.query.page) || 0;
    const body = await product_md.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $match: {
          titel: new RegExp(req.query.search || "", "i"),
          ...(req.query.isActive != "undefined" && {
            isActive: req.query.isActive.toLowerCase() == "true",
          }),
          ...(req.query.category != "undefined" && {
            "category.name": req.query.category,
          }),
        },
      },
      {
        $sort: {
          ...(req.query.PriceSort && { salePrice: +req.query.PriceSort }),
          createdAt: 1,
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
        $lookup: {
          from: "attributes",
          localField: "attribute.attribute_id",
          foreignField: "_id",
          as: "Attrubute",
        },
      },
      {
        $skip: page * limit,
      },
      {
        $limit: limit,
      },
    ]);
    return res.json({ body, count, limit });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = { Create, UpdataProduct, Delete, GetById, GetAll };
