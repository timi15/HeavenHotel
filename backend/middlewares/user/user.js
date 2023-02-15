const dbData = require("../queries")

module.exports.room_type=()=>{
    return (req,res, next)=>{
        dbData.room_types((err, data)=>{
            if (err) throw err;
            res.json(data)
        })
    }
}

module.exports.rooms=()=>{
    return (req, res, next)=>{
        dbData.rooms((err, data)=>{
            if (err) throw err;
            res.json(data)
        })
    }
}