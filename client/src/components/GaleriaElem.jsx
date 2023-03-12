import React from 'react'

export const GaleriaElem = (props) => {
    return (
        <div className="galeria-elem ">
            <img src={props.url} alt="galeria-kep"  style={{maxHeight:250, maxWidth:500}} />
        </div>
    )
}
