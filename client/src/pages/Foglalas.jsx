import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Flex } from '@adobe/react-spectrum';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from 'react-bootstrap';
import moment from "moment";
import axios from 'axios'



export const Foglalas = () => {

    //useStates
    const [rooms, setRooms] = useState([]);
    const [filteredRoom, setFilteredRoom] = useState([]);

    const [checkIn, setCheckIn] = React.useState(new Date());
    const [checkOut, setCheckOut] = React.useState(new Date());

    const [types, setTypes] = React.useState([]);
    const [type, setType] = React.useState('');

    //useEffects
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
        setFilteredRoom(rooms.filter(room => room.room_type_name === type && room.available === 1))
    }, [rooms, type]);


    //handleChanges
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

    //field
    const ejszakak_szama = Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86400000)



    console.log(new Date(checkIn).toLocaleDateString("sv-SE"), new Date(checkOut).toLocaleDateString("sv-SE"), type)
    console.log(rooms)

    console.log(filteredRoom)



    //button
    const showResult = () => {
        const result = document.getElementById("result");
        if (filteredRoom.length === 0) {
            result.style.color = "red";
            result.style.fontSize = "40px";
            result.style.textTransform = "uppercase";
            result.innerText = "Nincs ilyen szoba"
        } else {
            filteredRoom.map((value, index) => {
                result.innerHTML = `<div >
                <div  id="roomCard" class="card">
                    <div class="card-body">
                        <h1 class="card-title">${value.room_type_name}</h1>
                        <h6 class="card-subtitle " >${value.price_night} Ft / éjszaka</h6>
                        <p class="card-text">${value.description}</p>

                        <Button id="button" style='background-color:transparent'>Foglalás</Button>
                    </div>
                </div>
            </div>`
            })
        }
    }


    return (
        <div className="section" style={{ textAlign: "center", }}>

            <div className='alcim'><h3>foglalás</h3></div>


            <div className="container">
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
                            <p style={{ paddingTop: 12, width: 'auto' }}> {ejszakak_szama} éjszaka</p>
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

                    <div style={{ textAlign: 'center', marginBottom: 30, marginTop: 10 }}>
                        <Button variant='outlined' id="button" onClick={() => showResult()} >Szabad szobák keresése</Button>
                    </div>

                    <hr />

                </div>

                <div className="row" id="result" style={{ justifyContent: "center", marginTop: 50 }}>



                </div>
            </div>







        </div>
    )
}