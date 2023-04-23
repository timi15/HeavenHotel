const express = require("express");
const { createBooking, getAllBookings, getAvailableRooms, bookingDeleteByBookingId } = require('../controllers/booking.js');

const router = express.Router();

router.get("/reservations", getAllBookings());
router.post("/reservations", createBooking());
router.post("/reservations/availablerooms", getAvailableRooms());
router.delete("/reservations/:id", bookingDeleteByBookingId());

module.exports = router;