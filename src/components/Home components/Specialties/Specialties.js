import React from 'react';
import Img14 from '../../../assets/Speciality-img/cardiology.png';
import Img3 from '../../../assets/Speciality-img/child.png';
import Img15 from '../../../assets/Speciality-img/dentistry.png';
import Img13 from '../../../assets/Speciality-img/diabetes.png';
import Img8 from '../../../assets/Speciality-img/eye.png';
import Img12 from '../../../assets/Speciality-img/gastroenterology.png';
import Img2 from '../../../assets/Speciality-img/gynocology.png';
import Img11 from '../../../assets/Speciality-img/internal.png';
import Img1 from '../../../assets/Speciality-img/medicine.png';
import Img9 from '../../../assets/Speciality-img/neurology.png';
import Img7 from '../../../assets/Speciality-img/nutrition.png';
import Img10 from '../../../assets/Speciality-img/orthopedics.png';
import Img5 from '../../../assets/Speciality-img/psychiatry.png';
import Img6 from '../../../assets/Speciality-img/psychology.png';
import Img4 from '../../../assets/Speciality-img/skin.png';



const Specialties = () => {
  return (
    <div className='tpx-4 pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>
      <h1 className='text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Please select a speciality</h1>

      {/* Specialties Card  */}
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3'>
        {/* Card-Body-1  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img1} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
                Medicine / General Physician</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Cold, flu, fever, vomiting, infections, headaches or any other general health issues
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-2  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img2} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
              Gynecology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
                Any women's health related issues including pregnancy, menstruation, fertility issues, hormone disorders etc.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-3  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img3} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
              Child Care / Pediatrics</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Any children's health related issues including physical, behavior and mental health.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-4  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img4} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
              Skin / Dermatology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Treatment of diseases related to skin, hair and nails and some cosmetic problems.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-5  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img5} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
              Psychiatry</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Diagnosis, prevention, and treatment of mental disorders related to mood, behaviour, cognition, and perceptions.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-6  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img6} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Counselor / Psychology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Identify and diagnose mental, behavioral, and emotional disorders
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-7  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img7} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Nutrition & Food Science</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Weight management, Health &amp; wellness, Overall well being.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-8  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img8} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
                Eye / Ophthalmology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, treatment of eye disorders
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-9  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img9} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Brain / Neurology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, treatment for disease involving the central and peripheral nervous systems.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-10  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img10} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
                Orthopedics</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Bones, muscles, joints, tendons, ligaments.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-11  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img11} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
              Internal Medicine</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
              Prevention, diagnosis, and treatment of adults across the spectrum from health to complex illness.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-12  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img12} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Gastroenterology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diseases affecting the gastrointestinal tract, which include the organs from mouth into anus, along the alimentary canal...
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-13  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img13} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Diabetes / Endocrinology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Treatment of diseases related to problems with hormone.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-14  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img14} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Heart / Cardiology</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, treatment of congenital heart defects, coronary artery disease, heart failure, and valvular heart disease.
              </p>
            </div>
        </div>
        </div>
     
        {/* Card-Body-15  */}
        <div className='tp-4 pt-3 pb-3 rounded-[10px] bg-white shadow ring-4 ring-gray-100 ring-offset-2 hover:bg-gray-50 hover:no-underline'>
        <div className='tmb-5 flex space-x-4'>
            {/* Card-img  */}
            <div className='tmb-4 h-24 w-24 flex-shrink-0 rounded'>
              <img src={Img15} alt="" className='h-24 w-24 object-cover'/>
            </div>
            {/* Card-Title  */}
            <div className='text-left'>
              <h3 className='text-xl tmb-2 font-bold text-gray-900'>
               Dental Care / Dentistry</h3>
              <p className='text-sm pt-2 m-0 pr-8 font-normal text-gray-600'>
               Diagnosis, management, and treatment of defects and injuries related to the teeth and gums.
              </p>
            </div>
        </div>
        </div>
     

      </div>
    </div>
  );
};

export default Specialties;