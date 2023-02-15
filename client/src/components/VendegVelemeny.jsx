import React from 'react'

export const VendegVelemeny = (props) => {
    return (
        <>
            <p className='tartalom'>{props.content}</p>

            <i id='fontawesome' className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>

            <p className='szemely'>{props.name}, {props.whoIs}</p>
        </>
    )
}
