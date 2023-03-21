import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/"><img data-aos="flip-right" id='logo' src={logo} alt="logo" /></Link>
    </div>
  )
}
