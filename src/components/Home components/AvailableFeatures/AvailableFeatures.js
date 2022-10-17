import React from 'react';
import operationimage from '../../../assets/Features-images/img7.svg';
import medicalimage from '../../../assets/Features-images/img8.svg';
import patientimage from '../../../assets/Features-images/img9.svg';
import testimage from '../../../assets/Features-images/img10.svg';
import icuimage from '../../../assets/Features-images/img11.svg';
import labimage from '../../../assets/Features-images/img12.svg';
import './AvailableFeatures.css';
const AvailableFeatures = () => {
  return (
    <div>
      <div className='text-4xl font-bold text-center justify-center pb-14'>
        <h1>Available Features in Our Clinic</h1>
      </div>

      {/* parts */}

      <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 mx-4 mr-4'>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-8 pr-8">
  <figure><img src={operationimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">Operation</h2>  
  </div>
</div>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-8 pr-8">
  <figure><img src={medicalimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">Medical</h2>  
  </div>
</div>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-8 pr-8">
  <figure><img src={patientimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">Patient Ward</h2>  
  </div>
</div>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-8 pr-8">
  <figure><img src={testimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">Test Room</h2>  
  </div>
</div>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-12 pr-12">
  <figure><img src={icuimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">ICU</h2>  
  </div>
</div>
      <div className=" hhh mx-auto lg:max-w-lg bg-base-100 pl-8 pr-8">
  <figure><img src={labimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" font-bold">Laboratory</h2>  
  </div>
</div>
      </div>
    </div>
  );
};

export default AvailableFeatures;