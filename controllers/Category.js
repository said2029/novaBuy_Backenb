const { default: mongoose } = require("mongoose");
const category_md = require("../models/Category");

const getAll = async (req, res) => {
  try {
    const search = new RegExp(req.query.search || "", "i"),
      page = req.query.page || 0,
      limit = 10;
    const count = await category_md.countDocuments({ name: search });
    const body = await category_md.aggregate([
      {
        $match: { name: search },
      },
      {
        $skip: page * limit,
      },
      {
        $limit: limit,
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
    return res.json({ body, count, limit });
  } catch (error) {
    res.status(500).send(error.message);
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
    res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const category = new category_md(req.body);
    const body = await category.save();
    return res.json(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const body = await category_md.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Delele = async (req, res) => {
  try {
    const category = await category_md.findByIdAndDelete(req.params.id);
    return res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAll, getById, create, update, Delele };
