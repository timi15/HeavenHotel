const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../service/connection");

module.exports.roomTypes = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM room_type;";
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.rooms = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id;";

        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })

    }
}

module.exports.users = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM user;";

        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.user = () => {
    return (req, res, next) => {
        myQuery = "SELECT * FROM user WHERE user_id LIKE ?;";

        db.query(myQuery, [req.params.id], (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}



module.exports.userModify = () => {
    return (req, res, next) => {
        const {  email, name, address, phone_number, is_admin  } = req.body;
        
        db.query("UPDATE user SET email = ?, name = ?, address = ?, phone_number = ?, is_admin = ?  WHERE user_id LIKE ?;",
            [email, name, address, phone_number, is_admin, req.params.id],
            (err) => {
                if (err) return res.send(err);
                res.send("Updated...");
            });
    }

}

module.exports.userDelete= ()=>{
    return (req, res, next)=>{
        db.query("DELETE FROM user WHERE user_id LIKE ?;", [req.params.id], (err) => {
            if (err) res.send(err);
            res.status(200).send();
        })
    }
}

module.exports.register = () => {
    return (req, res, next) => {
        const { email, password, name, address, phoneNumber } = req.body;

        db.query("SELECT * FROM user WHERE email LIKE ?;", [email], (err, rows) => {
            if (err) return res.status(500).json('Error')
            if (rows.length) return res.status(409).json("User already exists!");

            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(password, salt);

            db.query("INSERT INTO user (email, password, name, address, phone_number) VALUES (?);", [[email, hash, name, address, phoneNumber]], (err, data) => {
                if (err) res.status(500).json(err);
                res.status(201).json("User has been created.");
            });
        });
    }
}

module.exports.login = () => {
    return (req, res, next) => {
        db.query("SELECT * FROM user WHERE email = ?;", [req.body.email], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.length === 0) return res.status(204).json("User not found.");

            const isCorrectPassword = bcrypt.compareSync(req.body.password, data[0].password);
            console.log(isCorrectPassword);

            if (!isCorrectPassword)
                return res.status(400).send("Wrong username or password.");


            const token = jwt.sign({ id: data[0].user_id }, "secret");

            const { email, is_admin: isAdmin } = data[0];

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json({ email, isAdmin });
        });
    }
}

module.exports.logout = () => {
    return (req, res, next) => {
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).json("user has been logged out.")
    }
}