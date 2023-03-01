import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap'

export const FelhasznalokKezelese = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/users", {
            headers: {
                'Access-Control-Allow-Origin': "localhost:3000"
            }
        })
            .then((res) => {
                setUsers(res.data);
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    return (

        <div className="section">
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Regisztrált felhasználók</h1>
            <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>

                <div className="table-responsive">
                    <table className="table  table-hover w-100">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>E-mail-cím</th>
                                <th>Név</th>
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
                                        <td>{value.email}</td>
                                        <td>{value.name}</td>
                                        <td>{value.address}</td>
                                        <td>{value.phone_number}</td>
                                        <td>{value.is_admin ? <input type="checkbox" checked /> : <input type="checkbox" />}</td>
                                        <td><Button variant='outlined' id="button">Módosítás</Button></td>
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
