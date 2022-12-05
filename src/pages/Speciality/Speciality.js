import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import useSpecialities from "../../hooks/useSpeciality";
const Speciality = () => {
  const [specialities, specialitiesDef] = useSpecialities();
  return (
    <>
      <div className="mt-[150px] container mx-auto">
        <h1 className="font-extrabold text-4xl text-center uppercase">
          Select a <span className="text-[#1b82e2]">(Speciality)</span> for you
        </h1>
        <div className="mt-[50px] grid md:grid-cols-3 gap-6 mx-auto justify-items-center sm:px-10">
          {specialities.map((speciality) => (
            <DoctorCard
              speciality={speciality}
              specialitiesDef={specialitiesDef}
            ></DoctorCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Speciality;
