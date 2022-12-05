import React, { useEffect } from 'react';

const useRole = (email) => {
    const [role, setRole] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    useEffect(() => {
        if (email) {
<<<<<<< HEAD
            fetch(`http://localhost:5001/api/user/?email=${email}`)
=======
            fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/user/?email=${email}`)
>>>>>>> e7a8f3fb5446424676e3fa984ca5bfde391bd784
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