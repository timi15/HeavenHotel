import React from 'react'
import { Opinion } from './Opinion'

export const Opinions = () => {
    return (
        <div id="opinionsContainer" className="container">

            <div id="opinionsColumn" className="column">
                <h3>vendégeink véleménye</h3>

                
                <Opinion content="Hatalmas szobát kaptunk, amiben nagyon kényelmessen elfértünk. A minibár is teljessen fel volt töltve. Kifejezetten ár-érték arányos. Szállodai személyzet segítőkész." name="Judit" whoIs="Turista"/>
                <Opinion content="Hatalmas szobát kaptunk, amiben nagyon kényelmessen elfértünk. A minibár is teljessen fel volt töltve. Kifejezetten ár-érték arányos. Szállodai személyzet segítőkész." name="Judit" whoIs="Turista"/>
                <Opinion content="Hatalmas szobát kaptunk, amiben nagyon kényelmessen elfértünk. A minibár is teljessen fel volt töltve. Kifejezetten ár-érték arányos. Szállodai személyzet segítőkész." name="Judit" whoIs="Turista"/>


            </div>

        </div>
    )
}
