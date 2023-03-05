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

const { roomTypes, rooms, users, register, login, logout, userModify, userDelete, user } = require('../controllers/user')

function addRoutes(app) {
    app.get("/roomtype", roomTypes());
    app.get("/rooms", rooms());

    app.get("/users", users());
    app.get("/users/:id", user());
    app.put("/users/:id", userModify() );
    app.delete("/users/:id", userDelete());

    app.post("/register", register());
    app.post("/login", login());
    app.get("/logout", logout());

}

module.exports = addRoutes;

