import React from 'react'
import { Link } from 'react-router-dom'

export const SzobaAFooldalon = () => {
  return (
    <div className='szobaFooldalon'>
      <div style={{ textAlign: "center" }}>
        <h4>Szobáink</h4>
        <Link to="szobak" target='_top' style={{ color: "#434A42", fontSize: 20, textDecoration: "underlined" }}> <p>Az összes szoba megtekintése...</p></Link>
      </div>
    </div>
  )
}
