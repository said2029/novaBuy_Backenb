const User_md = require("../models/User_model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const get = async (req, res) => {
  try {
    const users = await User_md.find({fullName:new RegExp(req.query.search,"i") });
    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getBayId = async (req, res) => {
  try {
    const user = await User_md.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const CreateUser = async (req, res) => {
  try {
    const user = new User_md(req.body);

    const passorwd = bcrypt.hashSync(user.password, 10);
    user.password = passorwd;

    const newUser = await user.save();
    return res.json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User_md.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User_md.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User_md.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const validPass = bcrypt.compareSync(req.body.password, user.password);

    if (!validPass)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.json({ user, token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  get,
  getBayId,
  CreateUser,
  updateUser,
  deleteUser,
  login
};
