import React from 'react'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { Opinions } from '../components/Opinions'
import { RoomOnHomePage } from '../components/RoomOnHomePage'

export const Home = () => {
  return (
    <>
    <About/>
    <RoomOnHomePage/>
    <Opinions/>
    <Gallery/>
    
    </>
  )
}
