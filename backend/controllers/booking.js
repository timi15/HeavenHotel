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

module.exports.getAllBookings = () => {
    return (req, res) => {
        myQuery = "SELECT * FROM booking a JOIN room b ON a.room_id = b.room_id  JOIN room_type c ON b.room_type_id = c.room_type_id;"
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}