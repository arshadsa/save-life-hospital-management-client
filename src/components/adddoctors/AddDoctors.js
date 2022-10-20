import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddDoctors.css';

const AddDoctors = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/websitedoctors',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='container-fluid add-courses'>
        <h1 className='text-center text-2xl  mb-4  text-title'>  <Typewriter 
options={{
strings: [' Please add a Doctor with All information : '],
autoStart: true,
loop: true,

}}
/></h1>


<form onSubmit={handleSubmit(onSubmit)} className='text-center'>
  <input {...register("email",)} placeholder="Email" />
  <br></br>
  <br></br>
  <input {...register("displayname",)} placeholder="Name"  />
  <br></br>
  <br></br>
  <input {...register("name",)} placeholder="Doctor Name" />
  <br></br>
  <br></br>
  <input {...register("designation",)} placeholder="Doctor Designation"/>
  <br></br>
  <br></br>
  <input {...register("education",)} placeholder=" Education"/>
  <br></br>
  <br></br>
  <input type="number" {...register("fees", )} placeholder="Total Fees"/>
  <br></br>
  <br></br>
  <input {...register("location",)} placeholder=" Doctor's Location"/>
  <br></br>
  <br></br>
  <input {...register("hospital",)} placeholder=" Doctor's Hospital"/>
  <br></br>
  <br></br>
  <input {...register("Awards",)} placeholder=" Doctor's Awards"/>
  <br></br>
  <br></br>
  <input {...register("Services",)} placeholder="Doctor's Services"/>
  <br></br>
  <br></br>
  <input {...register("Specialization",)} placeholder="Doctor's Specialization"/>
  <br></br>
  <br></br>
  <input {...register("image",)} placeholder="Doctor's Image"/>
  <br></br>
  <br></br>
  <input {...register("slot1",)} placeholder=" Available slot 1"/>
  <input {...register("slot2",)} placeholder=" Available slot 2"/>
  <input {...register("slot3",)} placeholder=" Available slot 3"/>
  <input {...register("slot4",)} placeholder=" Available slot 4"/>
  <input {...register("slot5",)} placeholder=" Available slot 5"/>
  <input {...register("slot6",)} placeholder=" Available slot 6"/>
  
  <button className="btn lg:max-w-lg btn-secondary">Add Doctor</button>


</form> 

      
     
    </div>
    );
};

export default AddDoctors;