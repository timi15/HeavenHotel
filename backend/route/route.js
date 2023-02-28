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

const { roomTypes, rooms, users, register, login, logout } = require('../middlewares/user')

function addRoutes(app) {
    app.get("/roomtype", roomTypes());
    app.get("/rooms", rooms());
    app.get("/users", users());
    app.post("/register", register());
    app.post("/login", login());
    app.get("/logout", logout());

}

module.exports = addRoutes;

