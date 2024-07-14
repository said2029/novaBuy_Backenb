const express = require("express");
const { get, getBayId, CreateUser, updateUser, deleteUser } = require("../controllers/User");
const router = express.Router();

router.get("/", get);
router.get('/:id',getBayId)
router.post('/create',CreateUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports = router;
