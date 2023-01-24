
import React from 'react'
import { Button } from 'react-bootstrap'

export const Contact = () => {
  return (

    <>
      <div id='alcim'>
        <h3>kapcsolatok</h3>
      </div>

      <div className="section">

        <div id='contactContainer' className="container">

          <div className="row">



            <div id='googleMap' className='col-md-6 col-xs-6'>

              <div className="column">
                <div><h5>Elérhetőségeink</h5></div>
                <ul className="contact">
                  <li>

                    <i className="fa fa-map-marker fa-lg" ></i>4400 Nyíregyháza Hotel
                    utca 124.

                  </li>
                  <li>

                    <i className="fa fa-phone fa-lg"></i>+36-30-234-6421

                  </li>
                  <li>

                    <i className="fa fa-envelope fa-lg"></i>sales@hotelheaven.com

                  </li>
                  <li>

                    <i className="fa fa-clock-o fa-lg"></i>0-24h


                  </li>
                </ul>
                <iframe id='iframe1' title='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18318.412977710253!2d21.703356199838705!3d47.95752199612066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389fe7b75757df%3A0x400c4290c1e11a0!2zTnnDrXJlZ3low6F6YQ!5e0!3m2!1shu!2shu!4v1674429013612!5m2!1shu!2shu" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>



            <div id='contactForm' className='col-md-6 col-xs-6' >

              <div><h5>Írj nekünk üzenetet!</h5></div>

              <p>Név(*)</p>
              <input type="text" name="name" placeholder='Adja meg a teljes nevét...' />
              <p>E-mail-cím(*)</p>
              <input type="email" name="e-mail" placeholder='Adja meg e-mail-címét...' />
              <p>Üzenet</p>
              <textarea rows={10} name="message" placeholder='Írja le miben segíthetünk... ' />
              <Button>Küldés</Button>

            </div>
            

          </div>

        </div>

      </div>
    </>


  )
}