import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

const Speciality = () => {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mt-[150px] container mx-auto">
      <h1 className="font-extrabold text-4xl">Please select a speciality</h1>
      <div className="mt-[50px] grid grid-cols-3 gap-6">
        {card.map((card) => (
          <DoctorCard card={card}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
