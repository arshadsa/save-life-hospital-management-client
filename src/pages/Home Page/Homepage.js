// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file


import React from 'react'
import AvailableFeatures from '../../components/Home components/AvailableFeatures/AvailableFeatures'
import Banner from '../../components/Home components/Banner'
import { Use } from '../../components/Home components/use/Use'
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar'

const Homepage = () => {
  return (
    <div id='home'>
      <NavigationBar isHome={true} />
      {/* banner  */}
      <Banner></Banner>
      {/* what are you looking */}


    </div>

  )
}

export default Homepage