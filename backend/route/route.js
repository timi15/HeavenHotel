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

const { room_type, rooms, users, user } = require('../middlewares/userMWs/user')

function addRoutes(app) {
    app.get("/roomtype", room_type())
    app.get("/rooms", rooms())
    app.get("/users", users())
    app.put("/users", user())
}

module.exports = addRoutes;

