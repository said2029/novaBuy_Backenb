const express = require("express");
const { getOrders, getById, CreateOrder } = require("../controllers/Order");
const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getById);
router.post("/", CreateOrder);

module.exports = router;
