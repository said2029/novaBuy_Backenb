const express = require("express");
const { getOrders, getById, CreateOrder,Update } = require("../controllers/Order");
const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getById);
router.post("/create", CreateOrder);
router.put("/update/:id", Update);

module.exports = router;
