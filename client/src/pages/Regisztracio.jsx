import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import axios from "axios";
import { passwordStrength } from 'check-password-strength';
import { PasswordCustom } from '../asserts/PasswordCustom';
import Swal from 'sweetalert2';

export const Regisztracio = () => {

    const [formData, setFormData] = useState({});
    const [show, setShow] = useState(false);

    const nameformat = /^[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó\D]*$/;
    const addressformat = /^([0-9]{4}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[,]{1}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[ ]{1}[\wa-zíéáűúőó]*[ ]{1}[\w][a-z íéáűúőó\./\-0-9]*)$/;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (Object.entries(formData).length === 5) {
            if (
                formData?.name.match(nameformat) &&
                formData?.email.match(mailformat) &&
                formData?.address.match(addressformat) &&
                passwordStrength(formData?.password, PasswordCustom).value === "Erős" &&
                document.getElementById("szerzodes").checked === true) {

                e.preventDefault();
                axios.post("http://localhost:8080/auth/register", formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(() =>
                        navigate("/bejelentkezes"),
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "Sikeres regisztráció!",
                            text: 'Jelentkezzen be fiókjába!',
                            showConfirmButton: false,
                            timer: 5000
                        }));
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Helytelen formátum!",
                    text: 'Kérjük, ellenőrizze le hogy helyesen adta meg az adatait',
                    showConfirmButton: false,
                    timer: 5000
                })
            }
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Helytelen formátum!',
                text: "Kérjük, az összes mezőt töltse ki!",
                showConfirmButton: false,
                timer: 5000
            })
        }
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
                    borderRadius: 5,
                    borderWidth: 7,
                    borderStyle: "double",
                    borderColor: "#434A42"
                }}
            >
                <i style={{ color: "#434A42", fontSize: 60 }} className="fa fa-user-circle mb-3" aria-hidden="true"></i>

                <Typography variant="h4" style={{ fontFamily: "Rozha One" }}>
                    Regisztráció
                </Typography>

                <Box sx={{ mt: 1 }} >
                    <div>
                        <TextField
                            required
                            margin="normal"
                            fullWidth
                            label="Név"
                            name="name"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            helperText="Ilyen formában adja meg: 06301234567"
                            required
                            margin="normal"
                            fullWidth
                            name="phoneNumber"
                            label="Telefonszám"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            required
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
                            required
                            margin="normal"
                            fullWidth
                            label="Lakcím"
                            name="address"
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            fullWidth
                            helperText={show ? passwordStrength(formData?.password, PasswordCustom).value : "min 8 karakter, kis- és nagybetű, szám, speciális karakter"}
                            margin="normal"
                            name="password"
                            label="Jelszó"
                            type="password"
                            onKeyDown={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                            onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                        />
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox id='szerzodes' style={{ color: '#434A42' }} />} label={<div>
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