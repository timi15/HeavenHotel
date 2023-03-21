import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className="section">
            <div className="container" >
                <div className="error">
                    <h1 >4<i className="fa fa-exclamation-circle" aria-hidden="true"></i>4</h1>
                    <p>Rossz ajtón kopogtattál!</p>
                    <p>Ez az oldal sajnos nem található!</p>
                    <Link to="/">
                        <Button className='mt-5 mb-5' variant='outlined' id="button">Vissza a főoldalra</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
