import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import MySingleService from './MySingleService';
import useWebTitle from '../../../hooks/useWebTitle/useWebtitle';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://photo-serve-server.vercel.app/specific-data?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Confirm Delete This Order')
        if (proceed) {
            fetch(`https://photo-serve-server.vercel.app/user-services/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Delete Successfully')
                        const available = services.filter(order => order._id !== id)
                        setServices(available);
                    }
                })
                .catch(error => console.error(error))
        }
    }

    useWebTitle('My Services');
    return (

        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">My Booking
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">We Are Service Provider!</p>
                        <div>
                            <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-800 dark:text-gray-100">
                                <ol className="flex h-8 space-x-2">
                                    <li className="flex items-center">
                                        <Link to={'/'} title="Back to homepage" className="hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-400">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                                            <path d="M32 30.031h-32l16-28.061z"></path>
                                        </svg>
                                        <Link to={'/my-services'} className="flex items-center px-1 capitalize hover:underline">My Services</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.postimg.cc/dVqNkBC2/br-1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <h1 className='text-4xl mt-10 mb-10'>Total My Services {services.length}</h1>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <div className='grid grid-cols-3 gap-4 mt-20 mb-20'>
                        {
                            services.map(service => <MySingleService
                                key={service._id}
                                service={service}
                                handleDelete={handleDelete}
                            ></MySingleService>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyServices;