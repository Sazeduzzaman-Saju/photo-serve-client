import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-4 max-w-screen-xl mx-auto'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;