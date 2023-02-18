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

module.exports.users=()=>{
    return (req, res, next)=>{
        dbData.users((err, data)=>{
            if (err) throw err;
            res.json(data)
        })
    }
}

module.exports.user=()=>{
    return (req, res, next)=>{
        if( req.method ==='PUT'){
            dbData.addUser(req.body, (err, data)=>{
                if (err) res.json({status: "error"})
                else res.json({status:"ok"})
            })
        }
    }
}