import React from 'react'

const CourseCard = (props) => {
    const {name, description, imageUrl, btntext} = props

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{btntext}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard