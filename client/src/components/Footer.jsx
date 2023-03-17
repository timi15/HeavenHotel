import React from 'react'
import { Link } from 'react-router-dom'

import kep from "../img/szepkartya.jpg"


export const Footer = () => {
    return (
        <>
            <footer className='page-footer' >

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Lépj velünk kapcsolatban</h3>
                                    <hr />

                                    <ul className="footer-elerhetoseg">
                                        <li>


                                            <i className="fa fa-map-marker fa-lg" ></i>4400 Nyíregyháza Hotel
                                            utca 124.


                                        </li>
                                        <li>
                                            <a style={{ color: "black", textDecoration: "none" }} href="tel:+36302346421">
                                                <i className="fa fa-phone fa-lg"></i>+36-30-234-6421

                                            </a>

                                        </li>
                                        <li >
                                            <a style={{ color: "black", textDecoration: "none" }} href="mailto: saleshotelheaven01@gmail.com">
                                                <i className="fa fa-envelope fa-lg"></i>saleshotelheaven01@gmail.com
                                            </a>

                                        </li>
                                        <li>

                                            <i className="fa fa-clock-o fa-lg"></i>0-24h


                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="footer" >
                                    <h3 className="footer-title">Információk</h3>
                                    <hr />
                                    <Link className='information' to="adatkezelesi_tajekoztato" target='_top'><p className='hover-underline-animation'> Adatkezelési tájékoztató</p></Link>
                                    <Link className='information' to="altalanos_szerzodesi_feltetelek" target='_top'><p className='hover-underline-animation'>Általános Szerződési Feltételek (ÁSZF)</p></Link>
                                    <Link className='information' to="gyakori_kerdesek_es_valaszok" target='_top'><p className='hover-underline-animation'>Gyakori kérdések és válaszok</p></Link>

                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Heaven hotel Nyíregyháza</h3>
                                    <hr />
                                    <img src={kep} alt="" style={{ maxWidth: "86%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>


        </>
    )
}
