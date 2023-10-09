import React from 'react'

const Card = (props) => {
    const {name, description, btnText, imgSrc} = props

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imgSrc} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card