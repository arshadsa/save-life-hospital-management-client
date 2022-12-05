import React, { useEffect, useState } from "react";

const useSpecialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [specialitiesDef, setSpecialitiesDef] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/doctors/specialities`)
      .then((res) => res.json())
      .then((data) => {
        setSpecialities(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5001/doctors/specialitiesDef`)
      .then((res) => res.json())
      .then((data) => {
        console.log()
        setSpecialitiesDef(data);
      });
  }, []);

  return [specialities, specialitiesDef];


};

export default useSpecialities;
