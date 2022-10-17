// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file


import React from 'react'
import AvailableFeatures from '../../components/Home components/AvailableFeatures/AvailableFeatures'
import Banner from '../../components/Home components/Banner'
import { Use } from '../../components/Home components/use/Use'

const Homepage = () => {
  return (
    <div>
        {/* banner  */}
        <Banner></Banner>
        {/* what are you looking */}

        <AvailableFeatures></AvailableFeatures>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Use></Use>
    </div>

  )
}

export default Homepage