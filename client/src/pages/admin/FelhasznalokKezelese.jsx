import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import {  useParams } from "react-router-dom";
import { UserContext } from '../../context/user/UserContext';

export const FelhasznalokKezelese = () => {

    const { users } = useContext(UserContext);

    const [formData, setFormData] = useState({});

    const { id } = useParams();


    const { handleChange: handleModify } = useContext(UserContext);

    const handleChange = async (e, index) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [index]: {
            ...formData[index],
            [name]: value,
          },
        });
      };

    const handleSubmit = () => {

        handleModify(id, formData).then(val => {
            if (val)
                alert("módosítva")
            else
                alert("Error...");
        })

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`)
          .then(({ data }) =>
            setFormData(data)
          )
          .catch(err => console.log(err));
    
      }, []);



    return (

        <div className="section">
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Regisztrált felhasználók</h1>
            <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>

                <div className="table-responsive">
                    <table className="table  table-hover w-100">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Név</th>
                                <th>E-mail-cím</th>
                                <th>Lakcím</th>
                                <th>Telefonszám</th>
                                <th>Admin</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                users.map((value, index) =>
                                    <tr key={index}>
                                        <td>{value.user_id}</td>
                                        <td>
                                            <input
                                                className="form-control-plaintext"
                                                type="text"
                                                name="name"
                                                defaultValue={value.name}
                                                onChange={(e) => handleChange(e, index)}
                                                

                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="form-control-plaintext"
                                                type="text"
                                                name="email"
                                                defaultValue={value.email}
                                                onChange={(e) => handleChange(e, index)}

                                            />
                                        </td>

                                        <td>
                                            <input
                                                className="form-control-plaintext"
                                                type="text"
                                                name="address"
                                                defaultValue={value.address}
                                                onChange={(e) => handleChange(e, index)}

                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="form-control-plaintext"
                                                type="number"
                                                name="phone_number"
                                                defaultValue={value.phone_number}
                                                onChange={(e) => handleChange(e, index)}
                                                

                                            />
                                        </td>

                                        <td>{value.is_admin ? <input type="checkbox" checked /> : <input type="checkbox" />}</td>
                                        <td><Button variant='outlined' id="button" onClick={() => handleSubmit()}>Módosítás</Button></td>
                                        <td><Button variant='outlined' id="button">Törlés</Button></td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}
