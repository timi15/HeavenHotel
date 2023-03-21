import React from 'react'
import { Galeria } from '../components/Galeria'
import { VendegeinkMondtak } from '../components/VendegeinkMondtak'
import { Rolunk } from '../components/Rolunk'
import { SzobaAFooldalon } from '../components/SzobaAFooldalon'

export const Kezdooldal = () => {
  return (
    <>
      <Rolunk />
      <SzobaAFooldalon />
      <VendegeinkMondtak />
      <Galeria />
    </>
  )
}
