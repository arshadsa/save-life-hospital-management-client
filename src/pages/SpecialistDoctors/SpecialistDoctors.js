import React from "react";
import DoctorListItem from "../../components/DoctorListItem/DoctorListItem";
import useDoctor from "../../hooks/useDoctors";
import { useParams } from "react-router-dom";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const SpecialistDoctors = () => {
  const { speciality } = useParams();
  const [doctor, setDoctor] = useDoctor();
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[200px]">
        <div class="container flex flex-col mx-auto w-full items-center justify-center">
          <ul class="flex flex-col">
            {doctor
              .filter((doctor) => {
                const specialization = doctor.specialization.map(
                  (specialization) => specialization.replace(/\s+/g, "")
                );
                if (specialization.includes(speciality) === true) {
                  return doctor;
                }
              })
              .map((doctor) => (
                <DoctorListItem
                  doctor={doctor}
                ></DoctorListItem>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SpecialistDoctors;
