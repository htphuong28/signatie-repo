import React from 'react'

const LoadingPage = () => {
    return (
        <div className='w-screen h-full bg-slate-200'>
            <div className='items-center text-center h-full m-auto'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    )
}

export default LoadingPage