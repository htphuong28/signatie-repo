import React from 'react'
import Banner from '../../assets/img/Banner.png'

const Hero = () => {
  return (
    <div>
        <div className="hero h-screen w-screen bg-name" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Ngôn ngữ của đôi tay</h1>
                <p className="mb-5">Signatie là một dự án cá nhân, hướng tới mục tiêu lan tỏa ngôn ngữ đến với tất cả mọi người</p>
                <button className="btn btn-primary">Tìm hiểu thêm</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero