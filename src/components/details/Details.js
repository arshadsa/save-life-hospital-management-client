import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

import { useForm } from "react-hook-form";

import './Details.css';
const Details = () => {
   
    const {id} = useParams();
    const [docs,setDocs] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`http://localhost:5000/websitedoctors/${id}`)
       .then(res=>res.json())
        .then(data=>setDocs(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

    //  const onSubmit = data =>{
    //     console.log(data);
    //     axios.post("https://dry-brook-75772.herokuapp.com/booking",data)
    //     .then(res=>{
    //         if(res.data.insertedId){
    //            alert("Added Successfully.")
    //             reset();
               
                
    //         }
    //     })
    // } 

    
const handleChange = event => {
    const disable = event.target.value;

    setDisable(disable);
}

  return (
   <div>
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
           <div className=''>
<img src={docs.image} className='w-48 mx-28 mt-36'></img>
           </div>
           <div className=''>
<h1 className='mt-36 font-bold text-2xl'>{docs.name}</h1>
<h1 className=''>{docs.category}</h1>
<h1 className=''><i class="fa-solid fa-user-doctor"></i>  {docs.designation}</h1>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
({docs.reviews})

<h1><i class="fa-solid fa-location-pin"></i> {docs.location}</h1>
           </div>
        </div>
     </div>
        

        <div>

        </div>
   </div>
  )
}
export default Details;