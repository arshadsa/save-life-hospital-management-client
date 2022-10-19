import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { async } from '@firebase/util';
export const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [userInfo] = useAuthState(auth);
  const [errorText, setErrorText] = useState('')
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
  // When user is login through email and password
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e?.target?.email?.value)
    console.log(e?.target?.password?.value)
    await signInWithEmailAndPassword(e?.target?.email?.value, e?.target?.password?.value)
    if (error) return
  }
  // When user in Login through google
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    if (errorGoogle) return
  }
  console.log("google error", errorGoogle)
  return (
    <div className='flex h-[80vh] items-center justify-center pt-52'>
      <img src="https://media.istockphoto.com/vectors/parents-visit-sick-son-in-bed-at-hospital-ward-vector-id1215582607?b=1&k=20&m=1215582607&s=170667a&w=0&h=ueFzXWP3WlCgZpyD_rZ8txBN6XFqrHwp6CK8w6FPb7E=" alt="" className='h-[67%] rounded-2xl' />
      <div className='app__login-form rounded-2xl shadow-2xl border-white border-2'>
        <form onSubmit={handleSubmit} className='w-[500px] flex flex-col justify-center items-center '>
          <p className=''>Name</p>
          <input type="text" name="name" id="name" placeholder='Enter your name' required />
          <p>Email</p>
          <input type="email" name="email" id="email" placeholder='Enter your email here' required />
          <p>Password</p>
          <input type="password" name="password" id="password" placeholder='Enter your password' required />
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
        <button className='w-40 block mx-auto' onClick={handleGoogleLogin}><FcGoogle className='inline-block' />Sign with Google</button>
        <br />
        {/* <button onClick={() => signOut(auth)}>Sign out</button> */}
      </div>
    </div>
  )
}
