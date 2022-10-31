import React, { useEffect, useState } from 'react';

import SingleAmbulance from './SingleAmbulance';


const Ambulance = () => {
  const [ambulance,setAmbulance] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ambulance')
        .then(res => res.json())
        .then(data => setAmbulance(data))
    },[])
  return (
    <div className='Container pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>
      <div>
        <h2 className='text-center text-xl pt-20 uppercase pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-[#1b82e2]'>(Ambulance)</span> Services</h2>
      </div>

 
    <div className='container mx-auto px-6 p-3 mt-[80px]'>
       <h2 className='text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-primary'>Ambulance</span> Services</h2>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

    {
      ambulance.map(ambulances=><SingleAmbulance key={ambulances._id} ambulances={ambulances}>

      </SingleAmbulance>

  )
}
</div>
</div>
</div>
)}
export default Ambulance;