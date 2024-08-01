const express = require("express");
const {
  Attribute_Get_All,
  Attribute_Get_ById,
  Attribute_Create,
  Attribute_Update,
  Attribute_Delete,
} = require("../controllers/Attributes");

const route = express.Router();

route.get("/", Attribute_Get_All);

route.get("/:id", Attribute_Get_ById);

route.post("/create", Attribute_Create);

route.put("/update/:id", Attribute_Update);

route.delete("/:id", Attribute_Delete);

module.exports = route;
