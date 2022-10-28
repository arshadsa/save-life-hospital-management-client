import React, { useEffect, useState } from 'react';
import Logo from "../../assets/Logo-removed BG.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useRole from '../../hooks/useRole';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
export const NavigationBar = ({ isHome }) => {
    const navigate = useNavigate()
    const [userInfo, loading] = useAuthState(auth);
    const role = useRole(userInfo?.email)
    if (loading) return
    const handleLogout = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <div className={`${isHome === true ? 'md:w-[80vw] md:rounded-full md:absolute md:top-[6%] md:left-[10%] ' : "w-screen "}navbar w-screen text-black bg-slate-100  mx-auto z-50 h-[60px]`} >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-white">
                        <li tabIndex={0}>
                            <Link to="/" className="justify-between">
                                Home
                            </Link>
                        </li>
                        <li tabIndex={1}>
                            <a className="justify-between">
                                Doctor
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={2}>
                            <a className="justify-between">
                                Patient
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                <li><a>Hello</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={3}>
                            <a className="justify-between">
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={4}>
                            <a className="justify-between">
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={5}>
                            <a className="justify-between">
                                Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                {
                                    role === "Admin" ? <li><Link to="/makeAdmin">Make Admin</Link></li> : null
                                }
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className=""><img src={Logo} alt="logo" className='w-1/2' /></a>
            </div>
            <div className="navbar-center hidden lg:flex z-50">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <Link to="/" className="justify-between">
                            Home
                            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                        </Link>
                    </li>
                    <li tabIndex={1}>
                        <Link to='/doctor' className="justify-between">
                            Specialties    
                        </Link>
                    </li>
                    <li tabIndex={1}>
                        <Link to='/blog' className="justify-between">
                            Blog    
                        </Link>
                    </li>
                
                    <li tabIndex={5}>
                        <a className="justify-between">
                            Dashboard
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                            {
                                role === "Admin" ? <li><Link to="/makeAdmin">Make Admin</Link></li> : null
                            }
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !userInfo?.email ? <>
                        <button className='rounded-3xl block w-32 mx-3 h-10 hover:border-sky-500 text-white hover:text-black border-[2px] bg-primary hover:bg-white hover:transition hover:delay-150 hover:backdrop-brightness-75'><Link to={'/login'}>Login</Link></button>
                        <button className='rounded-3xl block w-32 mx-3 h-10 border-blue border-[2px] hover:bg-primary hover:border-none hover:transition hover:delay-150 hover:backdrop-brightness-75 hover:text-white border-black'><Link to={'/signup'}>Signup</Link></button>
                    </> : <button className='rounded-3xl block w-32 mx-3 h-10 hover:border-sky-500 text-white hover:text-black border-[2px] bg-primary hover:bg-white hover:transition hover:delay-150 hover:backdrop-brightness-75' onClick={handleLogout}>Logout</button>
                }

            </div>
        </div>
    );
};
