import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../../context/user/UserContext';
import Swal from "sweetalert2";

export const FelhasznalokKezelese = () => {

    const { users, handleRemove } = useContext(UserContext);
    const navigate = useNavigate();


    const handleChange = (id) => {
        navigate(`/adminfelulet/felhasznalok/modositas/${id}`)

    }

    const handleDelete = (id) => {
        handleRemove(id)

    }



    return (


        <>
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Regisztrált felhasználók</h1>
            <div className="container mt-5 mb-5" >
                <div style={{ marginBottom: 50 }}>
                    <Link to="/adminfelulet">
                        <Button id='button' variant='outlined'>Vissza az adminfelületre</Button>
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-sm  table-hover" style={{ maxWidth: '100%', textAlign:"center" }}>
                        <thead >
                            <tr>
                                <th style={{ width: "2%" }}>ID</th>
                                <th style={{ width: "15%" }}>Név</th>
                                <th style={{ width: "15%" }}>E-mail-cím</th>
                                <th style={{ width: "40%" }}> Lakcím</th>
                                <th style={{ width: "8%" }}>Telefonszám</th>
                                <th style={{ width: "10%" }}>Admin</th>
                                <th style={{ width: "5%" }}></th>
                                <th style={{ width: "5%" }}></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                users.map((value, index) =>
                                    <tr key={index} >
                                        <td>{value.user_id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>{value.phone_number}</td>


                                        <td>{value.is_admin ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />}</td>
                                        <td><Button variant='outlined' id="button" onClick={() => handleChange(value.user_id)} >Módosítás</Button></td>
                                        <td>
                                            <Button
                                                variant='outlined'
                                                id="button"
                                                onClick={() => {

                                                    Swal.fire({
                                                        title: 'Biztos a törlésben?',
                                                        text: "A felhasználó véglegesen törölve lesz!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        cancelButtonText: "Mégse",
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Igen, törlés!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleDelete(value.user_id);
                                                            Swal.fire({
                                                                title: 'Sikeresen törölte a felhasználót!',
                                                                icon: "success",
                                                                timer: 3000
                                                            }

                                                            )
                                                        }
                                                    })
                                                }}


                                            >
                                                Törlés
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </>


    )
}
