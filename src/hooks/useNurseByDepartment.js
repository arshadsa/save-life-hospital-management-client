import React, { useEffect, useState } from 'react';

const useNurseByDepartment = () => {
  const [nurseByDepartment, setNurseByDepartment] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/nurse/byDepartment`)
      .then((res) => res.json())
      .then((data) => {
        setNurseByDepartment(data);
      });
  }, []);

  return [nurseByDepartment];
};

export default useNurseByDepartment;