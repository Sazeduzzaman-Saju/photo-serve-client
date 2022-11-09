import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const BookingServices = ({ bookingServices }) => {
    const { user } = useContext(AuthContext)
    const { title, price, img, description } = bookingServices;
    return (
        <div>
            <section>
                <section className="text-gray-600 body-font">
                    <div div className="container px-5 py-24 mx-auto" >
                        <h1 className='text-5xl text-center mb-10'>Your Order</h1>
                        <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                                <img src={img} alt='' className='image-full' />
                            </div>
                            <div className="flex-grow sm:text-left text-center  sm:mt-0">
                                <h1 className="text-black text-2xl title-font font-bold mb-2">{title}</h1>
                                <p className="leading-relaxed text-base">{description}</p>
                                <div className="md:flex font-bold text-gray-800">
                                    <div className="w-full md:w-1/2 flex space-x-3 mt-10">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Price</h2>
                                            <p>$ {price}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Email</h2>
                                            <p>{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </section >
        </div >
    );
};

export default BookingServices;