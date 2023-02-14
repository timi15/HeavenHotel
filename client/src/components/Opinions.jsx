import React from 'react'
import { Opinion } from './Opinion'


export const Opinions = () => {
    return (
        <div id="opinionsContainer" className="container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">

            <div id="opinionsColumn" className="column" >

                <h3>vendégeink mondták</h3>


                <Opinion content="A recepció segítőkész, kedvesek, ügyeltek a tisztaságra, kényelmes ágy, kiváló elhelyezkedés, ár érték arányban tökéletes.
                Megvoltunk elegédve a párommal!" name="Judit" whoIs="Turista" />
                <Opinion content="Nagyon igényes a szálloda, a személyzet is nagyon kedves, figyelmes, minden kérésünkben a segítségünkre voltak maximálisan. Köszönünk mindent! " name="Anna" whoIs="Turista" />
                <Opinion content="Sok látnivaló volt a környéken! Remek programok voltak a Múzeumfaluban is. Nagyon jól sikerült a nyaralás, nagyon kedvesek az egész szállodára elmondható." name="Erzsébet" whoIs="Turista" />



            </div>

        </div>
    )
}
