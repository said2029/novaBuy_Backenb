const User_md = require("../models/User_model");

const get = async (_, res) => {
  try {
    const users = await User_md.find();
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
    console.log(req.body);
    const user = new User_md(req.body);
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


module.exports = {
  get,
  getBayId,
  CreateUser,
  updateUser,
  deleteUser,
};
