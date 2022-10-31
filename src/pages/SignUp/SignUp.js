import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState("");
    const [errorText, setErrorText] = useState("");
    const [userInfo, userLoading, userError] = useAuthState(auth);
    const [isGoogleLogin, setIsGoogleLogin] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            const msg = error?.code?.slice(5, error?.code?.length)
            setErrorText(msg)
        }
        if (errorGoogle) {
            const msg = errorGoogle?.code?.slice(5, errorGoogle?.code?.length)
            setErrorText(msg)
        }
    }, [error, errorGoogle])
    useEffect(() => {
        if (userInfo) {
            console.log("google user", userInfo?.email);
            fetch(`${process.env.REACT_APP_BASE_URL}/api/user/?email=${userInfo?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.text === 'No user Found') {
                        setIsGoogleLogin(true)
                    } else {
                        navigate('/')
                    }
                })
        }
    }, [userInfo, userGoogle])

    // Handle Sign up by user
    const handleSignUp = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(e?.target?.email?.value, e?.target?.password?.value);
        if (error) return
        if (loadingGoogle) return
        console.log("user", user)
        setUserName(e?.target?.name?.value);
        if (e.target.role[0].checked) {
            setRole('Doctor')
        } else {
            setRole('Patient')
        }
        if (userInfo) {
            navigate('/')
        }
    }
    // When user in Login through google
    const handleGoogleLogin = async () => {
        await signInWithGoogle();
        if (errorGoogle) return
        console.log("auth state info", userInfo?.email)
        console.log("user infor google", userGoogle);
        // if (userInfo) {
        //     console.log("google user", userInfo?.email);
        //     fetch(`${process.env.REACT_APP_BASE_URL}/api/user/?email=${userInfo?.email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             if (data?.text === 'No user Found') {
        //                 setIsGoogleLogin(true)
        //             } else {
        //                 navigate('/')
        //             }
        //         })
        // }
    }
    const handleRole = (e) => {
        e.preventDefault()
        let role = ''
        if (e.target.role[0].checked) {
            role = "Doctor"
        } else {
            role = "Patient"
        }
        const user = { "name": userInfo?.displayName, "email": userInfo?.email, "role": role }
        fetch("${process.env.REACT_APP_BASE_URL}/api/users", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                navigate('/')
            })
        console.log(userInfo)
    }
    return (
        <div>
            <div className='flex h-[80vh] items-center justify-center pt-52'>
                <img src="https://media.istockphoto.com/vectors/parents-visit-sick-son-in-bed-at-hospital-ward-vector-id1215582607?b=1&k=20&m=1215582607&s=170667a&w=0&h=ueFzXWP3WlCgZpyD_rZ8txBN6XFqrHwp6CK8w6FPb7E=" alt="" className='h-[67%] rounded-2xl lg:block hidden' />
                <div className='app__login-form rounded-2xl shadow-2xl border-white border-2'>
                    <form onSubmit={isGoogleLogin === false ? handleSignUp : handleRole} className='md:w-[500px] w-[90vw] flex flex-col justify-center items-center '>
                        {
                            isGoogleLogin === false ? <>
                                <p className=''>Name</p>
                                <input type="text" name="name" id="name" placeholder='Enter your name' required />
                                <p>Email</p>
                                <input type="email" name="email" id="email" placeholder='Enter your email here' required />
                                <p>Password</p>
                                <input type="password" name="password" id="password" placeholder='Enter your password' required />
                            </> : null
                        }
                        <p>Role</p>
                        <p className='flex justify-center items-center'>
                            <input className='w-5' type="radio" name="role" id="Doctor" required />
                            <label htmlFor="Doctor">Doctor</label>
                        </p>
                        <p className='flex justify-center items-center' >
                            <input className='w-5' type="radio" name="role" id="Patient" required />
                            <label htmlFor="Patient">Patient</label>
                        </p>
                        <input type="submit" value="Sign In" />

                        <small className='text-red-500'>{errorText}</small>
                    </form>
                    <Link to="/login" className='block mx-auto text-center text-blue-500'>Already have an account?</Link>
                    {

                        isGoogleLogin === false ? <button className='w-40 block mx-auto' onClick={handleGoogleLogin}><FcGoogle className='inline-block' />Sign with Google</button> : null
                    }
                    <br />
                    {/* <button onClick={() => signOut(auth)}>Sign out</button> */}
                </div>
            </div>
        </div>
    );
};
export default SignUp;
