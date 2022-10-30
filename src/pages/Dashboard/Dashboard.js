import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useRole from '../../hooks/useRole';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Dashboard = () => {
    const [userInfo, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) return
    }, [userInfo?.email])
    const role = useRole(userInfo?.email);
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button fixed bottom-4 right-0"><BsFillArrowLeftCircleFill />Open</label>
            </div>
            <div className="drawer-side">
<<<<<<< HEAD
                <label htmlFor="my-drawer-2" className="drawer-overlay btn fixed bottom-4 left-[1151px] text-green-400"><BsFillArrowRightCircleFill className='text-white' />Close</label>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button fixed bottom-4 right-0"><BsFillArrowLeftCircleFill />Open</label> */}
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
=======
                
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                
                <ul className="menu p-4 overflow-y-auto w-60 mt-40 bg-base-100 text-xl  text-base-content">
                    <button className='btn btn-primary'>Go to Home</button>
>>>>>>> anik
                    {/* <!-- Sidebar content here --> */}
                    {
                        role === "Admin" ? <><li>
                            <Link to={`/dashboard/makeadmin`} className>Make Admin</Link>
                            <Link to={`/dashboard/adddoctor`}>Add Doctor</Link>
<<<<<<< HEAD
                            {/* <Link to={`/dashboard/myappointments`}>My Appointment</Link> */}
                        </li>
=======
                            <Link to={`/dashboard/addambulance`}>Add Ambulance</Link>
                            <Link to={`/dashboard/addnurse`}>Add Nurse</Link>
                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link>
                             <Link to={`/dashboard/myappointments`}>My Appointment</Link> 
                            
                            
                            </li>
>>>>>>> anik
                        </> : null
                    }
                    {/* Do the code here */}
                    {
                        role === "Doctor" ? <><li>
                           
                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link></li>
                           

                        </> : null
                    }
                    {
                        role === "Patient" ? <><li>

                            <Link to={`/dashboard/myappointments`}>My Appointment</Link>
                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link></li>

                        </> : null
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;