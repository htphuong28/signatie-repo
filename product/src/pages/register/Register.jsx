import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.config'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [signUpInfo, setSignUpInfo] = useState(
    {
      email: '',
      password: '',
      reEnterPassword: ''
    }
  )

  const [isShowPass, setShowPass] = useState(
    {
      password: false,
      reEnterPassword: false,
    }
  )

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
      alert("Dang ky thanh cong")
      console.log(user)
      navigate('/login')
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
          <div 
          className="h-14 w-full flex flex-1 flex-row items-center justify-between 
          border rounded-lg outline-none border-slate-200 focus:border-blue-500 transition-all bg-transparent" aria-label="input-password-toggle">
            
              <input
                value={signUpInfo.password}
                id="password"
                type={(isShowPass.password ? "text" : "password")}
                name="password"
                className=" h-14 flex flex-1 px-4 border-0 outline-none"
                placeholder="Enter your password"
                required
                onChange={(e) => setSignUpInfo({
                  ...signUpInfo,
                  password: e.target.value,
                })}
              />
              <button 
              className='flex justify-center items-center cursor-pointer text-slate-400 mx-2'
              onClick={(e) => 
                {
                  e.preventDefault()
                setShowPass({
                ...isShowPass,
                password: !isShowPass.password
              })}
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
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Re-enter Password
          </label>
          <div 
          className="h-14 w-full flex flex-1 flex-row items-center justify-between 
          border rounded-lg outline-none border-slate-200 focus:border-blue-500 transition-all bg-transparent" aria-label="input-password-toggle">
            
              <input
                value={signUpInfo.reEnterPassword}
                id="repassword"
                type={(isShowPass.reEnterPassword ? "text" : "password")}
                name="repassword"
                className="h-14 flex flex-1 px-4 "
                placeholder="Re-enter your password"
                required
                onChange={(e) => setSignUpInfo({
                  ...signUpInfo,
                  reEnterPassword: e.target.value,
                })}
              />
              <button 
              className='flex justify-center items-center cursor-pointer text-slate-400 mx-2'
              onClick={(e) => 
                {
                  e.preventDefault()
                setShowPass({
                ...isShowPass,
                reEnterPassword: !isShowPass.reEnterPassword
              })}
            }
              >
              <div             
              >
                {(isShowPass.reEnterPassword ?
                  <span>
                    <AiOutlineEye />
                  </span> : <span> <AiOutlineEyeInvisible /> </span>
                )}


              </div>
              </button>
              
            
          </div>
          
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <button  
          className="text-blue-500 underline"
          onClick={()=>navigate('/login')}
          >
            Sign In
          </button>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSignUp(e)}
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px] my-1"
        >
          Create an account
        </button>
        
      </form>
    </div>
  )
}


export default Register