import React from 'react'
import { Link } from 'react-router-dom'

import kep from "../img/szepkartya.jpg"


export const Footer = () => {
    return (
        <>
            <footer id="footer">

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Elérhetőségeink</h3>

                                    <ul className="contact">
                                        <li>

                                            <i className="fa fa-map-marker fa-lg" ></i>4400 Nyíregyháza Hotel
                                            utca 124.

                                        </li>
                                        <li>

                                            <i className="fa fa-phone fa-lg"></i>+36-30-234-6421

                                        </li>
                                        <li>

                                            <i className="fa fa-envelope fa-lg"></i>sales@hotelheaven.com

                                        </li>
                                        <li>

                                            <i className="fa fa-clock-o fa-lg"></i>0-24h


                                        </li>
                                    </ul>
                                    <Link id='dataManagement' to="datamanagement" target='_top'><p>Adatkezelési tájékoztató</p></Link>
                                    


                                    


                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Szobáink</h3>

                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Heaven hotel Nyíregyháza</h3>
                                    <img src={kep} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </footer>
            
            
        </>
    )
}
