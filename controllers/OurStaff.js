const staff_md = require("../models/OurStaff");

const GetAll = async (req, res) => {
  try {
    const staff = await staff_md.find();
    res.json(staff);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const GetById = async (req, res) => {
  try {
    const staff = await staff_md.findById(req.params.id);
    if (!staff) return res.status(404).send("staff not found");
    return res.json(staff);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Create = async (req, res) => {
  try {
    const newStaff = new staff_md(req.body);
    const staff = await newStaff.save();
    return res.json(staff);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Update = async (req, res) => {
  try {
    const staff = await staff_md.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!staff) return res.status(404).send("staff not found");
    const newStaff = await staff.save();
    return res.json(newStaff);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const Delete = async (req, res) => {
  try {
    const staff = await staff_md.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).send("staff not found");
    return res.json(staff);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { GetAll, GetById, Create, Update, Delete };
