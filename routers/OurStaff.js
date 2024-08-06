const {
  GetAll,
  GetById,
  Create,
  Update,
  Delete,
  Login,
  GetByEmail
} = require("../controllers/OurStaff");
const express = require("express");
const route = express.Router();

route.get("/", GetAll);

route.get("/:id", GetById);
route.get("/get_email/:email", GetByEmail);

route.post("/create", Create);
route.post("/login", Login);

route.put("/:id", Update);

route.delete("/:id", Delete);

module.exports = route;
