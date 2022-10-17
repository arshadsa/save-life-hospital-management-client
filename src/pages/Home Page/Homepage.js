// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file

import React from "react";
import AvailableFeatures from "../../components/Home components/AvailableFeatures/AvailableFeatures";
import Banner from "../../components/Home components/Banner";
import { Use } from "../../components/Home components/use/Use";
import Services from "../../components/Home components/What are u looking fr/Services";

const Homepage = () => {
  return (
    <div>
      {/* banner  */}
      <Banner></Banner>
      {/* what are you looking */}
      <div className="mt-[100px]">
        <Services></Services>
      </div>
    {/* dffjjfj */}
    
    </div>
  );
};

export default Homepage;
