import React from 'react'
import BookingModal from './appointment/BookingModal';

 const AppointmentService = ({service,setTreatment}) => {
  const {name,available,image} = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body mx-auto">
    <img src={image} className='mx-auto'></img>
    <h2 className="card-title text-primary mx-auto">{name}</h2>
    <p className='mx-auto'>
      {available.length  
      ? <span>{available[0]}</span>
      :
      <span className='text-red-500 mx-auto'>Try another day !!</span>
      
    }
    </p>
    <p className='mx-auto'>{available.length} {available.length>1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-center">
        <label 
      disabled={available.length==0} 
       htmlFor="booking-modal" 
       onClick={() => setTreatment(service)}
       className="btn btn-primary">
         <i class="fa-regular fa-calendar-check mr-2"> </i>Book Appointment
         </label>
    </div>
  </div>
</div>

    </div>
  )
}
export default AppointmentService;