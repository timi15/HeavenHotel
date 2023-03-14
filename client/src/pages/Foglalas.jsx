import React, { useContext, useEffect, useState } from 'react'
import { TextField, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RoomContext } from '../context/room/RoomContext';
import { RoomTypeContext } from '../context/room/RoomTypeContext';
import { AuthContext } from '../context/auth/AuthContext';
import { Flex } from '@adobe/react-spectrum';
import moment from "moment";

export const Foglalas = () => {
    const [formData, setFormData] = useState({
        checkInDate: new Date(),
        checkOutDate: new Date(),
    });
    const [type, setType] = React.useState('');

    const { rooms } = useContext(RoomContext);
    const { roomTypes } = useContext(RoomTypeContext);
    const { currentUser } = useContext(AuthContext);

    const handleCheckInDateChange = (newValue) => {
        setFormData({
            ...formData,
            checkOutDate: moment(Date.parse(newValue)).add(1, 'days').format(),
            checkInDate: moment(Date.parse(newValue)).format(),
        });
    };

    const handleCheckOutDateChange = (newValue) => {
        setFormData({
            ...formData,
            checkOutDate: moment(Date.parse(newValue)).format(),
        });
    };

    const handleChangeRoomType = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        setFormData({
            ...formData,
            checkOutDate: moment(new Date()).add(1, 'days').format(),
        });
    }, []);

    console.log(new Date(formData?.checkInDate).toLocaleDateString("sv-SE"), new Date(formData?.checkOutDate).toLocaleDateString("sv-SE"), type)

    return (

        <div className="section">
            <div className="container" style={{ marginTop: 30 }}>
                <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                    <div >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Flex gap={20} justifyContent="safe center" >

                                <DatePicker
                                    minDate={new Date()}
                                    inputFormat="YYYY-MM-DD"
                                    label="Érkezés"
                                    value={formData?.checkInDate}
                                    onChange={handleCheckInDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                                <DatePicker
                                    minDate={formData?.checkInDate}
                                    inputFormat="YYYY-MM-DD"
                                    label="Távozás"
                                    value={formData?.checkOutDate}
                                    onChange={handleCheckOutDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Flex>


                        </LocalizationProvider>
                    </div>

                    <div>
                        <FormControl sx={{ m: 1, width: 250 }}>
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



                    <Button id="button" type="submit" variant="outlined">
                        Szabad szobák keresése
                    </Button>
                </form>
            </div>
        </div>


    )
}
