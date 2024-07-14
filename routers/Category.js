const express = require("express");
const {
  getAll,
  getById,
  create,
  update,
  Delele,
} = require("../controllers/Category");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", Delele);

module.exports = router;
