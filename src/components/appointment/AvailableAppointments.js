import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import AppointmentService from '../AppointmentService';

 const AvailableAppointments = ({date,setDate}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreament] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/websitedoctors')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div>
        <h1 className=' text-center text-2xl mt-12 mb-12'>Available Appointments on {format(date, 'PP')} </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto container'>
            {
                services.map(service=><AppointmentService
                key={service._id}
                service={service}
                setTreament={setTreament}
                
                >

                </AppointmentService>)
            }
        </div>
        
    </div>
  )
}
export default AvailableAppointments;
