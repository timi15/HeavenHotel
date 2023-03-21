const { getUserByUserId, getUsers, userModificationByUserId, userDeleteByUserId } = require('../controllers/user.js');
const { register, login, logout } = require('../controllers/auth.js');
const { getRooms, getRoomTypes, roomModificationById, getRoomTypeById } = require('../controllers/room.js');
const {  createBooking, getAllBookings, getAvailableRooms, bookingDeleteByBookingId } = require('../controllers/booking.js');

function addRoutes(app) {
    app.get("/roomtypes", getRoomTypes());
    app.get("/roomtypes/:id", getRoomTypeById());
    app.put("/roomtypes/:id", roomModificationById());

    app.get("/rooms", getRooms());

    app.get("/reservations", getAllBookings());
    app.post("/reservations", createBooking());
    app.post("/reservations/availablerooms", getAvailableRooms());
    app.delete("/reservations/:id", bookingDeleteByBookingId());


    app.get("/users", getUsers());
    app.get("/users/:id", getUserByUserId());
    app.put("/users/:id", userModificationByUserId());
    app.delete("/users/:id", userDeleteByUserId());

    app.post("/register", register());
    app.post("/login", login());
    app.get("/logout", logout());

}

module.exports = addRoutes;

