import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleService = ({ service }) => {
    const { loading } = useContext(AuthContext);
    const { _id, title, price, description, img } = service;
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
                        <p>{description.slice(0, 80)}...</p>
                        <div className="card-actions justify-end">
                            <Link to={`/services/${_id}`}><button className="btn">Book Now</button></Link>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default SingleService;