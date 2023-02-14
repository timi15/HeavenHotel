const express = require('express');
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")
const app= express()

app.use(bodyParser.json())
app.use(cors());


const db= mysql.createConnection(
    {
        port:3306,
        host:"localhost",
        user:"root",
        password:"",
        database:"heaven"
    }
)

db.connect((err)=>{
    if (err){
        console.log(err);
    }
    console.log("Connect");
})




app.get("/roomtype", (req,res)=>{
    db.query("SELECT * FROM room_type ", (err, result, fields)=>{
        if (err){
         console.log(err);
        }
     
        res.send(result)
    })
})

app.get("/rooms", (req,res)=>{
    db.query("SELECT * FROM room INNER JOIN room_type ON room.room_type_id = room_type.room_type_id ", (err, result, fields)=>{
        if (err){
         res.status(204).json("Hiba")
        }
        res.send(result)
    })
})


app.listen(8080, 'localhost', ()=>{
    "8080 figyel"
})
