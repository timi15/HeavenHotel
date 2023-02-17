import React from 'react'
import { Toast } from 'react-bootstrap'

export const Uzenet = () => {
  return (
    <Toast >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Haeven Hotel</strong>
      </Toast.Header>
      <Toast.Body>Az üzenet sikeresen </Toast.Body>
    </Toast>
  )
}
