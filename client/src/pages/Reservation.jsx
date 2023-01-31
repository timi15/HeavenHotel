import React from 'react'

import { RoomsFilter } from '../components/RoomsFilter'

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
