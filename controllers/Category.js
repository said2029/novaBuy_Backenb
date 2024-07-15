const { default: mongoose } = require("mongoose");
const category_md = require("../models/Category");

const getAll = async (req, res) => {
  try {
    const categoryd = await category_md.aggregate([
      {
        $lookup: {
          from: "sub_categories",
          localField: "subcategories",
          foreignField: "_id",
          as: "all_sub_Categories",
        },
      },
    ]);
    return res.json(categoryd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const category = await category_md.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "sub_categories",
          localField: "subcategories",
          foreignField: "_id",
          as: "all_sub_Categories",
        },
      },
    ]);
    return res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const category = new category_md(req.body);
    const newCategory = await category.save();
    return res.json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const category = await category_md.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Delele = async (req, res) => {
  try {
    const category = await category_md.findByIdAndDelete(req.params.id);
    return res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, create, update, Delele };
