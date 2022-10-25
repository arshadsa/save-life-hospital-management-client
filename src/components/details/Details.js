import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

import { useForm } from "react-hook-form";

import './Details.css';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';
const Details = () => {
   
    const {id} = useParams();
    const [docs,setDocs] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`http://localhost:5000/hospitaldoctors/${id}`)
       .then(res=>res.json())
        .then(data=>setDocs(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

  
    
const handleChange = event => {
    const disable = event.target.value;

    setDisable(disable);
}

  return (
   <div>
      <NavigationBar></NavigationBar>
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[50px] container mx-auto px-6'>
    
           <div className=''>
<img src={docs.image} className='lg:max-w-lg'></img>
           </div>
           <div className='ml-32 ml-[-40px]'>
<h1 className='font-bold text-6xl text-primary'>{docs.name}</h1>
<h1 className='text-2xl text-center mt-4'>{docs.category}</h1>
<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
<h1 className='mt-3 mb-1'><i class="fa-solid fa-user-doctor text-3xl"></i>{docs.designation}</h1>
<h1 className='mb-1 mt-5'><i class="fa-solid fa-star"></i>({docs.reviews} reviews)</h1>
<h1 className=' mt-5'><i class="fa-solid fa-location-pin"></i> {docs.location}</h1>
</div>
<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
<h1 className='mt-3 mb-1 ml-2'><i class="fa-solid fa-graduation-cap text-3xl"></i><br></br>{docs.education}</h1>
<h1 className='mb-1 mt-5'><i class="fa-solid fa-hospital text-3xl"></i><br></br>{docs.hospital}</h1>
</div>

           </div>  

     </div> 
       
     <table className="table w-full">
  <thead>
    <tr>
      <td className='text-center'></td>
      <td className='text-xl text-primary'><u>Available Slots</u></td>
      <td className='text-center'></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{docs.slots[0]}</td>
      <td>{docs.slots[1]}</td>
      <td>{docs.slots[2]}</td>
    </tr>
    <tr>
      <td>{docs.slots[3]}</td>
      <td>{docs.slots[4]}</td>
      <td>{docs.slots[5]}</td>
    </tr>
    <tr>
      <td>{docs.slots[6]}</td>
      <td>{docs.slots[7]}</td>
      <td>{docs.slots[8]}</td>
    </tr>
    <tr>
      <td>{docs.slots[9]}</td>
      <td>{docs.slots[10]}</td>
      <td>{docs.slots[11]}</td>
    </tr>
    <tr>
      <td>{docs.slots[12]}</td>
      <td>{docs.slots[13]}</td>
      <td>{docs.slots[14]}</td>
    </tr>
  </tbody>
</table>
       
      
        <div className="overflow-x-auto">
  <Link to='/appointment'><button className='btn btn-primary ml-96 mt-5'>Book Appointment</button></Link>
</div>

        <div>

        </div>
   </div>
  )
}
export default Details;