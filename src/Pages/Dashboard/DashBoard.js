import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useWebTitle from '../../hooks/useWebTitle/useWebtitle';

import AllReviews from './AllReviews';


const DashBoard = () => {
    const { user } = useContext(AuthContext);

    const SingleService = useLoaderData({});
    const { _id, title, price, img, description } = SingleService;
    console.log(SingleService)


    const [customerService, setCustomerService] = useState([]);
    const [customerReview, setCustomerReview] = useState([]);

    console.log(customerReview)
    console.log(SingleService)

    useEffect(() => {
        fetch(`https://photo-serve-server.vercel.app/all-review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Confirm Delete This Order')
        if (proceed) {
            fetch(`https://photo-serve-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        window.location.reload(false);
                        const available = customerService.filter(order => order._id !== id)
                        setCustomerService(available);
                    }
                })
                .catch(error => console.error(error))
        }
    }
    useWebTitle('DashBoard');
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Your Dashboard
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Enjoy!</p>
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
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                                            <path d="M32 30.031h-32l16-28.061z"></path>
                                        </svg>
                                        <Link to={'/dashboard'} className="flex items-center px-1 capitalize hover:underline">Dashboard</Link>
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
                <div className='max-w-screen-xl mx-auto '>
                    <div className="hero ">
                        <div className="flex flex-col lg:flex-row">
                            <div className='sticky -top-5 '>
                                <div className='w-72'>
                                    <button className='w-full custom-btn btn-6'>
                                        <Link className='mr-3' to={'/my-services'}>My Services</Link>
                                    </button>
                                    <button className='w-full custom-btn btn-6'>
                                        <Link className='mr-3' to={'/user-booking'}>Booking</Link>
                                    </button>
                                    <button className='w-full custom-btn btn-6'>
                                        <Link className='mr-3' to={'/user-services'}>Post Service</Link>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">All Reviews</h1>
                                <div className=" dark:bg-gray-900">
                                    <div className="container px-6 py-10 mx-auto grid grid-cols-1 gap-4">

                                        {
                                            customerReview.map(allreview => <AllReviews
                                                key={allreview._id}
                                                allreview={allreview}
                                                handleDelete={handleDelete}
                                            ></AllReviews>)
                                        }



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default DashBoard; <h1>This is Dashboard</h1>