import React from "react";
import DoctorListItem from "../../components/DoctorListItem/DoctorListItem";
import doctorSampleImage from "../../assets/Doctorsdamyp/docOne.jpg";
import useDoctor from "../../hooks/useDoctors";

const AllDoctors = () => {
  const [doctor, setDoctor] = useDoctor();

  return (
    <div className="mt-[200px]">
      <div class="container flex flex-col mx-auto w-full items-center justify-center">
        <ul class="flex flex-col">
          {doctor.map((doctor) => (
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

export default AllDoctors;
