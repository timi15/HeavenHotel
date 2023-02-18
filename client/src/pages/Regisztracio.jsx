import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import axios from "axios"

export const Regisztracio = () => {

    const [users, setUsers] = useState({});
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [address, setAddress] = useState("");
    const [validAddress, setValidAddress] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [password2, setPassword2] = useState("");
    const [isChecked, setIsChecked] = useState(false);


    const allUser = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data)
    };

    useEffect(() => {
        allUser();
    }, [])

    const send = async () => {
        const result = await axios.put("http://localhost:8080/users", {
            password: `${password}`,
            name: `${name}`,
            address: `${address}`,
            phone_number: `${phoneNumber}`,
            email: `${email}`,
        });

        if (result.data.status === "ok") {
            window.location.href = "/bejelentkezes";
        }
    };

    const userExists = () => {
        let counter = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                counter++;
            }
        }
        if (counter !== 0) {
            alert("Ezzel az e-mail-címmel már regisztráltak!");
        } else send();
    };

    const validation = () => {


        const passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
        if (
            password.length > 7 &&
            password.length < 17 &&
            password === password2 &&
            password.match(passformat)
        )
            setValidPassword(true);
        else setValidPassword(false);

        const correctNameFormat = /^[^\s]+( [^\s]+)+$/;
        if (name.length > 0 && name.match(correctNameFormat)) setValidName(true);
        else setValidName(false);



        const correctEmailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email.match(correctEmailFormat)) setValidEmail(true);
        else setValidEmail(false);


        if (phoneNumber.length === 11) setValidPhoneNumber(true);
        else setPhoneNumber(false);



        const correctAddressFormat = /^([0-9]{4}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[,]{1}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[ ]{1}[\wa-zíéáűúőó]*[ ]{1}[\w][a-z íéáűúőó\./\-0-9]*)$/;
        if (address.match(correctAddressFormat)) setValidAddress(true);
        else setValidAddress(false);


        if (
            validName &&
            validPhoneNumber &&
            validEmail &&
            validAddress &&
            validPassword &&
            isChecked
        ) {
            userExists();
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
                    backgroundColor: 'beige'

                }}
            >

                <Typography variant="h5">
                    Regisztráció
                </Typography>


                <Box sx={{ mt: 1 }}>

                    <div>
                        {validName ? "" : <Alert severity='error'>Hibás név formátum!</Alert>}
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Név"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>



                    <div>
                        {validPhoneNumber ? "" : <Alert severity='error'>Hibás telefonszám formátum!</Alert>}

                        <TextField
                            margin="normal"
                            fullWidth
                            name="phone_number"
                            label="Telefonszám"
                            id="phone_number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div>

                        {validEmail ? "" : <Alert severity='error'>Hibás email formátum!</Alert>}

                        <TextField
                            margin="normal"
                            fullWidth
                            name="email"
                            label="E-mail cím"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        {validAddress ? "" : <Alert severity='error'>Hibás cím formátum!</Alert>}

                        <TextField
                            margin="normal"
                            fullWidth
                            id="address"
                            label="Lakcím"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div>

                        {validPassword ? "" : <Alert severity='error'>Hibás jelszó formátum, vagy nem egyezik a két jelszó!</Alert>}

                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Jelszó"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        {validPassword ? "" : <Alert severity='error'>Hibás jelszó formátum, vagy nem egyezik a két jelszó!</Alert>}
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password2"
                            label="Jelszó újra"
                            type="password"
                            id="password2"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox style={{ color: ' rgb(131, 112, 8)' }} onChange={(e) => setIsChecked(true)} />} label={<div>
                            <span>Elfogadom az</span> <Link to="/altalanos_szerzodesi_feltetelek" target="_blank" style={{ color: ' rgb(131, 112, 8)' }}>ÁSZF-et</Link> <span>és az</span> <Link to="/adatkezelesi_tajekoztato" target="_blank" style={{ color: ' rgb(131, 112, 8)' }}>adatvédelmi tájékoztatót</Link>.</div>} />
                    </FormGroup>

                    <div style={{ textAlign: 'center' }}>
                        <Button
                            id="button"
                            variant="contained"
                            style={{ marginTop: 20 }}
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => validation()}

                        >
                            Regisztráció
                        </Button>
                    </div>
                    < div className="loginLink_singupLink">

                        <Link to="/bejelentkezes" variant="body2" style={{ width: 170, color: ' rgb(131, 112, 8)', marginTop: 10, }}>
                            Már van fiókja? Lépjen be itt!
                        </Link>
                    </div>


                </Box>


            </Box>

        </Container>
    )
}
