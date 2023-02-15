import React from 'react'


import { Szobaszures } from '../components/Szobaszures'

export const Foglalas = () => {
    return (
        <div className="section">

            <div className='alcim'><h3>foglalás</h3></div>

            <div className="container"  >

                <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10", paddingBottom: "10", }} >

                    <Szobaszures />


                </div>

            </div>

        </div>
    )
}
