import React from 'react'
import Menu from '../../components/menu/Menu'
import CustomSlider from '../../components/slider/Slider'
import Navbar from '../../components/navbar/Navbar'
import Blog from '../../components/blog/Blog'
import Quote from '../../components/quote/Quote'
import ChatPopup from '../../components/chat-popup/ChatPopup'
import Message from '../../components/message/Message'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Blog/>
        <Quote/>
        <ChatPopup/>
        <Message />
        
    </div>
  )
}

export default Homepage