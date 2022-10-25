import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'




const Purchase = () => {

 
  const {id} = useParams()
  // usestate handel
  const [price, setPrice] = useState({})
  // useffecrt handel
  useEffect(()=> {
    const url = `http://localhost:3000/medicine/${id}`
    console.log(url, "aa")
    fetch(url)
    .then(res =>  res.json())
    .then(data => setPrice(data, "got it"))
  },[])


  



  return (
    <div>
     <p>  </p>
        <div>
        <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
            

              <div className="p-3 bg-teal-50 rounded-full my-3">
                <h1 className="ml-2 font-semibold text-[#1b82e2] uppercase">
                  Enter Shipping Info
                </h1>
              </div>
              <div className="px-4">
                <p className="mb-4 italic">
                  Enter your delivery address where you get the product. You can
                  also send any other location where you send the products.
                </p>
              </div>
              <form>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow-md outline-none focus:outline-none focus:shadow-outline w-full "
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Email"
                    className=" border-white px-3 py-4 my-1  border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
              
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
              </form>
            </div>

            
          {/* test */}

            

          </div>
        </div>
    </div>
  )
}

export default Purchase