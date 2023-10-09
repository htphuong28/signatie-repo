import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Quote = () => {
    const quoteURL = `https://api.quotable.io/random`
    const [ todayQuote, setTodayQuote ] = useState('')

    const getQuote = async ()=> {
        const quoteResponse = await axios.get(quoteURL)
        setTodayQuote(quoteResponse?.data)
    }

    useEffect(() => {
      getQuote()
    }, [])
    

  return (
    <div className='w-full items-center'>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-3">
        <div className="card-body">
            <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </div>
            <p>{todayQuote.content}</p>
        </div>
        </div>
    </div>
  )
}

export default Quote