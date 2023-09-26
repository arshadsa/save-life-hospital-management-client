import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Ambulance1 from '../../../assets/Ambulance-images/ambulance1.jpg';
import Ambulance2 from '../../../assets/Ambulance-images/ambulance2.jpg';
import Ambulance3 from '../../../assets/Ambulance-images/ambulance3.jpg';
import SingleAmbulance from './SingleAmbulance';

const Ambulance = () => {
  const [ambulance,setAmbulance] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ambulance')
        .then(res => res.json())
        .then(data => setAmbulance(data))
    },[]);

  return (
    <div className='Container pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>
      <div>
        <h2 className='text-center text-xl pt-20 uppercase pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-[#1b82e2]'>(Ambulance)</span> Services</h2>
      </div>
     <div className='Container pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>

       <div className='grid gap-9 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3'>
         {/* Ambulance Service-1  */}
         <div className='bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2'>
           {/* Image Content  */}
           <div>
             <img src={Ambulance1} alt="" />
           </div>
           {/* Text Content  */}
         <div className='mb-7 pl-3'>
          <h3 className='text-xl tmb-2 mt-5 mb-5 font-bold text-primary'>Ambulance Car</h3>
           <p className='text-semibold pr-10 mb-5'>Proin ultricies rhoncus neque id dignissim. Nullam congue luna est eget auctor pretium.</p>
           <div className='text-primary'>
           <a className='flex gap-2 cursor-pointer'>READ MORE
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
          </a>
           </div>
         </div>
         </div>
        
         {/* Ambulance Service-2  */}
         <div className='bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2'>
           {/* Image Content  */}
           <div>
            <img src={Ambulance2} alt="" />
         </div>
          {/* Text Content  */}
         <div className='mb-7 pl-3'>
          <h3 className='text-xl tmb-2 mt-5 mb-5 font-bold text-primary'>Medical Flight Services</h3>
     <p className='text-semibold pr-10 mb-5'>Curabitur lectus velit, pulvinar vitae elementum vitae, pharetra in mi.</p>
           <div className='text-primary'>
          <Link to='/checkout'>Book</Link>
           </div>
         </div>
        </div>
        
         {/* Ambulance Service-3 */}
         <div className='bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2'>
           {/* Image Content  */}
           <div>
             <img src={Ambulance3} alt="" />
           </div>
           {/* Text Content  */}
         <div className='mb-7 pl-3'>
       <h3 className='text-xl tmb-2 mt-5 mb-5 font-bold text-primary'>Medical </h3>
      <p className='text-semibold pr-10 mb-5'>Aenean a mi mi. Sed sem eros, commodo ut lacinia ut, eleifend id ipsum.</p>
           <div className='text-primary'>
         <a className='flex gap-2 cursor-pointer'>READ MORE
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
         </a>
         </div>
        </div>
        </div>
        

     </div>
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
)
}
export default Ambulance;