import React from 'react'
import Box from '@mui/material/Box';
import { Avatar, Grid, TextField, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';





export const Bejelentkezes = () => {

  return (
    <Container component="main" style={{ maxWidth: 800 }}>

            <Box
                sx={{
                    margin: 5,
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'beige'

                }}
            >

                <Typography  variant="h5">
                    Bejelentkezés
                </Typography>
                

                    <Box component="form" sx={{ mt: 1 }}>

                       

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
                            name="password"
                            label="Jelszó"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        

                        <div style={{ textAlign: 'center' }}>
                            <Button
                                id="button"
                                type="submit"
                                variant="contained"
                                style={{ marginTop: 20 }}
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Bejelentkezés
                            </Button>
                        </div>
                        < div className="loginLink_singupLink">

                            <Link to="/regisztracio" variant="body2" style={{ width: 170, color: ' rgb(131, 112, 8)', marginTop: 10, }}>
                                Még nincs fiókja? Regisztráljon itt!
                            </Link>
                        </div>


                    </Box>

                
            </Box>

        </Container>



  )
}
