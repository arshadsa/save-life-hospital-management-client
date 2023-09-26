import React, { useEffect } from 'react';

const useRole = (email) => {
    const [role, setRole] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/api/user/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
                    setRole(data?.role)
                })
        }
    }, [email])
    if (isLoading === true) {
        return null
    } else {
        return role
    }

};

export default useRole;