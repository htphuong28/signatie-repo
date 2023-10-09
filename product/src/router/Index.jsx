import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from '../pages/home/Homepage'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import PageNotFound from '../pages/notfound/NotFound'
import { useAccount } from '../store/useAccount'
import { useNavigate } from 'react-router-dom'
import Dictionary from '../pages/dictionary/Dictionary'
import CourseAll from '../pages/course/CourseAll'
import DetailGesture from '../pages/detailGesture/DetailGesture'

const Router = () => {
  const navigate = useNavigate()
  const {userInfo} = useAccount()
  const accessToken = userInfo.accessToken
  console.log(accessToken, 'accesstoken')
  const routes = [
    {
      path: '/',
      element: accessToken!==''? <Homepage />: <Login />,
      children: [
        {
          path: '',
          element: <div></div>,
        },
        {
          path: '',
          element: <div></div>
        }
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: 'dictionary',
      element: <Dictionary/>
    }
    , {
      path: 'course',
      element: <CourseAll/>
    },
    {
      path: 'detail',
      element: <DetailGesture/>
    }

  ]


  return useRoutes(routes)

}

export default Router