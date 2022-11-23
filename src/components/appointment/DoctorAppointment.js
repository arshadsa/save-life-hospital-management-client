import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { Footer } from '../../shared/Footer/Footer';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const DoctorAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [userInfo, loading] = useAuthState(auth);
    useEffect(() => {

        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/hospitaldoctorsbooking/doctor?doctor=${userInfo?.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [userInfo?.email])
    if (loading === true) {
        return
    }
    return (<>
        <NavigationBar isHome={true} />
        <section className='md:mx-10 mt-[100] mb-8'>
            <h1>My Appointments: {appointments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Patient Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName
                                }</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.patient}</td>
                                <td className='text-center'>
                                    {(a.paymentStatus === "unpaid") && <p className='btn bg-blue-500 text-light-400'>Unpaid</p>}
                                    {(a.paymentStatus === "paid") && <Link to={`/videocall/${a._id}`} className="ml-12">
                                        <button className="btn btn-secondary">Start VideoCall</button>
                                    </Link>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
        <Footer />
    </>);
};

export default DoctorAppointment;