import React from 'react'
import { Felulet } from './Felulet'

export const Adminfelulet = () => {
  return (
    <div className="section mt-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <Felulet icon="fa fa-users mb-5" cim="Felhasználók kezelése" link="felhasznalok"/>
          </div>
          <div className="col-md-4">
          <Felulet icon="fa fa-bed mb-5" cim="Szobák kezelése" link="szobak"/>
          </div>
          <div className="col-md-4">
          <Felulet icon="fa fa-calendar-check-o mb-5" cim="Foglalások kezelése" link="foglalasok"/>
          </div>
        </div>
      </div>
    </div>
  )
}
