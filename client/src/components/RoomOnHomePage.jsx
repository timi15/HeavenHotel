import React from 'react'
import {Link} from 'react-router-dom'

export const RoomOnHomePage = () => {
  return (
   <div id='szobaFooldalon'>
    <div style={{textAlign:"center"}}>
    <h4>Szobáink</h4>
    <Link to="rooms" target='_top'> <p>Az összes szoba megtekintése...</p></Link>
    </div>
   </div>
  )
}
