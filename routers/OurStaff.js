const {
  GetAll,
  GetById,
  Create,
  Update,
  Delete,
} = require("../controllers/OurStaff");
const express = require("express");
const route = express.Router();

route.get("/", GetAll);

route.get("/:id", GetById);

route.post("/create", Create);

route.put("/:id", Update);

route.delete("/:id", Delete);

module.exports = route;
