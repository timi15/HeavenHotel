import React from 'react'
import { Sight } from '../components/Sight'
import kep from "../img/allatkert1.jpg"

export const Sights = () => {
    return (
        <>
            <div id='alcim'><h3>látnivalók</h3></div>

            <div className="container">

                <div className="row">

                    <div className="col-md-10 col-sx-10">
                        <Sight place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                        <Sight place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                        <Sight place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                    </div >

                    <div className="col-md-2 col-sx-2">

                        <p>ieoiewgio</p>


                    </div>
                </div>



            </div>




        </>
    )
}
