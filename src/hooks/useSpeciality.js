import React, { useEffect, useState } from "react";

const useSpecialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [specialitiesDef, setSpecialitiesDef] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:5001/doctors/specialities`)
=======
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialities`)
>>>>>>> e7a8f3fb5446424676e3fa984ca5bfde391bd784
      .then((res) => res.json())
      .then((data) => {
        setSpecialities(data);
      });
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:5001/doctors/specialitiesDef`)
=======
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialitiesDef`)
>>>>>>> e7a8f3fb5446424676e3fa984ca5bfde391bd784
      .then((res) => res.json())
      .then((data) => {
        console.log()
        setSpecialitiesDef(data);
      });
  }, []);

  return [specialities, specialitiesDef];


};

export default useSpecialities;
