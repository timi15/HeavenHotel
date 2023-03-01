import React from 'react'
import { Link } from "react-router-dom"

export const Felulet = (props) => {
    return (
        <div className='felulet'>
            <i className={props.icon} id="feluletIcon"></i>
            <h4 className='feluletCim mb-5'>{props.cim}</h4>
            <Link to={props.link}>
                <button id='button'>Tovább <br /> a kezelőfelületre </button>
            </Link>
            
        </div>
    )
}
