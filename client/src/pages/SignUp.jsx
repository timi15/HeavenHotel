import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export const SignUp = () => {
    return (

        <Container  component="main" style={{maxWidth:600}}>

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >

                <Typography component="h1" variant="h5">
                    Regisztráció
                </Typography>
                <Box component="form"  sx={{ mt: 1 }}>

                    <TextField

                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Név"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />



                    <TextField

                        margin="normal"
                        required
                        fullWidth
                        name="phone_number"
                        label="Telefonszám"
                        type="phone_number"
                        id="phone_number"
                        autoComplete="phone_number"

                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="E-mail cím"
                        type="email"
                        id="email"

                    />

                    <TextField

                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Lakcím"
                        name="adress"
                        autoComplete="name"
                        autoFocus
                    />

                    <TextField

                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Jelszó"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox style={{ color: ' rgb(131, 112, 8)' }} />} label={<div>
                            <span>Elfogadom az</span> <Link to="/Aszf" target="_blank" style={{ color: ' rgb(131, 112, 8)' }}>ÁSZF-et</Link> <span>és az</span> <Link to="/DataManagement" target="_blank" style={{ color: ' rgb(131, 112, 8)' }}>adatvédelmi tájékoztatót</Link>.</div>} />
                    </FormGroup>
                    <Button
                        id="button"
                        type="submit"
                        
                        variant="contained"
                        style={{  backgroundColor: 'rgb(182, 155, 6)', marginTop: 20 }}
                        sx={{ mt: 3, mb: 2}}
                        
                    >
                        Regisztráció
                    </Button>

                </Box>
            </Box>

        </Container>
    )
}
