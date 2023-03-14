const db = require("../service/connection");

module.exports.getRoomTypes = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM room_type;";
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.getRoomTypeById = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM room_type WHERE room_type_id LIKE ?;";

        db.query(myQuery, [req.params.id], (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.roomModificationById = () => {
    return (req, res, next) => {
        const {  room_type_name, description, space, price_night } = req.body;
        
        db.query("UPDATE room_type SET room_type_name = ?, description = ?, space = ?, price_night = ? WHERE room_type_id LIKE ?;",
            [room_type_name, description, space, price_night, req.params.id],
            (err) => {
                if (err) return res.send(err);
                res.send("Updated...");
            });
    }

}

module.exports.getRooms = () => {
    return  (req, res, next) => {
        myQuery = "SELECT * FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id;";

        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })

    }
}