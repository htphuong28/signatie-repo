import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.config'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";


const Register = () => {

  const [signUpInfo, setSignUpInfo] = useState(
    {
      email: '',
      password: '',
      reEnterPassword: ''
    }
  )

  const [isShowPass, setShowPass] = useState(0)

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (
      signUpInfo.password === "" ||
      signUpInfo.email === "" ||
      signUpInfo.password != signUpInfo.reEnterPassword ||
      signUpInfo.password?.length < 6
    ) {
      alert("Vui long kiem tra lai email va mat khau")
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpInfo.email,
        signUpInfo.password
      )
      const user = userCredential.user
      alert("Dang nhap thanh cong")
      console.log(user)
    } catch (error) {
      alert(error)
    }
  }

  const handleSignUpWithGoogle = async (e) => {
    e.preventDefault()
    try {
      const provider = new GoogleAuthProvider
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-blue-400'>
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            value={signUpInfo.email}
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
            onChange={(e) => setSignUpInfo({
              ...signUpInfo,
              email: e.target.value,
            })}
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <div className="w-full" aria-label="input-password-toggle">
            <div className="relative w-full">
              <input
                value={signUpInfo.password}
                id="password"
                type={(isShowPass ? "text" : "password")}
                name="password"
                className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
                placeholder="Enter your password"
                required
                onChange={(e) => setSignUpInfo({
                  ...signUpInfo,
                  password: e.target.value,
                })}
              />
              <span className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4"
                onClick={() => setShowPass(!isShowPass)}
              >
                {(isShowPass ?
                  <span>
                    <AiOutlineEye />
                  </span> : <span> <AiOutlineEyeInvisible /> </span>
                )}


              </span>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Re-enter Password
          </label>
          <input
            id="repassword"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500 underline">
            Sign In
          </a>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSignUp(e)}
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px] my-1"
        >
          Create an account
        </button>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[40px] my-1"
          onClick={(e) => handleSignUpWithGoogle(e)}
        >
          Register with Google
        </button>
      </form>
    </div>
  )
}


export default Register