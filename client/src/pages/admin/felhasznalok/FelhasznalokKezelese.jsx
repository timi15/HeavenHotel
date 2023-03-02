import React, { useContext} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../context/user/UserContext';

export const FelhasznalokKezelese = () => {

    const { users,  handleRemove } = useContext(UserContext);
    const navigate = useNavigate();


    const handleChange =(id)=>{
        navigate(`/adminfelulet/felhasznalok/modostias/${id}`)
        
    }

    const handleDelete=(id)=>{
        handleRemove(id)

    }



    return (


        <>
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Regisztrált felhasználók</h1>
            <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>

                <div className="table-responsive">
                    <table className="table table-sm  table-hover ">
                        <thead >
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
                                    <tr key={index} >
                                        <td>{value.user_id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>{value.phone_number}</td>


                                        <td>{value.is_admin ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />}</td>
                                        <td><Button variant='outlined' id="button" onClick={()=> handleChange(value.user_id)} >Módosítás</Button></td>
                                        <td><Button variant='outlined' id="button" onClick={()=> handleDelete(value.user_id)}>Törlés</Button></td>
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
