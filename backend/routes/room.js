const express = require("express");
const { getRooms, getRoomTypes, getRoomTypeById, getRoomById, roomTypeModificationById, roomModificationById } = require('../controllers/room.js');

const router = express.Router();

router.get("/roomtypes", getRoomTypes());
router.get("/roomtypes/:id", getRoomTypeById());
router.put("/roomtypes/:id", roomTypeModificationById());

router.get("/rooms", getRooms());
router.get("/rooms/:id", getRoomById());
router.put("/rooms/:id", roomModificationById());

module.exports=router;