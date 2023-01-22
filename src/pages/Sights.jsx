import React from 'react'
import { Sight } from '../components/Sight'
import kep from "../img/allatkert1.jpg"
import plakat from "../img/plakat.png";

export const Sights = () => {
    return (
        <>
            <div id='alcim'><h3>látnivalók</h3></div>

            <div className="container">

                <div id='sightRow'  className="row">

                    <div id='sightCarousel' className="col-md-8 col-sx-10">
                        <Sight  place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                        <Sight  place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                        <Sight  place="Nyíregyházi Állatpark" pic1={kep} content="behgahgh" />
                    </div >

                    <div className="col-md-4 col-sx-2">

                        <img src={plakat} alt="plakat" width={300} style={{ marginTop: 50 }} />


                    </div>
                </div>



            </div>




        </>
    )
}
