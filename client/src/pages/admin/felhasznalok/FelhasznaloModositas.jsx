import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../context/user/UserContext';
import Swal from "sweetalert2"

export const FelhasznaloModositas = () => {
    const [formData, setFormData] = useState({});
    const [current, setCurrent] = useState({});
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (Object.entries(formData).length === 6 && !isEmpty())
            handleModify(id, formData).then(val => {
                if (val) {
                    navigate("/adminfelulet/felhasznalok");
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
                        text:"A módsoítás közben valamilyen hiba történt.",
                        showConfirmButton: false,
                        timer: 5000
                    })
                }

            })
        else{
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
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 6;

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`)
            .then(({ data }) =>{
                setFormData(data);
                setCurrent(data)
            }
                
            )
            .catch(err => console.log(err));

    }, []);
    return (

        <div className=" container editUser">
            <div className="editForm">
                <h1 className=' modositas mb-5'>Módosítás (<i style={{ color: "#434A42" }}>{current[0]?.name}</i>)</h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email"  placeholder={current[0]?.email} value={formData?.email || ""} onChange={(e) => handleChange(e)} />
                <label htmlFor="name">Név:</label>
                <input type="text" name="name"  placeholder={current[0]?.name} value={formData?.name || ""} onChange={(e) => handleChange(e)} />
                <label htmlFor="address">Lakcím:</label>
                <input type="text" name="address"  placeholder={current[0]?.address}value={formData?.address || ""} onChange={(e) => handleChange(e)} />
                <label htmlFor="phone_number">Telefonszám:</label>
                <input type="text" placeholder={current[0]?.phone_number} name="phone_number" value={formData?.phone_number || ""} onChange={(e) => handleChange(e)} />
                <div>
                    <input id="user" type="radio" name="is_admin" value="0" checked={formData?.is_admin === "0"} onChange={(e) => handleChange(e)} />
                    <label style={{ fontFamily: 'Rozha One' }} htmlFor="user">Felhasználó</label>
                    <input style={{ marginLeft: 20 }} id="admin" type="radio" name="is_admin" value="1" checked={formData?.is_admin === "1"} onChange={(e) => handleChange(e)} />
                    <label style={{ fontFamily: 'Rozha One' }} htmlFor="admin">Admin</label>
                </div>
                <button id='button' className='mt-5' onClick={() => handleSubmit()}>Módosítás</button>
            </div>
        </div>
    )
}
