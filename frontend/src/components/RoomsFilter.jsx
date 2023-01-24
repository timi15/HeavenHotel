import React from 'react';
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

export const RoomsFilter = ({rooms}) => {

    const [checkIn, setCheckIn] = React.useState(new Date().toLocaleDateString("sv-SE"));
    const [checkOut, setCheckOut] = React.useState(checkIn);


    const [type, setType] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState([20, 37]);
    const [min, setMin]= React.useState(value[0]);
    const [max, setMax]= React.useState(value[1]);

    const handleChangeSlide = (event, newValue) => {
        
        setValue(newValue);
        setMin(event.target.value[0]);
        setMax((event.target.value[1]));
        
        
    };

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



    const handleChangeCheckIn = (newValue) => {
        setCheckIn(new Date(newValue).toLocaleDateString("sv-SE"));
        setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"))
    };

    const handleChangeCheckOut = (newValue) => {
        setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"));

    };
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
                    <InputLabel id="demo-controlled-open-select-label">Szobatípus</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={type}
                        label="Szobatípus"
                        onChange={handleChange}

                    >
                        <MenuItem value="">
                            <em>NONE</em>

                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>




            </div>

            <div className="col-md-3 col-sm-2" >

                <Box sx={{ width: 200 }}>



                    <Slider
                        value={value}
                        onChange={handleChangeSlide}
                        valueLabelDisplay="off"


                    />

                    <p>{min}Ft  {max}Ft</p>





                </Box>






            </div>

            <div className="col-md-1 col-sm-3" >

                <Button >Keresés</Button>


            </div>

        </>
    )
}
