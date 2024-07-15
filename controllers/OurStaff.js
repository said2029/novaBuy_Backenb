const staff_md = require("../models/OurStaff");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const GetAll = async (req, res) => {
  try {
    const staff = await staff_md.find({
      name: new RegExp(req.query.search, "i"),
    });
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
    const password = bcrypt.hashSync(newStaff.password, 10);
    newStaff.password = password;
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

const Login = async (req, res) => {
  try {
    const staff = await staff_md.findOne({ email: req.body.email });
    if (!staff) return res.status(400).send("Invalid email or password");
    const validPass = bcrypt.compareSync(req.body.password, staff.password);
    if (!validPass) return res.status(400).send("Invalid email or password");
    const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET);
    return res.json({ token, user: staff });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { GetAll, GetById, Create, Update, Delete, Login };
