import React from "react";
import operationimage from "../../assets/Features-images/img7.svg";

const DoctorCard = ({speciality}) => {
  return (
    <div>
      <a href={`/doctors/${speciality}`}>
        <div class="cursor-pointer p-4 flex max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="w-1/3 bg-cover bg-landscape flex align-items-center">
            {/* <img className="w-full" src="../../assets/Speciality-img/gastroenterology.png" alt="" /> */}
            <img className="w-full p-4" src={operationimage} alt="" />
          </div>
          <div class="w-2/3 p-4 mb-2">
            <h1 class="text-gray-900 font-bold text-2xl">{speciality}</h1>
            <p class="mt-2 text-gray-600 text-sm">
              You can&#x27;t buy your future, but you can do it. Money is
              nothing, you&#x27;r everything.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DoctorCard;
