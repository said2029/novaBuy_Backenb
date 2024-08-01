const Attribute_md = require("../models/Attributes_model");

const Attribute_Get_All = async (req, res) => {
  // code to get all attributes
  const search = req.query.search || "";
  try {
    const attributes = await Attribute_md.find({
      name: new RegExp(search, "i"),
    });
    return res.json(attributes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const Attribute_Get_ById = async (req, res) => {
  // code to get attribute by id
  try {
    const attribute = await Attribute_md.findById(req.params.id);
    if (!attribute) return res.status(404).send("Attribute not found");
    return res.json(attribute);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const Attribute_Create = async (req, res) => {
  // code to create a new attribute
  try {
    const attribute = new Attribute_md(req.body);
    const newAttribute = await attribute.save();
    return res.json(newAttribute);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const Attribute_Update = async (req, res) => {
  // code to update an existing attribute
  try {
    const attribute = await Attribute_md.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!attribute) return res.status(404).send("Attribute not found");
    return res.json(attribute);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const Attribute_Delete = async (req, res) => {
  // code to delete an attribute by id
  try {
    const attribute = await Attribute_md.findByIdAndDelete(req.params.id);
    if (!attribute) return res.status(404).send("Attribute not found");
    return res.json(attribute);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  Attribute_Get_All,
  Attribute_Get_ById,
  Attribute_Create,
  Attribute_Update,
  Attribute_Delete,
};
