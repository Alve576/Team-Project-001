import React from 'react'
import FeatureSlick from './../../Components/FeatureSlick'
import MuiVerticalCards from './../../Components/MuiVerticalCards'
import Slick from './../../Components/Slick'
import Deals from './../../Components/Deals'
import Footer from './../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Slick />
      <FeatureSlick />
      <MuiVerticalCards />
      <Deals />
      <Footer />
    </div>
  )
}

export default Home