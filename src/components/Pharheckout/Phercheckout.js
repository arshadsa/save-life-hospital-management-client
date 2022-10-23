import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Phercheckout = () => {

  // handel useparams
    const {id} = useParams()
// handel useState
    const [singlemedicine , setSinglemedicine] = useState([])
// handel useEffects
    // useEffect(()=>{
    //   const url = `http://localhost:8000/medicine/${id}`
    //   console.log(url, "got from here")
    //   fetch(url)
    //   .then(res=> res.json())
    //   .then(data => setSinglemedicine(data))
    // },[])


    useEffect(()=> {
      const urls = `http://localhost:8000/medicine/${id}`
      fetch(urls )
      .then(res => res.json())
      .then(data => setSinglemedicine(data) )
     },[])
  
   console.log(singlemedicine?.name , "wrong ??")


  return (
    <div className='mt-[130px]'>

      <div>
        { singlemedicine.length > 0 &&
         singlemedicine?.map((medicine) => 
         <div>
      <div className="mx-auto container px-6 flex justify-between flex-wrap">
      <img
        alt="medicine"
        className="lg:w-1/3 w-full lg:h-auto h-auto object-cover object-center rounded-md"
        src={medicine?.image}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-teal-500 text-3xl font-display title-font font-medium mb-2">
          The Catcher in the Rye
        </h1>
        <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
          Brand: {medicine?.brand}
        </h2>
        <div className="mb-2">
        
        </div>
        <p className="leading-relaxed tracking-wide text-gray-800 font-sans h-20 overflow-hidden">
          {medicine?.description}
        </p>
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            ৳ 58.00
          </span>
        </div>
        <div className="flex flex-wrap gap-3 align-center">
   

            <button class="flex flex-wrap items-center py-2 px-4 text-lg rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700">
              <i class="fas fa-cart-plus"></i> &nbsp; Buy Now
            </button>
    
        </div>
      </div>
    </div>
         </div>
         
         )
        }
        
      </div>
    </div>

  )
}

export default Phercheckout