import React from 'react';
import Img15 from '../../../assets/Speciality-img/dentistry.png';
import Img16 from '../../../assets/Speciality-img/ent.png';
import Img21 from '../../../assets/Speciality-img/hematology.png';
import Img20 from '../../../assets/Speciality-img/nephrology.png';
import Img22 from '../../../assets/Speciality-img/physical.png';
import Img17 from '../../../assets/Speciality-img/urology.png';




const Specialties = () => {
  return (
    <div className='tpx-4 pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>
      <h1 className='text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Select a <span className='text-[#1b82e2]'>Speciality</span></h1>

      {/* Specialties Card  */}
      <div className='grid gap-9 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3'>
       
     
        
     
        {/* Card-Body-15  */}
        <div className='tp-4 mb-3 pt-5 pb-5  rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img15} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
               Dental Care / Dentistry</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, management, and treatment of defects and injuries related to the teeth and gums.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>
        {/* Card-Body-16  */}
        <div className='tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img16} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
                Ear, Nose and Throat / ENT</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, evaluation and treatment of diseases of the ear, nose and throat regions.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>

        {/* Card-Body-17  */}
        <div className='tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img17} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
               Urology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Diagnosis and treatment of diseases of the male and female urinary-tract system.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>
        
        {/* Card-Body-20  */}
        <div className='tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img20} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
               Kidney / Nephrology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Diagnosis, treatment of kidney diseases.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>
     
        {/* Card-Body-21  */}
        <div className='tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img21} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
                Hematology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Specialize in diseases of the blood and blood components. These include blood and bone marrow cells.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>
     
        {/* Card-Body-22  */}
        <div className='tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img22} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-primary'>
                Physical Medicine & Rehabilitation</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Enhance and restore functional ability and quality of life to people with physical impairments or disabilities.
              </p><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
        </div>
        </div>
     
       
     

      </div>
    </div>
  );
};

export default Specialties;