import React, { useState } from 'react'
import Menu from '../menu/Menu'
import ModalSearch from '../modal/ModalSearch'

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    console.log(isModalOpen)

  return (
    <div>
        <div className="navbar bg-base-100 flex justify-between">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className='m'>
                <Menu/>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onClick={()=> setIsModalOpen(!isModalOpen)}/>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <ModalSearch modalState={isModalOpen}>
            <div
              aria-label="modal"
              className="justify-items-center items-center fixed z-10 overflow-y-auto top-0 w-full h-screen left-0"
              
            >
            <div className="fixed inset-0 transition-opacity">
              <div
                onClick={()=> setIsModalOpen(!isModalOpen)}
                className="absolute inset-0 bg-gray-900 opacity-75"
              />
            </div>
              <div className="flex justify-center m-auto relative w-full max-w-lg p-10 bg-white rounded-lg">
                <div 
                onClick={()=>setIsModalOpen(!isModalOpen)}
                className="absolute cursor-pointer top-5 right-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                    <h2>Tìm kiếm từ vựng</h2>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
              </div>
            </div>
        </ModalSearch>

    </div>
  )
}

export default Navbar