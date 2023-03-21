import React, { useContext } from 'react'
import { BookingContext } from '../../../context/booking/BookingContext';
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';
import moment from "moment"
import 'moment/locale/hu';

export const FoglalasokKezelese = () => {

    const { bookings, handleRemove } = useContext(BookingContext);

    const handleDelete = (id) => {
        handleRemove(id)

    }

    return (
        <>
            <h1 className='kezelofeluletFelirat mb-5 alcim'>Foglalások</h1>
            <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>

                <div className="table-responsive">
                    <table className="table table-sm  table-hover ">
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>Név</th>
                                <th>Szobaszám</th>
                                <th>Szobatípus</th>
                                <th>Érkezés</th>
                                <th>Távozás</th>
                                <th>Éjszakák száma</th>
                                <th>Fizetendő összeg</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                bookings.map((value, index) =>
                                    <tr key={index} >
                                        <td>{value.booking_id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.room_number}</td>
                                        <td>{value.room_type_name}</td>
                                        <td>{moment(value.check_in).format('ll')}</td>
                                        <td>{moment(value.check_out).format('ll')}</td>
                                        <td>{value.night_number}</td>
                                        <td>{value.amount} Ft</td>


                                        <td>
                                            <Button
                                                variant='outlined'
                                                id="button"
                                                onClick={() => {

                                                    Swal.fire({
                                                        title: 'Biztos a törlésben?',
                                                        text: "A foglalás véglegesen törölve lesz a rendszerből!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        cancelButtonText: "Mégse",
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Igen, törlés!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleDelete(value.booking_id);
                                                            Swal.fire({
                                                                title: 'Sikeresen törölte a foglalást!',
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
