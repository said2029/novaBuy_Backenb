const express = require("express");
const { update,get } = require("../../controllers/Store Customizations/HomeSetting");

const router = express.Router();

router.put("/update", update);
router.get("/", get);

module.exports = router;

