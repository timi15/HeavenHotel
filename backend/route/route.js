/*

    GET /roomtype
    ->
    <- szobatípusok listája

    GET /rooms
    ->
    <- szobak listája


    GET /users
    ->
    <- felhasználók listája

    GET /admins
    ->
    <- adminok listája

*/

const { getUserByUserId, getUsers, userModificationByUserId, userDeleteByUserId } = require('../controllers/user.js');
const { register, login, logout } = require('../controllers/auth.js');
const { getRooms, getRoomTypes, roomModificationById, getRoomTypeById } = require('../controllers/room.js');
const {  createBooking, getAllBookings, getAvailableRooms } = require('../controllers/booking.js');

function addRoutes(app) {
    app.get("/roomtypes", getRoomTypes());
    app.get("/roomtypes/:id", getRoomTypeById())
    app.put("/roomtypes/:id", roomModificationById());

    app.get("/rooms", getRooms());

    app.post("/reservations", createBooking())
    app.post("/reservations/availablerooms", getAvailableRooms())

    app.get("/users", getUsers());
    app.get("/users/:id", getUserByUserId());
    app.put("/users/:id", userModificationByUserId());
    app.delete("/users/:id", userDeleteByUserId());

    app.post("/register", register());
    app.post("/login", login());
    app.get("/logout", logout());

}

module.exports = addRoutes;

