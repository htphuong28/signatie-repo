import React from 'react'
import Menu from '../../components/menu/Menu'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CourseCard from '../../components/card/CourseCard'

const CourseAll = () => {
    

  return (
    <div>
        <Navbar/>
        <h1 className='text-center'>Khóa học</h1>
        <CourseCard name='Co ban' imageUrl='https://images.pexels.com/photos/7516355/pexels-photo-7516355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' description = 'Khoa hoc co ban' btntext='bat dau'/>
        <Footer/>
    </div>
  )
}

export default CourseAll