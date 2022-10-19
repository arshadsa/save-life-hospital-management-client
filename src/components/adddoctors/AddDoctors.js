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
  <input {...register("name",)} placeholder="Course Name" />
  <br></br>
  <br></br>
  <input {...register("description",)} placeholder="Course Description"/>
  <br></br>
  <br></br>
  <input {...register("lessons",)} placeholder=" Total Lessons"/>
  <br></br>
  <br></br>
  <input {...register("quizes",)} placeholder=" Total Quizes"/>
  <br></br>
  <br></br>
  <input {...register("students",)} placeholder=" Total Students"/>
  <br></br>
  <br></br>
  <input {...register("courseduration",)} placeholder=" Course Duration"/>
  <br></br>
  <br></br>
  <input {...register("skilllevel",)} placeholder=" Skill Level"/>
  <br></br>
  <br></br>
  <input {...register("language",)} placeholder="Language"/>
  <br></br>
  <br></br>
  <input {...register("instructor",)} placeholder="Instructor Name"/>
  <br></br>
  <br></br>
  <input {...register("instructorimage",)} placeholder="Instructor-Image"/>
  <br></br>
  <br></br>
  <input {...register("review",)} placeholder=" Total Review"/>
  <br></br>
  <br></br>
  <input type="number" {...register("price", )} placeholder="Course Price"/>
  <br></br>
  <br></br>
  <input {...register("img",)} placeholder="Course Image"/>
  <br></br>
  <br></br>
  <input {...register("video",)} placeholder="Course Video"/>
  <br></br>
  <br></br>
  <br></br>
  <button className="btn lg:max-w-lg">Add Doctor</button>


</form> 

      
     
    </div>
    );
};

export default AddDoctors;