const express = require('express');
const cors = require("cors");
const authRoute = require("./routes/auth.js");
const bookingRoute = require("./routes/booking.js");
const roomRoute = require("./routes/room.js");
const userRoute = require("./routes/user.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./service/connection");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

app.use("/auth", authRoute);
app.use("/reservation",  bookingRoute);
app.use("/room", roomRoute);
app.use("/user", userRoute);

db.connect((err) => {
    if (err) console.log(err);
    console.log("The connection is successfull...");
})

app.listen(process.env.PORT, 'localhost', () => {
    console.log("Listening to port " + process.env.PORT);
})
