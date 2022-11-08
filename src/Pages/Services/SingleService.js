import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleService = ({ service }) => {
    const { loading } = useContext(AuthContext);
    const { title, price, description, img } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20 mb-20">
            {loading ?
                <>
                    <p>Loading...</p>
                </>
                :
                <>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default SingleService;