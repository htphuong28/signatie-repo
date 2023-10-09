import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


import { auth } from '../../firebase/firebase.config'
import { useAccount } from '../../store/useAccount';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const { setUserInfo } = useAccount()

  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })



  const handleSignIn = async (e) => {
    e.preventDefault()
    if (inputValue.email.length === '' || inputValue.email.length < 10 || inputValue.password === '') alert("Email hoac password khong hop le")

    try {
      const userCredential = await signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
      const user = userCredential.user

      if (user) {
        setUserInfo(user)
        navigate('/')
      }


    } catch (error) {
      alert(error)
    }
  }

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault()
    try {
      const provider = new GoogleAuthProvider
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      if (user) {
        setUserInfo(user)
        navigate('/')
      }

    } catch (error) {
      console.log(error)
    }
  }

  const [isShowPass, setShowPass] = useState(false)




  return (
    <div className='flex flex-1 w-full h-screen bg-blue-300'>
      <div
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow m-auto"
        aria-label="signin-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign In</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            value={inputValue.email}
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
            onChange={(e) => setInputValue({
              ...inputValue,
              email: e.target.value
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

          <div 
          className="h-14 w-full flex flex-1 flex-row items-center justify-between 
          border rounded-lg outline-none border-slate-200 focus:border-blue-500 transition-all bg-transparent" aria-label="input-password-toggle">
            
          <input
            value={inputValue.password}
            id="password"
            type={ isShowPass? "text":"password"}
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
            onChange={(e) => setInputValue({
              ...inputValue,
              password: e.target.value
            })}
          />
          <button 
              className='flex justify-center items-center cursor-pointer text-slate-400 mx-2'
              onClick={(e) => 
                {
                  e.preventDefault()
                setShowPass(!isShowPass)
              }
            }
              >
              <div             
              >
                {(isShowPass.password ?
                  <span>
                    <AiOutlineEye />
                  </span> : <span> <AiOutlineEyeInvisible /> </span>
                )}


              </div>
              </button>
              </div>
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Create new account</p>
          <button
            className="text-blue-500 underline ml-2 hover:text-red-600"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>
        <button
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={(e) => handleSignIn(e)}
        >
          Sign in
        </button>
        <button
          className="inline-flex w-full items-center justify-center mt-2 px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[60px]"
          onClick={(e) => handleSignInWithGoogle(e)}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login