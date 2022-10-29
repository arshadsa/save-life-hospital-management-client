import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/hospitaldoctorsbooking/${id}`;
    const {data:coursebooking,isLoading} = useQuery(['hospitaldoctorsbooking',id], ()=>fetch(url).then(res=>res.json()))

    if(isLoading){
       return <p>Loading</p>
    }

  return (
    <div>
        <h2>Payment Id is {id}</h2>

        <div className="card w-96 bg-myorder mx-auto mt-12 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Hello! <span className=''>{coursebooking.patientName}</span></h2>
    <h2 className="font-bold text-green-300">Please pay for Dr. <b className=''>{coursebooking.treatment}</b></h2>
    <p>Please Pay $ <span className='font-bold text-secondary'>{coursebooking.fees}</span></p>
   <button className='btn btn-primary w-48 mx-auto'>Pay Now</button>
   
  </div>
</div>
    </div>
  )
}
export default Payment;