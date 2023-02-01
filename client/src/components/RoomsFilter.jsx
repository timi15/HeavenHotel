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
import { Button } from 'react-bootstrap';
import axios from 'axios'
import { InputAdornment, OutlinedInput, Typography } from '@mui/material';


export const RoomsFilter = () => {

    

    const [checkIn, setCheckIn] = React.useState(new Date().toLocaleDateString("sv-SE"));
    const [checkOut, setCheckOut] = React.useState(checkIn);

    const [types, setTypes] = React.useState([]);
    const [type, setType] = React.useState('');




    const handleChange = (event) => {
        setType(event.target.value);

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

    console.log(checkIn, checkOut);
    return (
        <>
            <div className="section" style={{ textAlign: "center" }}>
                <div className="container" style={{ display: "contents" }} >
                    <div className="row" style={{marginBottom:10}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8" style={{ textAlign: 'center' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <Flex gap={20} width={"100%"} justifyContent="safe center" >
                                    <DesktopDatePicker
                                        label="Érkezés"
                                        inputFormat="DD/MM/YYYY"
                                        value={checkIn}
                                        onChange={handleChangeCheckIn}
                                        minDate={new Date()}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <DesktopDatePicker
                                        label="Távozás"
                                        inputFormat="DD/MM/YYYY"
                                        value={checkOut}
                                        minDate={checkIn}
                                        onChange={handleChangeCheckOut}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Flex>


                            </LocalizationProvider>
                            <p style={{ paddingTop: 12, width: 'auto' }}>amely {(Date.parse(checkOut) - Date.parse(checkIn)) / 86400000} éjszaka</p>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom:10}}>
                        <div className="col-md-12">
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
                            <FormControl sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Maximum ár</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">Ft</InputAdornment>}
                                    label="Maximum ár"
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <Button>Szabad szobák keresése</Button>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
