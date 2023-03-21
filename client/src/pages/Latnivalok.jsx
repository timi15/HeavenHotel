import React from 'react'
import { Link } from "react-router-dom"
import { Latnivalo } from '../components/Latnivalo'

import plakat from "../img/plakat.png";
import kep1 from "../img/latnivalok/aquarius1.jpg"
import kep2 from "../img/latnivalok/aquarius2.jpg"
import kep3 from "../img/latnivalok/aquarius3.jpg"
import kep4 from "../img/latnivalok/allatpark3.jpg"
import kep5 from "../img/latnivalok/allatpark1.jpg"
import kep6 from "../img/latnivalok/allatpark2.jpg"
import kep7 from "../img/latnivalok/muzeumfalu1.jpg"
import kep8 from "../img/latnivalok/muzeumfalu2.jpg"
import kep9 from "../img/latnivalok/muzeumfalu3.jpg"

export const Latnivalok = () => {
    return (
        <>
            <div className='alcim'><h3>látnivalók</h3></div>
            <div className="container" >
                <div className="row latnivalo" >
                    <div className="col-md-8 col-sx-10 sightCarousel"  >
                        <Latnivalo link="https://www.aquariusspa.hu/" place="Aquarius Élményfürdő" pic1={kep3} pic2={kep2} pic3={kep1} content="Nyíregyháza-Sóstó a gyógyvizéről híres, hangulatos fürdőhely Nyíregyháza központjától alig pár kilométerre található. Az Aquarius Élményfürdő gyermekvilággal, stranddal, csúszdák széles választékával is rendelkezik így az egész családnak szuper élményt kínál. A Sóstón található jódos-brómos gyógyvíz reumatikus, mozgásszervi és nőgyógyászati panaszok enyhítésére kiválóan alkalmazható, ezért évente több ezer turista keresi fel ezt az üdülőhelyet. A felnőttek és idősek a Termálvilág szolgáltatásait is igénybe vehetik, itt beltéri és kültéri gyógyvizes medencék találhatók nyakzuhannyal, pezsgőággyal, hátmasszírozóval." />
                        <Latnivalo link="https://www.sostozoo.hu/" place="Nyíregyházi Állatpark" pic1={kep4} pic2={kep5} pic3={kep6} content="A Nyíregyházi Állatpark egy 30 hektáros tölgyerdőben található, ahol 500 faj 5000 egyede él természeteshez közeli kifutókban. Az állatkert részei például A Zöld Piramis, ahol  Ázsia és Indonézia fajgazdagságába nyerhetnek betekintést a felfedezők. A Viktória-ház 2015-ben átadott épület Dél-Amerika állat- és növényvilágát hivatott bemutatni. De ezenkívűl az Andok-kaland, Tarzan ösvénye és más számos kifutókomplexum és skanzen is várja az ide látogatókat." />
                        <Latnivalo link="https://muzeumfalu.hu/" place="Sóstói múzeumfalu" pic1={kep7} pic2={kep8} pic3={kep9} content="Magyarország egyik legnagyobb regionális szabadtéri múzeuma, amely egy 19. századi falusi környezetbe repít vissza, ahol megismerhetjük, hogyan éltek a szegény- és középparasztok, illetve a kisnemesek abban az időben. Az öt tájegység bemutatásán kívül a skanzen központjában kialakítottak egy orsós faluközpontot, melynek főterén áll a templom a harangtoronnyal, környezetében pedig egy iskola, egy szatócsbolt, egy paplak, egy tűzoltószertár, egy kocsma és különböző műhelyek sorakoznak. A hagyományoknak megfelelően minden évben rengeteg turistát vonz a május elsejei májusfaállítás és a majális, de a pünkösdi királyválasztás és a Szent István-napi kenyérünnep is." />
                    </div >
                    <div className="col-md-4 col-sx-2 plakat">
                        <Link to="foglalas"><img src={plakat} alt="plakat" width={250} style={{ marginTop: 50 }} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
