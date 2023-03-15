import React, { useContext, useEffect, useState } from 'react'
import { TextField, Select, MenuItem, Button, InputLabel, FormControl, Card, CardContent, Typography, CardActions } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RoomContext } from '../context/room/RoomContext';
import { RoomTypeContext } from '../context/room/RoomTypeContext';
import { AuthContext } from '../context/auth/AuthContext';
import { Flex } from '@adobe/react-spectrum';
import moment from "moment";
import Swal from 'sweetalert2';
import axios from "axios";

export const Foglalas = () => {

    const { rooms } = useContext(RoomContext);
    const { roomTypes } = useContext(RoomTypeContext);
    const { currentUser } = useContext(AuthContext);

    const [availableRooms, setAvailableRooms] = useState([]);

    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [type, setType] = useState('');
    const [show, setShow] = useState(false);

    const nightNumber = Math.round((Date.parse(checkOutDate) - Date.parse(checkInDate)) / 86400000)

    const handleCheckInDateChange = (newValue) => {
        setCheckInDate(moment(Date.parse(newValue)).format());
        setCheckOutDate(moment(Date.parse(newValue)).add(1, 'days').format())

    };

    const handleCheckOutDateChange = (newValue) => {
        setCheckOutDate(moment(Date.parse(newValue)).format());

    };

    const handleChangeRoomType = (event) => {
        setType(event.target.value);
    };



    const handleSubmit = () => {
        // console.log(checkInDate, checkOutDate, type);
        axios.post("http://localhost:8080/reservations/availablerooms", { type, checkInDate, checkOutDate }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                setAvailableRooms(res.data)
            }
        }).catch((err) => {
            Swal.fire(
                {
                    icon: "warning",
                    title: "Sajnos nincs szabad szoba!",
                    text: "Kérem, válasszon másik időintervallumot!",
                    confirmButtonText: 'Megértettem!'
                }
            )
        })
    };

    const reservation = (roomId, priceNight) => {
        if (currentUser === null) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: "Sikertelen foglalás!",
                text: 'Jelentkezzen be fiókjába!',
                showConfirmButton: false,
                timer: 5000
            })
        } else {
            const userId = currentUser['userId'];
            const email= currentUser['email'];
            const amount = priceNight * nightNumber;
            axios.post("http://localhost:8080/reservations", { email, userId, roomId, checkInDate, checkOutDate, nightNumber, amount }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Sikeres foglalás!",
                        text: 'Hotelünk hamarosan felveszi Önnel a kapcsolatot a foglalással kapcsolatban...',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            })
        }
    }

    useEffect(() => {
        setCheckOutDate(moment(new Date()).add(1, 'days').format());
    }, []);

    return (

        <div className="section">
            <div className='alcim'><h3>foglalás</h3></div>
            <div className="container" style={{ marginTop: 30 }}>
                <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: 30 }}>
                    <div >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Flex height={70} gap={20} justifyContent="safe center" >

                                <DatePicker
                                    minDate={new Date()}
                                    inputFormat="YYYY-MM-DD"
                                    label="Érkezés"
                                    value={checkInDate}
                                    onChange={handleCheckInDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                                <DatePicker
                                    minDate={checkInDate}
                                    inputFormat="YYYY-MM-DD"
                                    label="Távozás"
                                    value={checkOutDate}
                                    onChange={handleCheckOutDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <p style={{ paddingTop: 12, width: 'auto' }}> {nightNumber} éjszaka</p>
                            </Flex>


                        </LocalizationProvider>
                    </div>

                    <div>
                        <FormControl sx={{ m: 2, width: 250, }}>
                            <InputLabel id="demo-simple-select-label">Szobatípus</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Szobatípus"
                                value={type}
                                onChange={handleChangeRoomType}

                            >
                                <MenuItem value="">
                                    <em>nincs kiválasztva</em>
                                </MenuItem>
                                {Array.from(roomTypes).map((val, index) =>
                                    <MenuItem key={index} value={val.room_type_name}>{val.room_type_name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </div>



                    <Button onClick={() => { setShow(true); handleSubmit() }} id="button" variant="outlined" style={{ margin: 15 }}>
                        Szabad szobák keresése
                    </Button>
                </form>

                <hr />

                <div className="row">
                    {
                        (show && (
                            availableRooms.map((value, index) =>

                                <Card className='room' sx={{ maxWidth: "100%", margin: 2, padding: 2, backgroundColor: "#F4F1DE", borderColor: "#434A42", borderRadius: 10, borderWidth: 7, borderStyle: "double" }} key={index}>

                                    <CardContent>

                                        <Typography variant='subtitle2'>
                                           Foglalni kívánt időszak: {new Date(checkInDate).toLocaleDateString("sv-SE")}   { new Date(checkOutDate).toLocaleDateString("sv-SE")}
                                        </Typography>

                                        <Typography variant="h5" component="div" style={{ fontFamily: "Rozha One", textTransform: "lowercase", textAlign: "center" }}>
                                            {value.room_type_name}
                                        </Typography>
                                        

                                        <hr style={{ margin: 'auto', padding: 15 }} />
                                        <Typography variant="body1" textAlign={'justify'} >
                                            {value.description}
                                        </Typography>


                                        <Typography variant="body1" color="text.secondary">
                                            Ágyak: {value.space}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Maximális létszám:  {value.space}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Szobaár: {value.price_night} Ft. / Éjszakától
                                        </Typography>
                                        <Typography variant="body1" color="red" style={{ textAlign: "center" }}>
                                            Fizetendő összeg: {value.price_night * nightNumber} Ft
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button id='button' onClick={() => reservation(value.room_id, value.price_night)} variant='outlined' size="small">Foglalás</Button>
                                    </CardActions>


                                </Card>

                            )
                        ))
                    }
                </div>
            </div>
        </div>


    )
}
