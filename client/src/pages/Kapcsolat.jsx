
import { Alert, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';



export const Kapcsolat = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      setShowError(false);
    }, 5000);
  }, [show, showError]);



  const validate = () => {
    let errors = {};
    if (name.length == 0) {
      errors.name = 'Kérjük, töltse ki a mezőt!';
    }
    if (email.length == 0) {
      errors.email = 'Kérjük, töltse ki a mezőt!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Az e-mail-cím nem megfelelő!';
    }
    if (message.length == 0) {
      errors.message = 'Kérjük, töltse ki a mezőt!';
    }
    return errors;
  };

  const handleClick = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // Submit the form data  
      localStorage.setItem("message", JSON.stringify({ name, email, message }));
      setShow(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrors(errors);
      setShowError(true);

    }

  }


  return (


    <>
      <div className='alcim'>
        <h3>kapcsolatok</h3>
      </div>



      <div className="container">

        <div className="row">


          <div className='col-md-6 col-xs-6 contact'>

            <div className="column">
              <div><h5>Elérhetőségeink</h5></div>
              <ul className="contact-element">
                <li>

                  <i className="fa fa-map-marker fa-sm"  ></i>4400 Nyíregyháza Hotel
                  utca 124.

                </li>
                <li>

                  <i className="fa fa-phone fa-sm"></i>+36-30-234-6421

                </li>
                <li>

                  <i className="fa fa-envelope fa-sm"></i>sales@hotelheaven.com

                </li>
                <li>

                  <i className="fa fa-clock-o fa-sm"></i>0-24h


                </li>
              </ul>
              <iframe className='iframe1' title='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18318.412977710253!2d21.703356199838705!3d47.95752199612066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389fe7b75757df%3A0x400c4290c1e11a0!2zTnnDrXJlZ3low6F6YQ!5e0!3m2!1shu!2shu!4v1674429013612!5m2!1shu!2shu" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>



          <div className='col-md-6 col-xs-6' style={{ textAlign: 'center' }}  >


            {
              show && (<Alert>Az üzenet sikeresen elküldve</Alert>)
            }


            <div style={{ marginBottom: 30, marginTop: 20 }}><h5>Írj nekünk üzenetet!</h5></div>
            <form >

              <div>
                {showError && (errors.name && <Alert severity='error'>{errors.name}</Alert>)}
                <TextField id="outlined-basic" label="Név" type={'text'} variant="outlined" value={name} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                {showError && (errors.email && <Alert severity='error'>{errors.email}</Alert>)}
                <TextField id="outlined-basic" label="E-mail cím" type={'email'} variant="outlined" value={email} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
                {showError && (errors.message && <Alert severity='error'>{errors.message}</Alert>)}
                <TextField id="outlined-basic" label="Üzenet" type={'text'} variant="outlined" value={message} multiline rows={5} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => setMessage(e.target.value)} />
              </div>


              <Button variant='outlined' id='button' onClick={() => handleClick()} >Küldés</Button>


            </form>

          </div>



        </div>

      </div>


    </>


  )
}
