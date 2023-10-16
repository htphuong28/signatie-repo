import React from 'react'
import { FaReadme } from 'react-icons/fa' 
import {AiOutlineEdit} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Menu = () => {
    const navigate = useNavigate()

  return (
    <div>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
            <li>
                <button onClick={(e)=>navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Trang chủ
                </button>
            </li>
            <li>
                <button onClick={(e) => navigate('/course')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Khóa học
                </button>
            </li>
            <li>
                <button onClick={(e)=> navigate('/dictionary')}>
                <FaReadme className='menu-icons'/>
                Từ điển
                </button>
            </li>
            <li>
                <button>
                <AiOutlineEdit className='menu-icons'/>
                Bài viết
                </button>
            </li>
            <li>
                <button>
                Về tôi
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Menu