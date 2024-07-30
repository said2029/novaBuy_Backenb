const { default: mongoose } = require("mongoose");
const Setting_md = require("../../models/Store Customizations/Store_Setting");

const get = async (_, res) => {
  try {
    const store_cu = await Setting_md.findOne();
    return res.json(store_cu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const update = async (req, res) => {
  try {
    const one = await Setting_md.findOne();
    const store_cu = await Setting_md.findOneAndUpdate(
      { _id: one?._id ?? new mongoose.Types.ObjectId() },
      req.body,
      {
        upsert: true,
        new: true,
      }
    );
    return res.json(store_cu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  update,
};
