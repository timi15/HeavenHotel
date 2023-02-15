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

const { room_type, rooms } = require('../middlewares/user/user')

function addRoutes(app) {
    app.get("/roomtype", room_type())
    app.get("/rooms", rooms())
}

module.exports = addRoutes;

