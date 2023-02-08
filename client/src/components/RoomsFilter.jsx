import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Flex } from '@adobe/react-spectrum';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Card } from 'react-bootstrap';
import { InputAdornment, OutlinedInput } from '@mui/material';
import moment from "moment";
import axios from 'axios'


export const RoomsFilter = () => {

    const [rooms, setRooms] = useState([]);
    const [filteredRoom, setFilteredRoom] = useState([]);

    const [checkIn, setCheckIn] = React.useState(new Date());
    const [checkOut, setCheckOut] = React.useState(new Date());

    const [types, setTypes] = React.useState([]);
    const [type, setType] = React.useState('');

    const [price, setPrice] = React.useState('');



    useEffect(() => {
        setCheckOut(moment(new Date()).add(1, 'days').format());


        const fillTypes = async () => {
            const response1 = await axios.get("http://localhost:8080/roomtype", {
                headers: {
                    'Access-Control-Allow-Origin': "localhost:3000"
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setTypes(res.data)

                })
        };

        const fillRooms = async () => {
            const response2 = await axios.get("http://localhost:8080/rooms", {
                headers: {
                    'Access-Control-Allow-Origin': "localhost:3000"
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setRooms(res.data)

                })
        };

        fillTypes();
        fillRooms();

    }, []);

    useEffect(() => {
        setFilteredRoom(rooms.filter(room => room.room_type_name === type && room.price_night < price))
    }, [rooms, type, price]);



    const handleChange = (event) => {
        setType(event.target.value);

    };

    const handleChangeCheckIn = (newValue) => {

        setCheckIn(moment(Date.parse(newValue)).format());
        setCheckOut(moment(Date.parse(newValue)).add(1, 'days').format())

    };

    const handleChangeCheckOut = (newValue) => {
        setCheckOut(moment(Date.parse(newValue)).format());

    };




    console.log(new Date(checkIn).toLocaleDateString("sv-SE"), new Date(checkOut).toLocaleDateString("sv-SE"), type, price)
    console.log(rooms)

    console.log(filteredRoom)

    return (
        <>
            <div className="section" style={{ textAlign: "center" }}>
                <div className="container" style={{ display: "contents" }} >
                    <div className="row" style={{ marginBottom: 10 }}>


                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <Flex gap={20} width={"100%"} justifyContent="safe center" >
                                <DesktopDatePicker
                                    label="Érkezés"
                                    inputFormat="YYYY-MM-DD"
                                    value={checkIn}
                                    onChange={handleChangeCheckIn}
                                    minDate={new Date()}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DesktopDatePicker
                                    label="Távozás"
                                    inputFormat="YYYY-MM-DD"
                                    value={checkOut}
                                    minDate={checkIn}
                                    onChange={handleChangeCheckOut}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <p style={{ paddingTop: 12, width: 'auto' }}>amely {Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86400000)} éjszaka</p>
                            </Flex>


                        </LocalizationProvider>


                    </div>
                    <div className="row" style={{ marginBottom: 10, justifyContent: "center" }}>

                        <FormControl sx={{ m: 1, width: 250 }}>
                            <InputLabel id="demo-simple-select-label">Szobatípus</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Szobatípus"
                                onChange={handleChange}
                                value={type}
                            >
                                <MenuItem value="">
                                    <em>nincs kiválasztva</em>
                                </MenuItem>
                                {Array.from(types).map((val, index) =>
                                    <MenuItem key={index} value={val.room_type_name}>{val.room_type_name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 150 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Limit</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">Ft</InputAdornment>}
                                label="Limit"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </FormControl>
                    </div>

                    <div className="row" style={{ justifyContent: "center" }}>

                        


                    </div>

                    <div className="row" >

                        {
                            
                            filteredRoom.map((value, index) =>

                            <Card style={{ width: '18rem' }} key={index}>
                                
                                <Card.Body>
                                    <Card.Title>{value.room_type_name}</Card.Title>
                                    <Card.Text>
                                        {value.description}
                                    </Card.Text>
                                    <Button variant="primary" >Foglalás</Button>
                                </Card.Body>
                            </Card>

                        
                        )
                        }

                    </div>



                </div>
            </div>



        </>
    )
}
