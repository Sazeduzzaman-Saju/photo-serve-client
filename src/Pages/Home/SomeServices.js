import React from 'react';
import { Link } from 'react-router-dom';

const SomeServices = ({ service }) => {
    const { _id, title, img } = service;
    return (

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-center">{title}</h2>
                </div>
                <Link to={`/services/${_id}`}><button className="text-2xl w-full text-center m-0 hover:text-violet-500">Book Now</button></Link>
            </div>
        </div>
    );
};

export default SomeServices;