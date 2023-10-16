import React from 'react'
import ItemCard from '../../components/blog/ItemCard'
import { useNavigate } from 'react-router-dom'

const DictionarySection = (props) => {
    const { name, data } = props
    const navigate = useNavigate()
    return (
        <div className=' flex flex-1 flex-col'>
            <h2 className='text-[20px] font-bold text-center m-5'>{name}</h2>

            <div className="grid grid-cols-3 grid-flow-row gap-4 w-[90%] mx-auto">
                {
                    data?.map((item, id) => {

                        return (
                            <div key={id} className='h-[200px] w-[300px]' >
                                <ItemCard imgSrc={item.videoURL} imgTitle={item.name} imgDescription={item.description} imgBtn='Learn later'
                                    onClick={
                                        () => navigate('/detail', {
                                            state: { ...item }
                                        })
                                    } />
                            </div>
                        )

                    })
                }


            </div>
        </div>
    )
}

export default DictionarySection