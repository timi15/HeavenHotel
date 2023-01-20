import React from 'react'

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

                                    <ul className="footer-links">
                                        <li>

                                            <i className="fa fa-map-marker fa-lg" ></i>4400 Nyíregyháza Info
                                            utca 1.

                                        </li>
                                        <li>

                                            <i className="fa fa-phone fa-lg"></i>+36-30-123-45-67

                                        </li>
                                        <li>

                                            <i className="fa fa-envelope fa-lg"></i>info@infotech.com

                                        </li>
                                        <li>

                                            <i className="fa fa-clock-o fa-lg"></i>0-24h


                                        </li>
                                    </ul>
                                    <p>Adatkezelési tájékoztató</p>


                                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                                    <i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
                                    <i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i>


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
