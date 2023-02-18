const db = require("../service/connection");
const { hashSync, compareSync } = require("bcryptjs");

module.exports.room_types= (callback)=>{
    myQuery= "SELECT * FROM room_type;";
    db.query(myQuery, (err, result, fields)=>{
        if (err) callback(err)
        else callback(null, result)
    })
}


module.exports.rooms=(callback)=>{
    myQuery ="SELECT * FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id;";
    db.query(myQuery,(err,result, fields)=>{
        if (err) callback(err)
        else callback(null, result)
    })
}

module.exports.users=(callback)=>{
    myQuery="SELECT * FROM user;";
    db.query(myQuery,(err, result, fields)=>{
        if (err) callback(err);
        else callback(null, result)
    })

}

module.exports.addUser =(data, callback)=>{
    const hashedPassword = hashSync(data.password, 10);
    myQuery= "INSERT INTO user (password, name, address, phone_number, email) VALUE (?, ?, ?, ?, ?);";
    db.query(myQuery,[hashedPassword, data.name, data.address, data.phone_number, data.email ], (err, result,field)=>{
        if (err) callback(err.sqlMessage, null);
        else callback(null, result)
    })
}