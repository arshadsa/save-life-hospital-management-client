import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [ispoen, setIsopen] = useState(false);
  const [ispoentw, setIsopentw] = useState(false);
  const [ispoent, setIsopent] = useState(false);
  const [ispoenfo, setIsopenfo] = useState(false);
  const [ispoenf, setIsopenf] = useState(false);
  const [ispoens, setIsopens] = useState(false);
 

  return (
    <div className="container mx-auto p-2 px-6 overflow-hidden">
       <div className='mb-[100px] mt-[30px]'>
       <p className='text-center text-4xl uppercase font-bold  '>Frequently asked  <span className='text-[#1b82e2]'> (questions) </span>  </p>
        <p className='text-center mt-1'> if your have any query regarding of us. Hope you well get your ans from here.</p>
       </div>
      <div className="hidden md:block ">
      <div class="accordion horizontal">
		  <section id="about">
		      <h2><a href="#about">can i join from any where? </a></h2>
		      <p>Yeas from any where you can join . with android or ios </p>
		  </section>
		  <section id="services">
		      <h2><a href="#services"> is doctros are good ?</a></h2>
		      <p> obviusly good, before accessing doctor service. At first read doctor designation clearly and carefully </p>
		  </section>
		  <section id="blog">
		      <h2><a href="#blog">money back guarantee </a></h2>
		      <p>L no please before booking doctor.read carefully doctor designation as well every details</p>
		  </section>
		  <section id="portfolio">
		      <h2><a href="#portfolio">is service are free?</a></h2>
		      <p>no .But there you will get precious.DOctor's tips Please subscribe our newsleter for and read blog carefully  </p>
		  </section>
		  <section id="contact">
		      <h2><a href="#contact"> I have another query </a></h2>
		      <p> Okay no problem just ask our messenger chat</p>
		  </section>
		 </div>
      </div>

      {/* ==============
      accrodian for mobile 
      ==================*/}
      <div className="md:hidden">
  <div class="tabs-box">
    <div class="acord">
        <label for="tb-one" class="bg-one">
         
        is service are free?
        </label>
        <input type="checkbox" name="mytabs" id="tb-one"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content" >
  <span class="square"></span>

  No .But there you will get precious.DOctor's tips Please subscribe our newsleter for and read blog carefully
        </div>
    </div>

    <div class="acord">
        <label for="tb-two"  class="bg-two">
        
        money back guarantee
        </label>
        <input type="checkbox" name="mytabs" id="tb-two"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
          no please before booking doctor.read carefully doctor designation as well every details
        </div>
    </div>

    <div class="acord">
        <label for="tb-three"  class="bg-three">
       
        is doctros are good ?
        </label>
        <input type="checkbox" name="mytabs" id="tb-three"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
          obviusly good, before accessing doctor service. At first read doctor designation clearly and carefully 
        </div>
    </div>


    <div class="acord">
        <label for="tb-four"  class="bg-four">
          
        can i join from any where?
        </label>
        <input type="checkbox" name="mytabs" id="tb-four"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
          Yeas from any where you can join . with android or ios
        </div>
    </div>

    <div class="acord">
        <label for="tb-five"  class="bg-five">
         
        I have another query
        </label>
        <input type="checkbox" name="mytabs" id="tb-five"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
          Okay no problem just ask our messenger chat
        </div>
    </div>

  

  </div>
      </div>
       
    </div>
  );
};

export default Faq;
