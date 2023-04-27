const express = require("express");
const { getUserByUserId, getUsers, userModificationByUserId, userDeleteByUserId } = require('../controllers/user.js');

const router = express.Router();

router.get("/users", getUsers());
router.get("/users/:id", getUserByUserId());
router.put("/users/:id", userModificationByUserId());
router.delete("/users/:id", userDeleteByUserId());

module.exports = router;