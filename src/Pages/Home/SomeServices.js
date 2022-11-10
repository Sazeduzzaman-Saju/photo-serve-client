import React from 'react';
import { Link } from 'react-router-dom';

const SomeServices = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 hover:bg-sky-700 hover:backdrop-blur-sm shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body hover:backdrop-blur-sm shadow-xl">
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SomeServices;