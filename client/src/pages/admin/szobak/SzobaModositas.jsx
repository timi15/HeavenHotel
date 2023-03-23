import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RoomContext } from '../../../context/room/RoomContext';
import Swal from "sweetalert2";
import axios from 'axios';
import { RoomTypeContext } from '../../../context/room/RoomTypeContext';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export const SzobaModositas = () => {
    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState(current[0] || {});
    console.log(formData);
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(RoomContext);
    const { roomTypes } = useContext(RoomTypeContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (Object.entries(formData).length === 3 && !isEmpty())
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
        //console.log(Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value));
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 3;

    }


    useEffect(() => {
        axios.get(`http://localhost:8080/rooms/${id}`)
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
                <h1 className=' modositas mb-5'>Módosítás - <i style={{ color: "#434A42", fontSize: 25 }}> {current[0]?.["room_number"]}. szoba </i></h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>

                <TextField
                    sx={{ m: 3, width: 450 }}
                    margin="normal"
                    fullWidth
                    type="number"
                    name="room_number"
                    label="Szobaszám"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => handleChange(e)}
                    value={formData?.room_number || ""}

                />

                <FormControl sx={{ m: 3, width: 450 }}>
                    <InputLabel id="demo-simple-select-label">Szobatípus</InputLabel>
                    <Select
                        name='room_type_id'
                        labelId="demo-simple-select-label"
                        label="Szobatípus"
                        value={formData?.room_type_id || ""}
                        onChange={handleChange}
                    >

                        {Array.from(roomTypes).map((val, index) =>

                            <MenuItem key={index} value={val.room_type_id}>{val.room_type_name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br />
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
                                        title: "Sikeresen módosította a szoba adatait!",
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
