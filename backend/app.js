const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authorize = require("./middlewares/authMW.js");

const authRoute = require("./route/auth.js");
const bookingRoute = require("./route/booking.js");
const roomRoute = require("./route/room.js");
const userRoute = require("./route/user.js");

const db = require("./service/connection");
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

app.use("/auth", authRoute);
app.use("/reservation",  bookingRoute);
app.use("/room",  roomRoute);
app.use("/user",   userRoute);

db.connect((err) => {
    if (err) console.log(err);
    console.log("The connection is successfull...");
})

app.listen(process.env.PORT, 'localhost', () => {
    console.log("Listening to port " + process.env.PORT);
})
