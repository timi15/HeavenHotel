import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoomContext } from '../../../context/room/RoomContext';
import { RoomTypeContext } from '../../../context/room/RoomTypeContext';

export const SzobakKezelese = () => {
    const { roomTypes } = useContext(RoomTypeContext);
    const { rooms } = useContext(RoomContext)
    const navigate = useNavigate();


    const handleChangeRoomType = (id) => {
        navigate(`/adminfelulet/szobatipusok/modositas/${id}`)
    }

    const handleChangeRoom = (id) => {
        navigate(`/adminfelulet/szobak/modositas/${id}`)
    }
    return (
        <>
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Szobák</h1>
            <div className="container mt-5 mb-5">
                <div>
                    <Link to="/adminfelulet">
                        <Button id='button' variant='outlined'>Vissza az adminfelületre</Button>
                    </Link>
                </div>

                <div className="row">
                    <h4 className='roomTreatment'>Szobatípusok</h4>
                    <div className="table-responsive">
                        <table className="table table-sm  table-hover" style={{ maxWidth: "100%", textAlign: "center" }}>
                            <thead >
                                <tr>
                                    <th style={{ width: "3%" }}>ID</th>
                                    <th style={{ width: "20%" }}>Szobatípus</th>
                                    <th style={{ width: "40%" }}>Leírása</th>
                                    <th style={{ width: "10%" }}>Férőhely</th>
                                    <th style={{ width: "10%" }}>Ár</th>
                                    <th style={{ width: "5%" }}></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    roomTypes.map((value, index) =>
                                        <tr key={index} >
                                            <td>{value.room_type_id}</td>
                                            <td>{value.room_type_name}</td>
                                            <td style={{ textAlign: "justify" }}>{value.description}</td>
                                            <td>{value.space}</td>
                                            <td >{value.price_night} Ft/éj</td>

                                            <td><Button variant='outlined' id="button" onClick={() => handleChangeRoomType(value.room_type_id)} >Módosítás</Button></td>

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
                <div className="row">
                    <h4 className='roomTreatment'>Szobák</h4>
                    <div className="table-responsive">
                        <table className="table table-sm  table-hover" style={{ textAlign: "center" }}>
                            <thead >
                                <tr>
                                    <th> ID</th>
                                    <th> Szobaszám</th>
                                    <th> Szobatípus</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    rooms.map((value, index) =>
                                        <tr key={index} >
                                            <td>{value.room_id}</td>
                                            <td>{value.room_number}</td>
                                            <td>{value.room_type_name}</td>
                                            <td>
                                                <Button variant='outlined' id="button" onClick={() => handleChangeRoom(value.room_id)} >Módosítás</Button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
