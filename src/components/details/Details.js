import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Details.css';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const Details = () => {
    const {id} = useParams();
    const [docs,setDocs] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`http://localhost:8000/hospitaldoctors/${id}`)
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
     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[10px] container mx-auto px-6'>
    
           <div className='text-d'>
<img src={docs.image} className='w-96 ml-14 rounded-full'></img>
<h1 className='font-bold text-primary ml-20 mt-5 text-3xl'>{docs.name}</h1>
<ul className='list-t'>
  <li className='text-t ml-24'><b>Designation:</b> {docs.designation}</li>
  <li className='text-t ml-24'><b>specialization Area:</b> {docs.specialization}</li>
  <li className='text-t ml-24'><b>Department:</b> {docs.department}</li>
  <li className='text-t ml-24'><b>Hospital:</b> {docs.hospital}</li>
  <li className='text-t ml-24'><b>Location:</b> {docs.location}</li>
  <Link to='/appointment'><button className='btn btn-primary ml-20 mt-5'>Book Appointment</button></Link>
</ul>
           </div>
           <div className='ml-32 ml-[-40px]'>
            <div>
            <h1 className='font-bold text-2xl text-blue-700'>Education Qualification:</h1>
            <p>{docs.education}</p> 
            </div>
            <br></br>
            <div>
            <h1 className='font-bold text-2xl text-blue-700'>Training Programme/ Workshop Attended:</h1>
            <p>{docs.training}</p>
            </div>
            <br></br>
            <div>
            <h1 className='font-bold text-2xl text-blue-700'>Books Authored/Research Papers published</h1>
            <p>{docs.books}</p>
            </div>
           </div>  
     </div> 
        <div>

        </div>
   </div>
  )
}
export default Details;