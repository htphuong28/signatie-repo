import React from 'react'
import ItemCard from '../../components/blog/ItemCard'

const DictionarySection = (props) => {
    const { name, data } = props

    return (
        <div className='w-full'>
            <h2 className='text-[20px] font-bold text-center m-5'>{name}</h2>

            <div className="grid grid-cols-3 grid-flow-row gap-4">
                {
                    data?.map((item, id) => {
                        
                            return (
                                <div key={id} className='h-[200px] w-[300px]' >
                                    <ItemCard imgSrc={item.videoURL} imgTitle={item.name} imgDescription={item.description} imgBtn='Learn later' />
                                </div>
                            )
                        
                    })
                }


            </div>
        </div>
    )
}

export default DictionarySection