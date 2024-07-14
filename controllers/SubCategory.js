const Subcategory_md = require("../models/SubCategories");


const getAll = async (_, res) => {
  try {
    const categoryd = await Subcategory_md.find();
    return res.json(categoryd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const category = await Subcategory_md.findById(req.params.id);
    return res.json(category);
  } catch (error) {res.status(500).json({ message: error.message });}
};

const create = async (req, res) => {
  try {
    const category = new Subcategory_md(req.body);
    const newCategory = await category.save();
    return res.json(newCategory);
  } catch (error) {res.status(500).json({ message: error.message });}
};

const update = async (req, res) => {
  try {
    const category = await Subcategory_md.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(category);
  } catch (error) {res.status(500).json({ message: error.message });}
};

const Delele = async (req, res) => {
  try {
    const category = await Subcategory_md.findByIdAndDelete(req.params.id);
    return res.json(category);
  } catch (error) {res.status(500).json({ message: error.message });}
};

module.exports = { getAll, getById, create, update, Delele };
