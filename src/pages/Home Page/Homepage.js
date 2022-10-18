// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file
import React from "react";
import AvailableFeatures from "../../components/Home components/AvailableFeatures/AvailableFeatures";
import Banner from "../../components/Home components/Banner";
import Doctor from "../../components/Home components/Book Our Doctors/Doctor";
import { Use } from "../../components/Home components/use/Use";
import Services from "../../components/Home components/What are u looking fr/Services";
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar'

const Homepage = () => {
  return (
    <div id='home'>
      <NavigationBar isHome={true} />
      {/* banner  */}
      {/* what are you looking */}
      {/* banner  */}
      <Banner></Banner>
      {/* what are you looking */}
      <div className="mt-[100px]">
        <Services></Services>
      </div>
      {/*Booking  Doctors  slider from doccer page (2) */}
      <div className="mt-[100px]">

      </div>
      {/*  */}
      <div id='home'>
        {/* banner  */}
        <Banner></Banner>
        {/* what are you looking */}
      </div>
    </div>
  );
};

export default Homepage;
