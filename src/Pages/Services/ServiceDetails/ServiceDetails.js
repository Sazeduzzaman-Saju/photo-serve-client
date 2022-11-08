import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, title, price, img, description } = useLoaderData({});
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-20 mb-20">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img} alt="" className="object-contain " />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">{title}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            {description}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to={`/booking/${_id}`}>
                                <button className='btn'>Book Now</button>
                            </Link>
                            <Link to={'/services'}>
                                <button className='btn'>Back Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    );
};

export default ServiceDetails;