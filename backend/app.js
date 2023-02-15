const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

const db = require("./service/connection")
const addRoutes = require('./route/route')

app.use(bodyParser.json())
app.use(cors());

addRoutes(app)

db.connect((err) => {
    if (err) console.log(err);
    console.log("The connection is success...");
})

app.listen(8080, 'localhost', () => {
    "8080 figyel"
})
