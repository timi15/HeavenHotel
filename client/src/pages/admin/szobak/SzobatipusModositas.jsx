import { TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { RoomTypeContext } from '../../../context/room/RoomTypeContext';

export const SzobatipusModositas = () => {

    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState(current[0] || {});
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(RoomTypeContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (Object.entries(formData).length === 5 && !isEmpty())
            handleModify(id, formData).then(val => {
                if (val) {
                    navigate("/adminfelulet/szobak");
                    window.location.reload();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Sikeres módosítás!",
                        showConfirmButton: false,
                        timer: 4000
                    })
                }


                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "Sikertelen módosítás!",
                        text: "A módsoítás közben valamilyen hiba történt.",
                        showConfirmButton: false,
                        timer: 5000
                    })
                }

            })
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Hiba!",
                text: 'Kérjük, az összes mezőt töltse ki!',
                showConfirmButton: false,
                timer: 5000
            })
        }

    }

    const isEmpty = () => {
        console.log(Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value));
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 5;

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/roomtypes/${id}`)
            .then(({ data }) => {
                setFormData(data[0]);
                setCurrent(data)
            }

            )
            .catch(err => console.log(err));

    }, []);

    return (
        <div className=" container edit">
            <div className="editForm">
                <h1 className=' modositas mb-5'>Módosítás - <i style={{ color: "#434A42", fontSize: 25 }}> {current[0]?.["room_type_name"]} </i></h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>


                <TextField
                    sx={{ m: 3, width: 550 }}
                    margin="normal"
                    type="text"
                    name="room_type_name"
                    label="Szobatípus megnevezése"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => handleChange(e)}
                    value={formData?.room_type_name || ""}

                />

                <TextField
                    sx={{ m: 3, width: 550 }}
                    margin="normal"
                    type="text"
                    name="description"
                    label="Leírás"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => handleChange(e)}
                    value={formData?.description || ""}
                    multiline
                    rows={10}

                />

                <TextField
                    sx={{ m: 3, width: 550 }}
                    margin="normal"
                    type="number"
                    name="space"
                    label="Férőhely"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => handleChange(e)}
                    value={formData?.space || ""}

                />

                <TextField
                    sx={{ m: 3, width: 550 }}
                    margin="normal"
                    type="number"
                    name="price_night"
                    label="Ár/éj"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => handleChange(e)}
                    value={formData?.price_night || ""}

                />

                <button
                    id='button'
                    className='mt-5'
                    onClick={() =>
                        Swal.fire({
                            title: 'Biztos módosítani szeretné?',
                            text: "A módosítás nem visszavonható művelet!",
                            icon: 'warning',
                            showCancelButton: true,
                            cancelButtonText: "Mégse",
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Igen, módosítás!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleSubmit()
                                Swal.fire(
                                    {
                                        title: "Sikeresen módosította a szobatípust!",
                                        icon: "success",
                                        timer: 3000
                                    }
                                )
                            }
                        })
                    }>Módosítás</button>
            </div>
        </div>
    )
}
