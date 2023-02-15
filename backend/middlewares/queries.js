const db = require("../service/connection")

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