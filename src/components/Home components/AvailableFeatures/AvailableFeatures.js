import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import './AvailableFeatures.css';
const AvailableFeatures = () => {
  return (
//     <div className='container mx-auto px-6 mb-[130px]'>
//       <div className='text-4xl font-bold text-center justify-center pb-14'>
//         <h1>Available Features in Our Clinic</h1>
//       </div>

//       {/* parts */}

//       <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4'>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={operationimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Operation</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={medicalimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Medical</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={patientimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Patient Ward</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={testimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Test Room</h2>  
//   </div>
// </div>
//       <div className=" hhh lg:max-w-lg bg-base-100 pl-12 pr-12">
//   <figure><img src={icuimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">ICU</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={labimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Laboratory</h2>  
//   </div>
// </div>
//       </div>
//     </div>
<div>
<div className='text-4xl font-bold text-center justify-center pb-14 uppercase'>
<h1>Available <span className='text-[#1b82e2]'> (Features) </span> in Our Clinic</h1>

      </div>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-6 mb-[130px]'>
<div>
<img src='https://i.ibb.co/f2vQr83/feature.png' className='lg:max-w-lg'></img>
</div>
<div>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white mt-16"
      >
        <SwiperSlide>
          <div>
            <img src='https://i.ibb.co/5jjR7Mz/Test-feature-02.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold text-center text-xl pt-3'>Test room</h1>
          </div>
          <br/>
          <br/>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://i.ibb.co/ftrDv5Q/feature-06.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold ml-12 text-xl pt-3'>Medical</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://i.ibb.co/N1YmGWL/feature-01.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold ml-8 text-xl pt-3'>Patient Ward</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://i.ibb.co/PwsBg2Y/feature-03.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold ml-8 text-xl pt-3'>ICU</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://i.ibb.co/sjfP4nX/lab-feature-04.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold ml-8 text-xl pt-3'>Laboratory</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://i.ibb.co/9yXQsRT/operation-feature-05.jpg' className='w-36 a-image'></img>
            <h1 className='text-[#0071DC] font-bold ml-8 text-xl pt-3'>Operation</h1>
          </div>
        </SwiperSlide>
        
      </Swiper>
</div>
</div>
</div>
  );
};

export default AvailableFeatures;