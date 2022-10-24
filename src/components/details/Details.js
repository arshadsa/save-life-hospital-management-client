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
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
           <div className=''>
<img src={docs.image} className='w-48 mx-28 mt-36'></img>
           </div>
           <div className=''>
<h1 className='mt-36 font-bold text-2xl text-primary'>{docs.name}</h1>
<h1 className=''>{docs.category}</h1>
<h1 className='mt-5 mb-1'><i class="fa-solid fa-user-doctor"></i>  {docs.designation}</h1>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
({docs.reviews})

<h1 className='mt-1'><i class="fa-solid fa-location-pin"></i> {docs.location}</h1>
           </div>
        </div>

     <div className=''>
          
           <div className='ml-96'>
<h1 className='mt-36 mb-1'><i class="fa-regular fa-thumbs-up"></i> 99%</h1>
<h1 className='mb-1'><i class="fa-regular fa-comment"></i> 35 feedback</h1>
<h1 className='mb-1'><i class="fa-solid fa-location-pin"></i> {docs.location}</h1>
<h1><i class="fa-regular fa-money-bill"></i> {docs.fees}</h1>




           </div>
        </div>
    
    
     </div>
        
        <br></br>
        <br></br>
        <br></br>
      
        <div className="overflow-x-auto">
  <Link to='/appointment'><button className='btn btn-primary ml-96 mt-5'>Book Appointment</button></Link>
</div>

        <div>

        </div>
   </div>
  )
}
export default Details;