import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';






export const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/rooms", {
            headers: {
                'Access-Control-Allow-Origin': "localhost:3000"
            }
        })
            .then((res) => {
                console.log(res.data);
                setRooms(res.data)

            })
    }, []);






    return (
        <div className="section">

            <div id='alcim'>
                <h3>Szobáink</h3>
            </div>
            <div className="container">

                <p>A szobák árai a reggeli árát tartalmazzák!</p>

                

                <div className="row" >

                    {Array.from(rooms).map((val, index) =>
                        <Card sx={{ maxWidth: 345, margin: 2, padding: 2 }} key={index}>
                            <CardMedia

                                component="img"
                                alt="green iguana"
                                height="140"
                                image={require("../img/szobak/superiorEgyagyasSzoba.jpg")}
                            />

                            <CardContent>

                                <Typography variant="h6" component="div">
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

                            <CardActions style={{justifyContent:'right'}}>
                                <Button variant='outlined' size="medium">Törlés</Button>
                                <Button variant='outlined' size="medium">Módosítás</Button>
                            </CardActions>


                        </Card>



                    )}









                </div>
            </div>

        </div>
    )
}
