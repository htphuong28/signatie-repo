import React from 'react'

const ItemCard = (props) => {
    const { imgSrc, imgTitle, imgDescription, imgBtn, onClick } = props




    const trimText = (text, count, insertDots) => {
        return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
    }




    return (
        <div onClick={onClick} className="card w-full h-full bg-base-100 shadow-xl image-full">
            <figure className='w-full h-full'><video src={imgSrc} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{imgTitle}</h2>
                <p>{trimText(imgDescription, 60, true)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-[100px] h-[30px] text-[13px]">{imgBtn}</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard