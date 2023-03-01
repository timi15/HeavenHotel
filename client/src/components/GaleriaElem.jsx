import React from 'react'

export const GaleriaElem = (props) => {
    return (
        <div className="galeria-elem">
            <img src={props.url} alt="galeria-kep"  style={{height:250}} />
            
        </div>
    )
}
