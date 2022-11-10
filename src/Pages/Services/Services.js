import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTitle/useWebtitle';
import ClientOtherServices from './ServiceDetails/ClientOtherServices';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    const [userService, setUserServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-serve-server.vercel.app/user-services')
            .then(res => res.json())
            .then(data => setUserServices(data))
    }, [])
    useWebTitle('Services');
    return (
        <div className=''>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">All Services
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Our All Services Here.Hope You Like It!</p>
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
                                        <Link to={'/services'} className="flex items-center px-1 capitalize hover:underline">Services</Link>
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

            <section>
                <div className='grid grid-cols-3 gap-4 max-w-screen-xl mx-auto  mb-20'>
                    {
                        services.map(service => <SingleService
                            key={service._id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </section>
            <section>
                <div className="p-6 py-12 bg-violet-400 dark:bg-violet-400 dark:text-gray-900 max-w-screen-xl mx-auto mt-20 mb-20 rounded-sm">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                <br className="sm:hidden" />50% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Some Others Service!</span>
                                <span className="font-bold text-lg">PhotoServe Client Provide</span>
                            </div>
                            <Link to={'/contact'} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mb-20'>
                <div className='grid grid-cols-3 gap-4 max-w-screen-xl mx-auto '>
                    {
                        userService.map(otherService => <ClientOtherServices
                            key={otherService._id}
                            otherService={otherService}
                        ></ClientOtherServices>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;