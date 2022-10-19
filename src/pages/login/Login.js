import React, { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
export const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [errorText, setErrorText] = useState('')
  useEffect(() => {

  }, [errorText])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e?.target?.email?.value)
    console.log(e?.target?.password?.value)
    signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
    if (error) {
      setErrorText(Error);
      return
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <input type="submit" value="Sign In" />
      </form>
      <small className='text-red-500'>{errorText}</small>

    </div>
  )
}
