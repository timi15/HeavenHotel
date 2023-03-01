import React, {  useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import axios from "axios"

export const Regisztracio = () => {
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", formData, {
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(() => navigate("/bejelentkezes"));
    }

    return (

        <Container style={{ maxWidth: 800 }}>

            <Box
                sx={{
                    margin: 5,
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#F4F1DE',
                    borderRadius:5,
                    borderWidth:7,
                    borderStyle:"double",
                    borderColor:"#434A42"   
                }}
            >

                <Typography  variant="h4" style={{fontFamily:"Rozha One"}}>
                    Regisztráció
                </Typography>


                <Box sx={{ mt: 1 }}>

                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Név"
                            name="name"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>



                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="phoneNumber"
                            label="Telefonszám"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="email"
                            label="E-mail cím"
                            type="email"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Lakcím"
                            name="address"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Jelszó"
                            type="password"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox style={{ color: '#434A42' }} />} label={<div>
                            <span>Elfogadom az</span> <Link to="/altalanos_szerzodesi_feltetelek" target="_blank" style={{ color: "#434A42" }}>ÁSZF-et</Link> <span>és az</span> <Link to="/adatkezelesi_tajekoztato" target="_blank" style={{ color: "#434A42" }}>adatvédelmi tájékoztatót</Link>.</div>} />
                    </FormGroup>

                    <div style={{ textAlign: 'center' }}>
                        <Button
                            id="button"
                            variant="contained"
                            style={{ marginTop: 20 }}
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(e) => handleSubmit(e)}

                        >
                            Regisztráció
                        </Button>
                    </div>
                    < div className="loginLink_singupLink">

                        <Link to="/bejelentkezes" variant="body2" style={{ width: 170, color: "#434A42", marginTop: 10, }}>
                            Már van fiókja? Lépjen be itt!
                        </Link>
                    </div>


                </Box>


            </Box>

        </Container>
    )
}
