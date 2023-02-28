import React, { useEffect, useState } from 'react';
import axios from "axios";

export const Felhasznalok = () => {

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
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>E-mail-cím</th>
                            <th>Név</th>
                            <th>Lakcím</th>
                            <th>Telefonszám</th>
                            <th>Admin</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            users.map((value, index) =>
                                <tr key={index}>
                                    <td>{value.user_id}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                    <td>{value.phone_number}</td>
                                    <td>{value.isAdmin}</td>
                                    
                                    
    
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>

    )
}
