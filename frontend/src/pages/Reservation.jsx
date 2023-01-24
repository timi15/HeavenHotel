import React from 'react'
import { Button } from 'react-bootstrap'
import BasicDatePicker from '../components/BasicDateRangePicker'
import { MoneySlider } from '../components/MoneySlider'
import { RoomsFilter } from '../components/RoomsFilter'
import { RoomTypeSelect } from '../components/RoomTypeSelect'

export const Reservation = () => {
    return (
        <div className="section">

            <div id='alcim'><h3>foglalás</h3></div>

            <div className="container"  >

                <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10", paddingBottom: "10", }} >

                   <RoomsFilter/>


                </div>

            </div>

        </div>
    )
}
