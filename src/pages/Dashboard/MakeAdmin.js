import React from 'react';
import useRole from '../../hooks/useRole';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';
import { Footer } from '../../shared/Footer/Footer';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MakeAdmin = () => {
    const [userInfo] = useAuthState(auth)
    const see = useRole(userInfo?.email);

    const { isLoading, error, data, refetch } = useQuery('alluser', () =>
        fetch('http://localhost:5000/api/allUsers').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'
    console.log(data)
    const handleMakeAdmin = (email) => {
        const url = `http://localhost:5000/api/allUsers/?email=${email}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ role: 'Admin' })
        })
            .then(res => res.json())
            .then(data => {
                toast('Status Updated')
                refetch()
            })
    }
    return (
        <div>
            <NavigationBar isHome={true} />
            <section className='md:mx-10 pt-40 pb-10'>
                <div className="overflow-x-auto" >
                    <table className="table table-zebra w-full bg-white">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elem, index) => <tr key={uuidv4}>
                                    <th key={uuidv4()}>{index + 1}</th>
                                    <td key={uuidv4()}>{elem?.name}</td>
                                    <td key={uuidv4()}>{elem?.email}</td>
                                    <td key={uuidv4()}>{elem?.role}</td>
                                    <td key={uuidv4()}>{elem?.role !== "Admin" ? <button onClick={() => handleMakeAdmin(elem?.email)}>Make Admin</button> : null}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MakeAdmin;