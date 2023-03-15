const db = require("../service/connection");
const moment = require('moment');

module.exports.createBooking = () => {
    return (req, res) => {
        const { userId, roomId, checkInDate, checkOutDate, nightNumber, amount } = req.body;

        const checkIn = moment(checkInDate);
        const checkOut = moment(checkOutDate);
        const duration = moment.duration(checkOut.diff(checkIn));


        if (duration.asMinutes() <= 0) {
            res.status(400).send({ message: 'End date must be after start date' });
            return;
        }

        db.query('SELECT COUNT(*) AS count FROM booking WHERE room_id = ? AND check_in < ? AND check_out > ?', [roomId, checkOutDate, checkInDate], (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send({ message: 'Internal server error' });
                return;
            }

            const count = results[0].count;
            if (count > 0) {
                res.status(400).send({ message: 'Room already reserved for the selected time period' });
                return;
            }

            db.query('INSERT INTO booking ( user_id, room_id, check_in, check_out, night_number, amount) VALUES (?, ?, ?, ?, ?, ?)', [userId, roomId, checkInDate, checkOutDate, nightNumber, amount], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).send({ message: 'Internal server error' });
                    return;
                }

                res.status(201).send({ message: 'Reservation created' });
            });
        });
    }
}


module.exports.getAvailableRooms = () => {
    return (req, res) => {
        const { type, checkInDate, checkOutDate } = req.body;
        myQuery = "SELECT room.room_id, room_type.room_type_name, room_type.description, room_type.space, room_type.price_night FROM room INNER JOIN room_type ON room.room_type_id= room_type.room_type_id WHERE room_type.room_type_name LIKE ? AND room.room_id NOT IN (SELECT room_id FROM booking WHERE booking.check_in <= ? AND booking.check_out >= ? );";
        db.query(myQuery, [type, checkOutDate, checkInDate], (err, results,) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Internal server error' });
                return;
            }
            if (results.length === 0) {
                return res.status(400).send({ message: "nincs szabad szoba" })
            }

            res.send(results)

        })
    }
}