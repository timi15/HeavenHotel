import React from 'react'

export const Error = () => {
    return (
        <>
            <div id='alcim'>
                <h3>404</h3>
                <p><i>Page not found</i></p>

            </div>

            <div  className="container">
            <div className='err'>
                <h1>
                    <i class="fa fa-exclamation-circle" aria-hidden="true">
                    </i>
                </h1>
                <h1>Error 404</h1>
                <h3>Ez az oldal jelenleg nem talalható!</h3>
            </div>
            </div>
        </>
    )
}
