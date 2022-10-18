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
      <Banner />
      {/* what are you looking */}
      <div className="mt-[100px]">
        <Services></Services>
      </div>
      {/* AvailableFeatures anik vai s*/}
      <div className="mt-[100px]">

      </div>
      {/*Specialties shamim vai  */}
      <div className="mt-[100px]">

      </div>
      {/* use part How to use */}
      <div className="mt-[100px]">

      </div>
      {/*Booking  Doctors  slider from doccer page (2) emon */}
      <div className="mt-[100px]">

      </div>
      {/* Newsletter yaesin*/}
      <div className="mt-[100px]">

      </div>

    </div>
  );
};

export default Homepage;
