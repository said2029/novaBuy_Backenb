const store_cu_md = require("../../models/Store Customizations/Store_Setting");


const get = async (_, res) => {
  try {
    const store_cu = await store_cu_md.findOne();
    if (!store_cu) return res.status(404).json({ message: "Setting not found" });
    return res.json(store_cu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const update = async (req, res) => {
  try {
    const one = await store_cu_md.findOne();
    const store_cu = await store_cu_md.findOneAndUpdate(
      { _id: one?._id || undefined },
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
