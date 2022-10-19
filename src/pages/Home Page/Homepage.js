// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file
import React from "react";
import AvailableFeatures from "../../components/Home components/AvailableFeatures/AvailableFeatures";
import Banner from "../../components/Home components/Banner";
import Doctor from "../../components/Home components/Book Our Doctors/Doctor";
import { NewsLetter } from "../../components/Home components/newsletter/NewsLetter";
import Specialties from "../../components/Home components/Specialties/Specialties";
import { Use } from "../../components/Home components/use/Use";
import Services from "../../components/Home components/What are u looking fr/Services";

const Homepage = () => {
  return (
    <div id='home'>
      {/* banner  */}
      <Banner />
      {/* what are you looking */}
      <div className="mt-[100px]">
        <Services></Services>
      </div>
      {/* AvailableFeatures anik vai s*/}
      <div className="mt-[100px]">
        <AvailableFeatures></AvailableFeatures>
      </div>
      {/*Specialties shamim vai  */}
      <div className="mt-[100px]">
        <Specialties></Specialties>
      </div>
      {/* use part How to use */}
      <div className="mt-[100px]">
        <Use></Use>
      </div>
      {/*Booking  Doctors  slider from doccer page (2) emon */}
      <div className="mt-[100px]">
        <Doctor></Doctor>
      </div>
      {/* Newsletter yaesin*/}
      <div className="mt-[100px]">
        <NewsLetter></NewsLetter>
      </div>

    </div>
  );
};

export default Homepage;
