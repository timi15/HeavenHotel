import React from 'react'

export const Contact = () => {
  return (

    <>
      <div id='alcim'>
        <h3>kapcsolatok</h3>
      </div>
      <div id='contactContainer' className="container">



        <div id='contactColumn' >
          <p>Név(*)</p>
          <input type="text" name="name" placeholder='Adja meg a teljes nevét...' />
          <p>E-mail-cím(*)</p>
          <input type="email" name="e-mail" placeholder='Adja meg e-mail-címét...' />
          <p>Üzenet</p>
          <textarea rows={10} name="message" placeholder='Írja le miben segíthetünk... ' />

        </div>

      </div>
    </>


  )
}
