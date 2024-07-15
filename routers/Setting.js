const {
  getGlobalSetting,
  updateGlobalSetting,
} = require("../controllers/Setting");

const express = require("express");

const router = express.Router();

router.get("/", getGlobalSetting);

router.put("/update", updateGlobalSetting);

module.exports = router;
