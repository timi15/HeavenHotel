const db = require("../service/connection");

module.exports.getRoomTypes = () => {
    return (req, res) => {
        myQuery = "SELECT * FROM room_type;";
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.getRoomTypeById = () => {
    return (req, res) => {
        myQuery = "SELECT * FROM room_type WHERE room_type_id LIKE ?;";
        db.query(myQuery, [req.params.id], (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.roomTypeModificationById = () => {
    return (req, res) => {

        const { room_type_name, description, space, price_night } = req.body;
        db.query("UPDATE room_type SET room_type_name = ?, description = ?, space = ?, price_night = ? WHERE room_type_id LIKE ?;",
            [room_type_name, description, space, price_night, req.params.id],
            (err) => {
                if (err) return res.send(err);
                res.send("Updated...");
            });
    }
}



module.exports.getRooms = () => {
    return (req, res) => {

        myQuery = "SELECT * FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id;";
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })

    }
}

module.exports.getRoomById = () => {
    return (req, res) => {
        myQuery = "SELECT room_id, room_number, room.room_type_id FROM room  WHERE room_id LIKE ?;";
        db.query(myQuery, [req.params.id], (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.roomModificationById = () => {
    return (req, res) => {
        const { room_number, room_type_id } = req.body;
        db.query("UPDATE room SET room_number = ?, room_type_id= ? WHERE room_id LIKE ?;",
            [room_number, room_type_id, req.params.id],
            (err) => {
                if (err) return res.send(err);
                res.send("Updated...");
            });
    }
}
