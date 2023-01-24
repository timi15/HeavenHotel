const express = require('express');
const mysql = require("mysql")
const app= express()
app.use(express.json());

const db= mysql.createConnection(
    {
        port:3306,
        host:"localhost",
        user:"root",
        password:"",
        database:"heaven"
    }
)

db.connect(()=>{
    
    console.log("Connected!");
    let sql= "INSERT INTO room_type(room_type_name, description) VALUES ('Superior egyágyas szoba', 'Kényelmes, 16 m2 alapterületű egyágyas szoba 1 fő részére. A fürdőszobában ülőkád található. Bekészítések: törölköző, hajszárító. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.') ";
    db.query(sql, (err, result)=>{
        if(err){
            throw err
        }
        console.log("beszurva");


    })
})



app.listen(8080, 'localhost', ()=>{
    "8080 figyel"
})
