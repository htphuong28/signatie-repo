import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { useGetData } from '../../store/useGetData'
import ItemCard from '../../components/blog/ItemCard'


const DetailGesture = () => {
    const { gestureData } = useGetData()

    const location = useLocation()

    const { category, name, description, videoURL } = location?.state

    const listSuggestion = gestureData.filter(i => i.category === category).slice(0, 5)




    return (
        <div className='w-screen'>
            <Navbar />
            <div className='flex flex-row justify-between mx-10'>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>

                <video src={videoURL} className='w-2/3' controls></video>

            </div>
            <div>
                <h2 className='font-bold text-[20px] m-5'>Tu vung lien quan</h2>
                <div className="grid grid-cols-5 grid-flow-row gap-4">
                    {
                        listSuggestion?.map((item, id) => {

                            return (
                                <div key={id} className='h-[200px] w-[300px]' >
                                    <ItemCard imgSrc={item.videoURL} imgTitle={item.name} imgDescription={item.description} imgBtn='Learn later'
                                        onClick={()=> alert('hello')}
                                    />
                                </div>
                            )

                        })
                    }


                </div>
            </div>

        </div>
    )
}

export default DetailGesture