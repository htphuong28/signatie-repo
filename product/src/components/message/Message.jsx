import React from 'react'
import { BsMessenger } from 'react-icons/bs'
import usePopup from '../../store/usePopUp'

const Message = () => {
    const {show, setShow} = usePopup()

  return (
        <button 
            onClick={() => setShow(true)}
        className='h-[50px] w-[50px] fixed top-1/3 right-4 animate-bounce rounded-full bg-blue-600 justify-center items-center flex flex-1'>
            <BsMessenger className='h-5 w-5 text-white' />
        </button>
  )
}

export default Message