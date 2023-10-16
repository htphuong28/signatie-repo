import React, { useState, useEffect } from 'react'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    deleteField,
    updateDoc,
    onSnapshot,
  } from "firebase/firestore";
import { db } from '../../firebase/firebase.config';
import Slider from '../slider/Slider';
import { useGetData } from '../../store/useGetData';

const GestureSlider = () => {
    const { setGestureData, gestureData } = useGetData()
   
    const [isLoading, setIsLoading] = useState(false)

    const gesturesRef = collection(db, "SL_words")

    const getGestures = async ()=>{
        setIsLoading(true)
        const gesturesDocs = await getDocs(gesturesRef)
        const gesturesData = gesturesDocs.docs.map((doc)=>doc.data())
        const collectionId = gesturesDocs.docs.map((doc)=>doc.id)
        const gesturesDataWithId = gesturesData.map(
            (item,id) =>{
                return{
                    ...item,
                    id: collectionId[id]
                }
            }
        )

        if(gesturesDataWithId.length >0) {
            setIsLoading(false)
            setGestureData(gesturesDataWithId)
            
        } else {
            setIsLoading(false)
            setGestureData([])
        }
    }

    useEffect(() => {
      
      if(gestureData.length>=20) return null
      getGestures()
    }, [])
    

  return (
    <div>
        <Slider slides={gestureData ?? []}/>
    </div>
  )
}

export default GestureSlider