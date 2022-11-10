import React from 'react';


const ServicesItems = ({ service, handleDelete }) => {
    const { _id, orderName, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 hover:bg-sky-700 hover:backdrop-blur-sm shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body hover:backdrop-blur-sm shadow-xl">
                <h2 className="card-title">{orderName}</h2>
                <p>${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;