import React, { useEffect, useState } from 'react';

const useStaffs = () => {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/staff`)
      .then(res => res.json())
      .then(data => setStaff(data))
  }, [])
  return [staff, setStaff];
};

export default useStaffs;