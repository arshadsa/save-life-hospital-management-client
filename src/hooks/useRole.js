import React, { useEffect } from 'react';

const useRole = (email) => {
    const [role, setRole] = React.useState("")
    useEffect(() => {
        fetch(`http://localhost:5000/api/user/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data?.role)
            })
    }, [email])
    return role
};

export default useRole;