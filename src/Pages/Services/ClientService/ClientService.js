import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useWebTitle from '../../../hooks/useWebTitle/useWebtitle';


const ClientService = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(name, email, phoneNumber, message)

        const userService = {
            orderName: title,
            customer: user?.displayName,
            customerProfile: user?.photoURL,
            price,
            email,
            phoneNumber,
            description,
            img
        }
        fetch(`https://photo-serve-server.vercel.app/user-services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Booking Successfully placed')
                }
            })
            .catch(error => console.error(error))
    };
    useWebTitle('Client Services Booking');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 max-w-screen-xl mx-auto">
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Post Your Service
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
                                        <Link to={'/dashboard'} className="flex items-center px-1 capitalize hover:underline">Dashboard</Link>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                                            <path d="M32 30.031h-32l16-28.061z"></path>
                                        </svg>
                                        <Link to={'/user-services'} className="flex items-center px-1 capitalize hover:underline">Post Service</Link>
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

            <div className="flex flex-col justify-center p-6 text-center rounded-sm w-full mx-auto mb-20">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-[650px] mx-auto'>
                        <input name='title' type="text" placeholder="Inter your Service title" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='img' type="text" placeholder="Inter Service Image Link " className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='phoneNumber' type="number" placeholder="Phone Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />

                        <input name='price' type="number" placeholder="Inter Service Price" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />

                        <input name='email' type="email" placeholder="Service Description" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={user?.email} readOnly />
                        <textarea name='description' className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-5 " placeholder="Enter Comment"></textarea>
                        <div>
                            <input type="submit" placeholder="Type here" className="btn  input-success w-full mt-4" value='Post Service' />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ClientService;