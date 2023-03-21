import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import room1 from "../img/szobak/superiorEgyagyasSzoba.jpg"
import room2 from "../img/szobak/standardKetagyasSzoba.jpg"
import room3 from "../img/szobak/superiorKetagyasSzoba.jpg"
import room4 from "../img/szobak/standardKetagyasSzoba.jpg"
import room5 from "../img/szobak/superiorHaromagyasSzoba.jpg"
import room6 from "../img/szobak/standardNegyagyasSzoba.jpg"
import room7 from "../img/szobak/superiorNegyagyasSzoba.jpg"
import { RoomTypeContext } from '../context/room/RoomTypeContext';

export const Szobak = () => {

    const { roomTypes } = useContext(RoomTypeContext);
    const roomPic = [room1, room2, room3, room4, room5, room6, room7];

    return (
        <div className="section">
            <div className='alcim'>
                <h3>Szobatípusaink</h3>
            </div>
            <div className="container">
                <p>A szobák árai a reggeli árát tartalmazzák!</p>
                <div className="row" >
                    {Array.from(roomTypes).map((val, index) =>
                        <Card id="roomCard" data-aos="fade-up" sx={{ maxWidth: 345, margin: 2, padding: 2 }} key={index}>
                            <CardMedia
                                component="img"
                                alt="room"
                                height="140"
                                image={roomPic[index]}
                            />

                            <CardContent>

                                <Typography variant="h6" component="div" style={{ fontFamily: "Rozha One", textTransform: "lowercase" }}>
                                    {val.room_type_name}
                                </Typography>

                                <hr style={{ margin: 'auto', padding: 15 }} />

                                <Typography variant="subtitle2" >
                                    {val.description}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Ágyak: {val.space}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Maximális létszám:  {val.space}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Szobaár: {val.price_night} Ft. / Éjszakától
                                </Typography>

                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}
