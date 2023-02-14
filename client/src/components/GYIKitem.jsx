import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const GYIKitem = (props) => {
  
  return (
    <Accordion style={{ marginTop: 25, marginBottom: 25 }} >
      <Accordion.Item eventKey='0'  >
        <Accordion.Header >{props.question}</Accordion.Header>
        
          <Accordion.Body >
            {props.answer}
          </Accordion.Body>
        
      </Accordion.Item>

    </Accordion>
  )
}
