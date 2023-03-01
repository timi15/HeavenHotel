import React from 'react'
import { FejlecIkonok } from './FejlecIkonok'

export const Fejlec = () => {
    return (
        <header className='fejlec'>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">

                        <p style={{color:'white', fontSize:14}}>4400 Nyíregyháza, Hotel utca 124.  Tel: +36-30-234-6421</p>
                    </div>

                    <div className="col-md-4">

                        <FejlecIkonok />

                    </div>

                </div>

            </div>
        </header>
    )
}
