import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




export const MoneySlider = () => {

    const [value, setValue] = React.useState([20, 37]);
    const [min, setMin]= React.useState(value[0]);
    const [max, setMax]= React.useState(value[1]);

    const handleChange = (event, newValue) => {
        
        setValue(newValue);
        setMin(event.target.value[0]);
        setMax((event.target.value[1]));
        
        
    };
    

    
    return (
        <Box sx={{ width: 200 }}>

            
                
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    

                />

                <p>{min}Ft  {max}Ft</p>

                

            

        </Box>
    )
}
