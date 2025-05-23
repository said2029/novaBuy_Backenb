const { default: mongoose } = require("mongoose");
const Setting_md = require("../../models/Store Customizations/HomeSetting");

const get = async (_, res) => {
  try {
    const setting = await Setting_md.findOne();
    if (!setting) return res.json({ message: "Setting not found" });
    return res.json(setting);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const update = async (req, res) => {
  try {
    const one = await Setting_md.findOne();
    const setting = await Setting_md.findOneAndUpdate(
      { _id: one?._id.toString() ?? new mongoose.Types.ObjectId() },
      req.body,
      {
        upsert: true,
        new: true,
      }
    );
    return res.json(setting);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  update,
};
