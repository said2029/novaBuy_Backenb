const express = require("express");
const {
  Create,
  UpdataProduct,
  Delete,
  GetById,
  GetAll,
} = require("../controllers/Prodouct");

const router = express.Router();

// Routes
router.get("/", GetAll);
router.get("/:id", GetById);
router.post("/create", Create);
router.put("/:id", UpdataProduct);
router.delete("/:id", Delete);

module.exports = router;
