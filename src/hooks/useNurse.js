import React, { useEffect, useState } from 'react';

const useNurse = () => {
  const [nurse, setNurse] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/nurse`)
    .then(res => res.json())
    .then(data => setNurse(data))
  }, [])
  return [nurse, setNurse];
};

export default useNurse;