import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../img/logo1.png";

export const LogoComponent = () => {
  return (
    <div id='logoHatter' className="section"   >

      
      <Link  to="/"><img  data-aos="flip-right"   id='logo' src={logo} alt="logo"  /></Link>
     




    </div>
  )
}
