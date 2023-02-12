import React from 'react'
import { TopIcon } from './TopIcon'

export const Top = () => {
    return (
        <header id='top'>
            <div className="section">
                <div className="container">
                    <div className="row">



                        <div className="col-md-8">

                            <p>4400 Nyíregyháza Hotel utca 124. Tel: +36-30-234-6421</p>
                        </div>

                        <div className="col-md-4">

                            <TopIcon />


                        </div>



                    </div>
                </div>

            </div>
        </header>
    )
}
