import React, { useEffect, useState } from 'react';

const useSpecialities = () => {
  const [specialities, setSpecialities] = useState([]);

  console.log(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialities`);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialities`)
    .then(res => res.json())
    .then(data => setSpecialities(data))      
  }, [])
  return [specialities, setSpecialities];
};

export default useSpecialities;