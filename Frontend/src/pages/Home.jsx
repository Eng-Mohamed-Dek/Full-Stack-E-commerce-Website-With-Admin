import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import {Recent} from '../components/Recent'
import Newslatter from '../components/Newslatter'

const Home = () => {
  return (
    <>
    <Hero />
    <Popular />
    <Recent />
    <Newslatter />
    </>
  )
}

export default Home