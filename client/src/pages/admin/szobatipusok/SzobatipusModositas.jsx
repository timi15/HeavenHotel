import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2"
import { RoomTypeContext } from '../../../context/room/RoomTypeContext';

export const SzobatipusModositas = () => {
    const [formData, setFormData] = useState({});
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(RoomTypeContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (Object.entries(formData).length === 4 && !isEmpty())
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
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 4;

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/roomtypes/${id}`)
            .then(({ data }) =>
                setFormData(data)
            )
            .catch(err => console.log(err));

    }, []);
    return (
        <div className=" container editUser">
        <div className="editForm">
            <h1 className=' modositas mb-5'>Módosítás (<i style={{ color: "#434A42" }}> {id}</i>)</h1>
            <div style={{ textAlign: "center" }}>
                <hr />
            </div>
            <label htmlFor="room_type_name">Szobatípus:</label>
            <input type="text" name="room_type_name"  value={formData?.room_type_name || ""} onChange={(e) => handleChange(e)} />
            <label htmlFor="description">Leírás:</label>
            <textarea className='w-100' name="description"  rows="10" value={formData?.description|| ""} onChange={(e) => handleChange(e)}></textarea>
            <label htmlFor="space">Férőhely:</label>
            <input type="number" name="space" value={formData?.space|| 0}  onChange={(e) => handleChange(e)} />
            <label htmlFor="price_night">Ár/éj:</label>
            <input type="number" name="price_night" value={formData?.price_night|| 0} min="10000" onChange={(e) => handleChange(e)} />
           
            <button id='button' className='mt-5' onClick={() => handleSubmit()}>Módosítás</button>
        </div>
    </div>
    )
}