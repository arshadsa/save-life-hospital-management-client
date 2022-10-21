import React, { useEffect } from "react";
import DoctorListItem from "../../components/DoctorListItem/DoctorListItem";
import doctorSampleImage from "../../assets/Doctorsdamyp/docOne.jpg";
import useDoctor from "../../hooks/useDoctors";
import { useParams } from "react-router-dom";

const SpecialistDoctors = () => {
  const { speciality } = useParams();
  const [doctor, setDoctor] = useDoctor();

  return (
    <div className="mt-[200px]">
      <div class="container flex flex-col mx-auto w-full items-center justify-center">
        <ul class="flex flex-col">
          {doctor.filter(doctor => doctor.speciality === speciality).map((doctor) => (
            <DoctorListItem
              doctor={doctor}
              img={doctorSampleImage}
            ></DoctorListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialistDoctors;
