import React from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
  } from "firebase/auth";

  import { auth } from '../../firebase/firebase.config'


const Login = () => {

    const handleSignIn = async (e) => {
        e.preventDefault()

        try {
           const userCredential = signInWithPopup 
        } catch (error) {
            alert(error)
        }
    }
    
  return (
    <div>
        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
          aria-label="signin-form"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Sign In</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label htmlFor="email" className="text-sm font-medium cursor-pointer">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
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
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          >
            Create an account
          </button>
        </form>
    </div>
  )
}

export default Login