import React from 'react'
import { VendegVelemeny } from './VendegVelemeny'

export const VendegeinkMondtak = () => {
    return (
        <div className="section">
            <div className="container vendegeinkMondtak" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className="columnVendeg" >
                    <h3 className='velemenyek'>vendégeink mondták</h3>
                    <VendegVelemeny content="A recepció segítőkész, kedvesek, ügyeltek a tisztaságra, kényelmes ágy, kiváló elhelyezkedés, ár érték arányban tökéletes. Megvoltunk elegédve a párommal!" name="Judit" whoIs="Turista" />
                    <VendegVelemeny content="Nagyon igényes a szálloda, a személyzet is nagyon kedves, figyelmes, minden kérésünkben a segítségünkre voltak maximálisan. Köszönünk mindent! " name="Anna" whoIs="Turista" />
                    <VendegVelemeny content="Sok látnivaló volt a környéken! Remek programok voltak a Múzeumfaluban is. Nagyon jól sikerült a nyaralás, nagyon kedvesek az egész szállodára elmondható." name="Erzsébet" whoIs="Átutazó" />
                </div>
            </div>
        </div>
    )
}
