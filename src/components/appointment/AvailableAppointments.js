import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import AppointmentService from '../AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
  const [service, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/hospitaldoctors')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])


  const formattedDate = format(date, 'PP');
  const { isLoading, error, data, refetch } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then(res => res.json())
  )
  if (isLoading) {
    return <p>Loading</p>
  }
  // useEffect(()=>{
  //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // },[formattedDate])

  return (
    <div>
      <h1 className=' text-center text-2xl mt-12 mb-12'>Available Appointments on {format(date, 'PP')} </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto container'>
        {
          service.map(service => <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}

          >

          </AppointmentService>)
        }
      </div>
      {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch}></BookingModal>}
    </div>
  )
}
export default AvailableAppointments;
