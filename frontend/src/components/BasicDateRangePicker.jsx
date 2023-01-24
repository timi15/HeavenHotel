import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Flex } from '@adobe/react-spectrum';

export default function BasicDatePicker() {
  const [checkIn, setCheckIn] = React.useState(new Date().toLocaleDateString("sv-SE"));
  const [checkOut, setCheckOut] = React.useState(checkIn);



  const handleChangeCheckIn = (newValue) => {
    setCheckIn(new Date(newValue).toLocaleDateString("sv-SE"));
    setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"))
  };

  const handleChangeCheckOut = (newValue) => {
    setCheckOut(new Date(newValue).toLocaleDateString("sv-SE"));

  };

  // console.log(checkIn, checkOut);
  
  return (
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
  );
}