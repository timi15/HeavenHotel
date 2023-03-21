import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'

export const Fejlec = () => {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <header className='fejlec'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p style={{ color: 'white', fontSize: 14 }}>4400 Nyíregyháza, Hotel utca 124.  Tel: +36-30-234-6421</p>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                        {
                            currentUser !== null && (
                                <p style={{ color: "white", fontSize: 16 }}>Bejelentkezve:  {currentUser['email']}</p>
                            )
                        }
                    </div>
                    <div className="col-md-4 ">
                        {
                            (currentUser === null && (
                                <>
                                    <Link to="/bejelentkezes" style={{ textDecoration: "none" }}> <span className='fejlecSpan hover-underline-animation'>Bejelentkezés</span> </Link>
                                    <span style={{ color: "white", fontWeight: "bold", fontSize: 16, marginRight: 20 }}>/</span>
                                    <Link to="/regisztracio" style={{ textDecoration: "none" }}><span className='fejlecSpan hover-underline-animation '>Regisztráció</span> </Link>
                                </>
                            )) || (currentUser !== null && (
                                <>
                                    <Link onClick={() => logout()} style={{ textDecoration: "none" }}><span className='fejlecSpan hover-underline-animation'>Kijelentkezés</span></Link>

                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
