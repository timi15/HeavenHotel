const db = require("../service/connection");

module.exports.getUsers = () => {
    return (req, res) => {
        myQuery = "SELECT * FROM user;";
        db.query(myQuery, (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.getUserByUserId = () => {
    return (req, res) => {
        myQuery = "SELECT * FROM user WHERE user_id LIKE ?;";
        db.query(myQuery, [req.params.id], (err, result, fields) => {
            if (err) throw err;
            else res.send(result)
        })
    }
}

module.exports.userModificationByUserId = () => {
    return (req, res) => {
        const { email, name, address, phone_number, is_admin } = req.body;
        db.query("UPDATE user SET email = ?, name = ?, address = ?, phone_number = ?, is_admin = ?  WHERE user_id LIKE ?;",
            [email, name, address, phone_number, is_admin, req.params.id],
            (err) => {
                if (err) return res.send(err);
                res.send("Updated...");
            });

    }

}

module.exports.userDeleteByUserId = () => {
    return (req, res) => {
        db.query("DELETE FROM user WHERE user_id LIKE ?;", [req.params.id], (err) => {
            if (err) res.send(err);
            res.status(200).send();
        })
    }
}

