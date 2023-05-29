import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
  // import framer hooks
  import { useMotionValue, useTransform, motion } from 'framer-motion';
import { toast } from 'react-toastify';
import './SingleAmbulance.css';

const SingleAmbulance = ({ ambulances }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post(`http://localhost:5000/ambooking`, data)
      .then(res => {

        toast('Added Ambulance Successfully')
        reset();



      })
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);


  return (
    <div>
      <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='lg:max-w-lg h-96  rounded-[30px] border-[4px] border-white  cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={ambulances.image} alt='' className='lg:max-w-sm h-96' />
        </div>
        {/* card title */}
        <h1 className='text-2xl mb-6 font-bold text-[#1b82e2]'>{ambulances.name}</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
         {ambulances.description.slice(0,150)}
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            Add to Bag
          </button>
          <div className='text-[24px] font-bold text-[#000000]'>${ambulances.price}</div>
        </div>
        {/* colors */}
        
      
      </motion.div>
    </div>
    </div>
  )
}
export default SingleAmbulance;
