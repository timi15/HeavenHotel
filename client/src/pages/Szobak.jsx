import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import room1 from "../img/szobak/superior1.jpg"
import room2 from "../img/szobak/standard2.jpg"
import room3 from "../img/szobak/superior2.jpg"
import room4 from "../img/szobak/standard3.jpg"
import room5 from "../img/szobak/superior3.jpg"
import room6 from "../img/szobak/standard4.jpg"
import room7 from "../img/szobak/superior4.jpg"
import { RoomTypeContext } from '../context/room/RoomTypeContext';

export const Szobak = () => {

    const { roomTypes } = useContext(RoomTypeContext);
    const roomPic = [room1, room2, room3, room4, room5, room6, room7];

    return (
        <div className="section">
            <div className='alcim'>
                <h3>Szobáink</h3>
            </div>
            <div className="container">
                <div className="row">
                    <h5 className='roomPage'>Szobák</h5>
                    <p>A szobák árai a reggeli árát tartalmazzák!</p>
                    <p>Kérjük előzetesen értesítsenek bennünket felmerülő kéréseikről, igényeikről (mint pl.: virágcsokor, újság stb.), hogy érkezésükre gondoskodni tudjunk ezek bekészítéséről.</p>
                    <p style={{ textDecoration: "underline" }}><strong>Szobák felszereltsége:</strong></p>

                    <div>
                        <ul style={{ listStyleType: "circle" }}>
                            <li>Légkondicionálás</li>
                            <li>Hangszigetelt nyílászárók</li>
                            <li>Telefon</li>
                            <li>Széles sávú Internet kapcsolat, saját laptop használatával</li>
                            <li>LCD TV (műholdas TV csatornák, távirányító)</li>
                            <li>Mini bár</li>
                            <li>Széf (laptop elhelyezésére is alkalmas mérettel)</li>
                            <li>Beépített zuhanysarok a fürdőszobában</li>
                            <li>Higiéniai és kozmetikai ápoló készlet</li>
                            <li>Hajszárító</li>
                        </ul>
                    </div>

                </div>

                <div className="row" >
                    <h5 className='roomPage'>Szobatípusok</h5>
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
