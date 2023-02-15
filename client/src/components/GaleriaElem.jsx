import React from 'react'

export const GaleriaElem = (props) => {
    return (
        <div class="galeria-elem">
            <img src={props.url}  style={{height:250}} />
            
        </div>
    )
}
