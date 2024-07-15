const globle_setting_md = require("../models/Setting");

const getGlobalSetting = async (req, res) => {
  try {
    const setting = await globle_setting_md.findOne();
    if (!setting) return res.status(404).json({ message: "Setting not found" });
    return res.json(setting);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateGlobalSetting = async (req, res) => {
  try {
    const one = await globle_setting_md.findOne();
    const setting = await globle_setting_md.findOneAndUpdate(
      { _id: one?._id || undefined },
      req.body,
      { upsert: true, new: true }
    );
    return res.json(setting);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGlobalSetting,
  updateGlobalSetting,
};
