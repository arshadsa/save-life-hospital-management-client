import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

import { useForm } from "react-hook-form";

 const AppointmentService = ({service,setTreatment}) => {

    const {name,slot1,slot2,slot3,slot4,slot5,slot6} = service;

    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);

    const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
        console.log(data);
        axios.post("http://localhost:5000/bookingdoctors",data)
        .then(res=>{
            if(res.data.insertedId){
               alert("Added Successfully.")
                reset();
               
                
            }
        })
    } 

  return (
    <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
  <div className="card-body">
    <h2 className="card-title mx-auto">{name}</h2>
    {
        slot1 || slot2 || slot3 || slot4 || slot5 || slot6 ? <span className='mx-auto'>{slot1}</span>
        :<span className='text-red-500 mx-auto'>No slot available</span>
    }
    
    
    <div className="card-actions justify-center">   
{/* <label onClick={() => setTreatment(service)}  disabled={!slot1 || !slot2 || !slot3|| !slot4 || !slot5 || !slot6} htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>

<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="">✕</label>
    <input type="text" placeholder="Doctor's Name" className="input input-bordered w-full max-w-xs"  />
    
  </div>
</div> */}



<label onClick={() => setTreatment(service)}  disabled={!slot1 || !slot2 || !slot3|| !slot4 || !slot5 || !slot6} htmlFor="my-modal-3" className="btn btn-primary">Book Appointment</label>


<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
      <h1 className='font-bold text-2xl mb-1 text-primary'>Please Make an appointment: </h1>
         <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input mt-2 mb-2  input-bordered w-full max-w-xs drop-shadow-md text-black mb-1'   />
        
     
         <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input mt-2 mb-2  input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={service.name}/>
         
    
         <select className="select w-full max-w-xs">
  <option disabled selected>Slots</option>
  <option>{service.slot1}</option>
  <option>{service.slot2}</option>
  <option>{service.slot3}</option>
  <option>{service.slot4}</option>
  <option>{service.slot5}</option>
  <option>{service.slot6}</option>
 
</select>
    
    
    
         <input type="text" {...register("day")}placeholder="Course Price" className='input mt-2 mb-2 input-bordered w-full max-w-xs drop-shadow-lg mb-1' defaultValue={new Date().toLocaleDateString("de-DE")}  />
    
    
    <input {...register("hospital", { required: true, maxLength: 1920 })} placeholder="hospital" className='input mt-2 mb-2  input-bordered w-full max-w-xs drop-shadow-lg mb-1' defaultValue={service.hospital} />

    <input {...register("location", { required: true, maxLength: 1920 })} placeholder="location" className='input mt-2 mb-2  input-bordered w-full max-w-xs drop-shadow-lg mb-1' defaultValue={service.location} />
    
         
    
    
    
         <input {...register("phone", { required: true, })} placeholder="Patient Phone No" className='input mt-2 mb-2  input-bordered w-full max-w-xs drop-shadow-lg'/>
      
    
         
       
         <input type="submit" className='w-80 btn btn-primary shadow-banner' value='Book Appointment' />
       </form>
  </div>
</div>



    </div>
  </div>
</div>
    </div>
  )
}
export default AppointmentService;