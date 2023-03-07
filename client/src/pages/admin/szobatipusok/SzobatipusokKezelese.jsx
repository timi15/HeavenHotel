import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RoomTypeContext } from '../../../context/room/RoomTypeContext';

export const SzobatipusokKezelese = () => {
    const { roomTypes } = useContext(RoomTypeContext);
    const navigate = useNavigate();


    const handleChange = (id) => {
        navigate(`/adminfelulet/szobak/modositas/${id}`)

    }
    return (
        <>
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Szobák</h1>
            <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>

                <div className="table-responsive">
                    <table className="table table-sm  table-hover ">
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>Szobatípus</th>
                                <th>Leírása</th>
                                <th>Férőhely</th>
                                <th>Ár</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                roomTypes.map((value, index) =>
                                    <tr key={index} >
                                        <td>{value.room_type_id}</td>
                                        <td>{value.room_type_name}</td>
                                        <td>{value.description}</td>
                                        <td>{value.space}</td>
                                        <td >{value.price_night} Ft/éj</td>

                                        <td><Button variant='outlined' id="button" onClick={() => handleChange(value.room_type_id)} >Módosítás</Button></td>

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
