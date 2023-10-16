import React, { useEffect, useState } from 'react'
import Menu from '../menu/Menu'
import ModalSearch from '../modal/ModalSearch'
import { useNavigate } from 'react-router-dom'
import {
  signOut
} from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { useAccount } from '../../store/useAccount';
import { useGetData } from '../../store/useGetData';

const Navbar = () => {
  const { setUserInfo, userInfo} = useAccount()
  const { gestureData } = useGetData()

  const [ searchValue, setSearchValue ] = useState('')

  const [ searchResult, setSearchResult ] = useState([])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    const searchFilter = gestureData.filter( (item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase())
    } )

    console.log(e.target.value)

    setSearchResult(searchFilter)
  }

  const navigate = useNavigate()
  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      const userSignOut = await signOut(auth)
      alert('Da dang xuat')
      setUserInfo({
        displayName: '',
        email: '',
        password: '',
        profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo4XV_JS6I3DKd2ED8-MXbUBOu1tZ7qr_0g&usqp=CAU',
        accessToken: '',
        active: false,
        uid: ''
      })
      navigate('/login')
      
    } catch (error) {
      alert(error)
    }

  }

  
  useEffect(() => {
    if(searchValue==='' || !searchValue) {
      setSearchResult([])
    }
  }, [searchValue])
  

  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Signatie</a>
        </div>
        <div className='m'>
          <Menu />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-slate-200 px-2 mx-2" onClick={() => setIsModalOpen(!isModalOpen)} />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userInfo.profileImageUrl} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li><button>Settings</button></li>
              <li><button
                onClick={(e) => {
                  handleSignOut(e)
                  
                }
                }
              >Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ModalSearch modalState={isModalOpen}>
      <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  onClick={()=> setIsModalOpen(!isModalOpen)}
                  className="absolute inset-0 bg-gray-900 opacity-75"
                />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div
                className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <label>Tìm kiếm từ vựng</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 mt-2 mb-3 rounded-lg outline-none px-5 flex flex-1"
                    placeholder="Nhập từ"
                    value={searchValue}
                    onChange={(e) => {
                      handleSearch(e)
                      
                    }}
                    
                  />

                  {searchResult.length >0 ? (  
                    <div>
                      <label>Result</label>
                      <div className='w-full h-[350px] overflow-y-auto'>
                        {searchResult.map(
                          (item, index)=>{ return (
                            <button
                              onClick={()=> {
                                setIsModalOpen(!isModalOpen)
                                navigate('/detail', {
                                  state : {...item}
                                })
                              }}
                            key={index} 
                            className='bg-slate-200 flex flex-1 flex-col justify-start items-start gap-y-2 rounded-md my-2 w-full text-start'>
                              <div className='flex flex-col mt-2 px-2 '>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                                
                              </div>
                            </button>
                          ) }
                        )}

                      </div>
                    </div>
                  ):( 
                    <div>Khong tim thay ket qua</div>
                  )
                } 
                  
                  
                  
                </div>
                
              </div>
            </div>
          </div>
      </ModalSearch>

    </div>
  )
}

export default Navbar