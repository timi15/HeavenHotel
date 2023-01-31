import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Flex } from '@adobe/react-spectrum';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from 'react-bootstrap';
import axios from 'axios'

export const RoomsFilter = () => {

    const [checkIn, setCheckIn] = React.useState(new Date().toLocaleDateString("sv-SE"));
    const [checkOut, setCheckOut] = React.useState(checkIn);

    const [types, setTypes] =React.useState([]);
    const [type, setType] = React.useState('');




    const handleChange = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    };







    const handleChangeCheckIn = (newValue) => {
        setCheckIn(new Date(newValue).toLocaleDateString("sv-SE"));
        setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"))
    };

    const handleChangeCheckOut = (newValue) => {
        setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"));

    };

    useEffect(() => {
        axios.get('http://localhost:8080/roomtype', {
            headers: {
                'Access-Control-Allow-Origin': "localhost:3000"
            }
        })
            .then((res) => {
                console.log(res.data);
                setTypes(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <>
            <div className="col-md-4 col-sm-4" style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <Flex gap={20}>

                        <DesktopDatePicker

                            label="Érkezés"
                            inputFormat="MM/DD/YYYY"
                            value={checkIn}
                            onChange={handleChangeCheckIn}
                            minDate={new Date()}
                            renderInput={(params) => <TextField {...params} />}
                        />



                        <DesktopDatePicker
                            label="Távozás"
                            inputFormat="MM/DD/YYYY"
                            value={checkOut}
                            minDate={checkIn}
                            onChange={handleChangeCheckOut}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Flex>



                </LocalizationProvider>

            </div>

            <div className="col-md-3 col-sm-3">


                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-simple-select-label">Szobatípus</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"


                        label="Szobatípus"
                        onChange={handleChange}
                        value={type}

                    >
                        <MenuItem value="">
                            <em>NONE</em>

                        </MenuItem>

                        {Array.from(types).map((val, index) =>
                            <MenuItem key={index} value={val.room_type_name}>{val.room_type_name}</MenuItem>

                        )}
                    </Select>
                </FormControl>




            </div>

            <div className="col-md-3 col-sm-2" >

                <div className="column">


                    <input type="range" name="" id="" />
                </div>






            </div>

            <div className="col-md-1 col-sm-3" >

                <Button >Keresés</Button>


            </div>

        </>
    )
}
