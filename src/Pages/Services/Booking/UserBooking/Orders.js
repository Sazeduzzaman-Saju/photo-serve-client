import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ orders, handleDelete }) => {
    console.log(orders)
    const { _id, bookingId, orderName, price, img } = orders;
    return (
        <div className="card w-96 bg-base-100 hover:bg-sky-700 hover:backdrop-blur-sm shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body hover:backdrop-blur-sm shadow-xl">
                <h2 className="card-title">{orderName}</h2>
                <p>${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Remove</button>
                    <Link to={`/review/${bookingId}`}><button className="btn btn-primary">Review</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Orders;