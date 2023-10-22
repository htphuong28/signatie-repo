import React from 'react'
import Menu from '../../components/menu/Menu'
import CustomSlider from '../../components/slider/Slider'
import Navbar from '../../components/navbar/Navbar'
import Blog from '../../components/blog/Blog'
import Quote from '../../components/quote/Quote'
import ChatPopup from '../../components/chat-popup/ChatPopup'
import Message from '../../components/message/Message'
import Slider from '../../components/slider/Slider'
import GestureSlider from '../../components/gesture/GestureSlider'
import { useAccount } from '../../store/useAccount'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/form/ContactForm'


const Homepage = () => {

  const { userInfo } = useAccount()



  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <div className="flex flex-wrap -mx-4 my-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Sứ mệnh
              </h2>
              <p className="text-base text-body-color">
                The Deaf in Vietnam still have difficulty in communicating, while many Vietnamese find interest in exploring sign language but struggle to find a decent source for learning. Therefore, we aim to:
              </p>
            </div>
          </div>

          <div className='flex flex-1 flex-row w-screen'>
            <div className='items-center flex flex-1 flex-col mx-3'>
              <div className='drop-shadow-2xl m-2 w-3/4 hover:scale-110 transition ease-in-out duration-500 transform'>
                <img className="mask mask-squircle" src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>

              <caption className='w-3/4'>Help Vietnamese people access Vietnamese Sign Language</caption>
            </div>
            <div className='items-center flex flex-1 flex-col mx-3'>
              <div className='drop-shadow-2xl m-2 w-3/4 hover:scale-110 transition ease-in-out duration-500 transform '>
                <img className="mask mask-squircle " src="https://images.pexels.com/photos/6321925/pexels-photo-6321925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>

              <caption className='w-3/4'>Help hearing people in their journey of becomming an interpreter</caption>
            </div>
            <div className='items-center flex flex-1 flex-col mx-3'>
              <div className='drop-shadow-2xl m-2 w-3/4 hover:scale-110 transition ease-in-out duration-500 transform'>
                <img className="mask mask-squircle" src="https://images.pexels.com/photos/6321925/pexels-photo-6321925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <caption className='w-3/4'>Help hearing people in their journey of becomming an interpreter</caption>
            </div>
          </div>
        </div>


      </div>
      <Blog />
      {/* <Quote /> */}
      <ChatPopup />
      <Message />
      <GestureSlider />
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default Homepage