import React from 'react'
import { useGetData } from '../../store/useGetData'
import BlogCard from '../../components/blog/BlogCard'
import ItemCard from '../../components/blog/ItemCard'
import Menu from '../../components/menu/Menu'
import Navbar from '../../components/navbar/Navbar'
import Searchbar from '../../components/searchbar/Searchbar'
import DictionarySection from './DictionarySection'

const Dictionary = () => {
    const {gestureData} = useGetData()

    const gestureAction = gestureData.filter(item => item.category ==='hành động')
    const gestureEmotion = gestureData.filter(item => item.category ==='cảm xúc')
    const gestureFamily = gestureData.filter(item => item.category === 'gia đình')

  return (
    <div>
        <Navbar/>
       <h1 className='text-center m-3'>Dictionary</h1>

        <div className='items-center'>
        <DictionarySection name='HÀNH ĐỘNG' data={gestureAction} />
        <DictionarySection name='CẢM XÚC' data={gestureEmotion} />
        <DictionarySection name='GIA ĐÌNH' data={gestureEmotion} />

        </div>
        

    </div>
  )
}

export default Dictionary