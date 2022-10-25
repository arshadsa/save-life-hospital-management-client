import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import useSpecialities from "../../hooks/useSpeciality";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const Speciality = () => {
  const [specialities, specialitiesDef] = useSpecialities();
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <h1 className="font-extrabold text-4xl text-center">
          Select a <span className="text-[#1b82e2]">Speciality</span>
        </h1>
        <div className="mt-[50px] grid grid-cols-3 gap-6">
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
