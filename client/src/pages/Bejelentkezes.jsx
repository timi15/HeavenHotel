import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { AuthContext } from '../context/auth/AuthContext';
import Swal from 'sweetalert2';

export const Bejelentkezes = () => {

    const [formData, setFormData] = useState({});
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formData?.email.match(mailformat));
        if (Object.entries(formData).length < 2 || formData?.email.match(mailformat) === null  ) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Sikertelen bejelentkezés!',
                text: "Hibás jelszó vagy e-mail-cím!",
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            login(formData)
                .then((res) => {
                    navigate("/")
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Sikeres bejelentkezés!',
                        text: "Most már akadálytalanul foglalhat",
                        showConfirmButton: false,
                        timer: 2500
                    })
                })
                .catch((err) => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Sikertelen bejelentkezés!',
                        text: "Hibás jelszó vagy e-mail-cím!",
                        showConfirmButton: false,
                        timer: 2500
                    })

                });
        }
    }
    return (
        <Container component="main" style={{ maxWidth: 800 }}>
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
                <i style={{ color: "#434A42", fontSize: 60 }} className="fa fa-sign-in mb-3" aria-hidden="true"></i>

                <Typography variant="h4" style={{ fontFamily: "Rozha One" }}>
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
                        onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Jelszó"
                        type="password"
                        onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
                    />

                    <div style={{ textAlign: 'center' }}>
                        <Button
                            id="button"
                            type="submit"
                            variant="contained"
                            style={{ marginTop: 20 }}
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Bejelentkezés
                        </Button>
                    </div>

                    < div className="loginLink_singupLink">
                        <Link to="/regisztracio" variant="body2" style={{ width: 170, color: "#434A42", marginTop: 10, }}>
                            Még nincs fiókja? Regisztráljon itt!
                        </Link>
                    </div>
                </Box>
            </Box>

        </Container>
    )
}
