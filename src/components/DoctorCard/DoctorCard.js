import React from "react";
import { Link } from "react-router-dom";
import operationimage from "../../assets/Features-images/img7.svg";


const DoctorCard = ({ speciality, specialitiesDef }) => {
  const def = specialitiesDef.filter(findSpecialityDef)
  function findSpecialityDef(specialitiesDef) {
    return specialitiesDef.short === speciality.replace(/\s+/g, '')
  }

  function getImg() {
    try {
      const image = require(`../../assets/Speciality-img/${speciality.replace(/\s+/g, '')}.png`)
      return image;
    } catch (e) {
      const image = require(`../../assets/Speciality-img/child.png`)
      return image;
    }
  }

  return (
    <div>
      <Link to={`/doctors/${speciality.replace(/\s+/g, '')}`}>
        <div class="cursor-pointer py-4 px-[10px] flex max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="w-1/3 bg-cover bg-landscape flex align-items-center">
            <img className="w-full p-4" src={getImg()} alt="" />
          </div>
          <div class="w-2/3 p-4 mb-2">
            <h1 class="text-[#1b82e2] font-bold text-xl">{speciality}</h1>
            <i class="fa-solid fa-arrow-right text-[#1b82e2] font-bold text-xl ml-56"></i>
          </div>

        </div>

      </Link>
    </div>
  );
};

export default DoctorCard;
