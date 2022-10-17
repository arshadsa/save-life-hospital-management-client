import React from 'react';
import headpain from '../../../assets/Features-images/head_pain.png';
import './Use.css';
export const Use = () => {
  return (
    <div>
        
<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
<img src={headpain} className='lg:max-w-lg mx-auto'></img>
<div className='mr-10'>
    <h1 className='font-bold text-5xl mb-8'>When to use SaveLife.cm</h1>
    <div className='mb-5'>
        <h2 className='text-2xl mb-2'>Common health issue</h2>
        <p>Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day.</p>
    </div>
    <div className='mb-5'>
        <h2 className='text-2xl mb-2'>Specialist advice</h2>
        <p>Sometimes it’s helpful to see a specialist when you want. For gynaecology, child specialists, dermatology, cardiology, gastroenterology, nutrition,chronic diseases such as hypertension, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialities are available on DocTime.

</p>
    </div>
    <div>
        <h2 className='text-2xl mb-2'>Mental health and wellbeing</h2>
        <p>In a fast paced world, it is important to monitor and protect your mental health and wellbeing. Doctors can help you stay healthy whether you have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression.</p>
    </div>
</div>
</div>

    </div>
  )
}
