// .--------------------
// doctors booking card page ////
import React, { useState } from "react";

// icon import 
import {MdOutlineWatchLater} from 'react-icons/md'
import {FaRegMoneyBillAlt} from 'react-icons/fa'



const Doctors = ({ doctor }) => {
  const {
    image,
    category,
    name,
    education,
    designation,
    department,
    hospital,
    slot1,
    fees,
    
  } = doctor;

  // collaps
  const [descriptionCollapse, setDescriptionCollapse] = useState(true);

  // collaps button
  const showMore = () => {
    setDescriptionCollapse(true);
  };

  // collaps button
  const showLess = () => {
    setDescriptionCollapse(false);
  };

  return (
    <div>
      <div>
        <div className="single-doctor p-7">
        
            <img
              style={{ height: "300px" }}
              src={image}
              className='w-96 pt-3 pb-3'
              alt="doctor"
            />
       

          <div className="doctor-description ">
            <p className="doctor-category">{category}</p>
            <h4 className="doctor-name">{name}</h4>

            <span className="doctor-education">
              {descriptionCollapse ? education.slice(0, 80) : education}
            </span>

            {education.length > 80 ? (
              descriptionCollapse ? (
                <span
                  onClick={showLess}
                  className="collapse-btn font-bold text-primary  "
                >
                  see more
                </span>
              ) : (
                <span onClick={showMore} className="collapse-btn">
                  See lesse
                </span>
              )
            ) : (
              <span> </span>
            )}

            <h6 className="mt-4">{designation}</h6>
            <h6 className="department">{department}</h6>
            <h6 className="hospital">{hospital}</h6>


           <div className="mt-5">
            <div className="flex items-center gap-2">
            <p className="text-left text-[#757575] font-[600] "><MdOutlineWatchLater></MdOutlineWatchLater>  </p>
            <h6 className="hospital text-[15px] font-[600]">{slot1}</h6>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-left text-[#757575]  font-[600]"> <FaRegMoneyBillAlt  ></FaRegMoneyBillAlt> </p>
                <h6 className="department  text-[15px] font-[600]"> $ {fees}.00 </h6>
            </div>
           </div>

            <div className="text-center"> 
               <div className="flex justify-between mt-10">
                {/* View profile butoon */}
                  {/* use useNavigation this buttton where you wanna go*/}
                <button  class="text-1xl mt-4 mx-5 bg-white
                outline outline-[#0DE0FE] hover:bg-[#0DE0FE] w-[130px] h-[46px]  rounded-lg text-black font-[600] transition ease-in-out delay-100 ">
                  {" "}
                  <span className="text-[20px] text-white ">
                    {/* <AiFillCalendar></AiFillCalendar> */}
                  </span>{" "}
                  <span className="mx-2 text-[16px] ">View Profile</span>{" "}
                </button>

                {/* book now button */}
                {/* use useNavigaein this buttton where you wanna go*/}
                <button class="text-1xl mt-4 mx-5 bg-[#0DE0FE]
                w-[130px] h-[50px]  rounded-lg text-black font-[600] transition ease-in-out delay-100 ">
                  {" "}
                  <span className="text-[20px] text-white ">
                    {/* <AiFillCalendar></AiFillCalendar> */}
                  </span>{" "}
                  <span className="mx-2 text-[16px] "> Book Now</span>{" "}
                </button>
               </div>
              
               
            </div>
          </div>
        </div>
      </div>
       
     
   

    </div>
  );
};

export default Doctors;
