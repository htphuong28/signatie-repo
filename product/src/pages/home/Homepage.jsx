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

const Homepage = () => {

  const {userInfo} = useAccount()
  


  return (
    <div>
        <Navbar/>
        <Hero/>
        <Blog/>
        <Quote/>
        <ChatPopup/>
        <Message />
        <GestureSlider/>
    </div>
  )
}

export default Homepage