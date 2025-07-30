import React from 'react'
import Hero from '../components/Hero'
import LatestColllection from '../components/LatestColllection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestColllection></LatestColllection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home