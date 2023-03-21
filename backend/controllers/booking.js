const db = require("../service/connection");
const moment = require('moment');
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

moment.locale("hu")

sendMail = (email, checkInDate, checkOutDate, nightNumber, amount) => {

    const message = `<h4>Tisztelt ${email}!</h4><p>Köszönjük, hogy nálunk fogalalt, melyet ezen levéllel visszaigazolunk.</p><p ><b>Foglalás adatai:</b></p><ul><li><p>Érkezés: <b>${moment(checkInDate).format('LL')}</b> </p></li> <li><p>Távozás: <b>${moment(checkOutDate).format('LL')}</b> </p></li><li><p>Éjszakák száma: <b>${nightNumber}</b> </p></li><li><p>Fizetendő összeg: <b>${amount} Ft</b> </p></li></ul><br><p>Tisztelettel <br>Heaven Hotel csapata</p><br><hr ><p > Ha bármilyen kérdése van, keresse recepciónkat az alábbi telefonszámon: +36-30-234-6421</p>`

    const transporter = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        secure: false,
        auth: {
            user: 'saleshotelheaven01@gmail.com',
            pass: 'lxeehudyrtcdgscd'
        },
        tls: {
            rejectUnauthorized: false
        }
    }));

    const mailOptions = {
        from: 'saleshotelheaven01@gmail.com',
        to: `${email}`,
        subject: 'Sikeres foglalás',
        html: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports.getAllBookings = () => {
    return (req, res) => {
        myQuery = "SELECT booking.booking_id, room.room_number,  user.name, room_type.room_type_name, booking.check_in, booking.check_out, booking.night_number, booking.amount FROM user INNER JOIN booking ON user.user_id = booking.user_id INNER JOIN room ON booking.room_id= room.room_id INNER JOIN room_type ON room_type.room_type_id= room.room_type_id;";
        db.query(myQuery, (err, result) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}


module.exports.createBooking = () => {
    return (req, res) => {
        const { email, userId, roomId, checkInDate, checkOutDate, nightNumber, amount } = req.body;

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
                sendMail(email, checkInDate, checkOutDate, nightNumber, amount);

            });
        });
    }
}


module.exports.getAvailableRooms = () => {
    return (req, res) => {
        const { type, checkInDate, checkOutDate } = req.body;
        myQuery = "SELECT room.room_id, room_type.room_type_name, room_type.description, room_type.space, room_type.price_night FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id WHERE room_type.room_type_name LIKE ? AND room.room_id NOT IN (SELECT room_id FROM booking WHERE booking.check_in <= ? AND booking.check_out >= ? );";
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

module.exports.bookingDeleteByBookingId= ()=>{
    return (req, res, next)=>{
        db.query("DELETE FROM booking WHERE booking_id LIKE ?;", [req.params.id], (err) => {
            if (err) res.send(err);
            res.status(200).send();
        })
    }
}


