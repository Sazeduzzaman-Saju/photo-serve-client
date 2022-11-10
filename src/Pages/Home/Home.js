import React, { useEffect, useState } from 'react';
import { FcInternal } from "react-icons/fc";
import { Link } from 'react-router-dom';
import SomeServices from './SomeServices';
import ClientServicesItems from './ClientServicesItems/ClientServicesItems'
import ShortDetails from './ShortDetails/ShortDetails';
import useWebTitle from '../../hooks/useWebTitle/useWebtitle';

const Home = () => {
    const [services, setServices] = useState([]);
    const [userServices, setUserServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-serve-server.vercel.app/services-limit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    useEffect(() => {
        fetch('https://photo-serve-server.vercel.app/user-services')
            .then(res => res.json())
            .then(data => setUserServices(data))
    }, [])
    useWebTitle('Home-PhotoServe');
    return (
        <div className='container mx-auto px-4 mt-20'>
            {/* <h1 className='flex justify-start'>This is Home {services.length}</h1> */}
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Capture<br />
                            <span className="text-violet-400"> Love, Joy & Everything</span> With Us
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">It is a long established fact that a reader will be distracted by the reale he point of using distracted reader is that it has a more-or-less normal valid.
                        </p>
                        <div>
                            <Link to={'/services'}><button className="custom-btn btn-6"><span>Book Services</span></button></Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 ">
                        <img src="https://i.postimg.cc/ryWJz8PN/hero-img-1.png" alt="" className="object-contain h-full  image-full" />
                    </div>
                </div>
            </section >
            <section>
                <div className='text-center'>
                    <div>
                        <button className='btn btn-circle bg-white border-0 shadow-lg animate-bounce'>
                            <FcInternal className='text-5xl'></FcInternal>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto px-4 mt-20 mb-20 text-center'>
                    <h1 className='text-4xl text-bold font-bold mb-3'>Service<br /> We Provide</h1>
                    <hr />

                </div>
            </section>
            <section>
                <div className=' grid grid-cols-3 gap-4 max-w-screen-xl mx-auto'>
                    {
                        services.map(service => <SomeServices
                            key={service._id}
                            service={service}
                        ></SomeServices>)
                    }
                </div>
                <div className='text-center mt-5 mb-10'>
                    <Link to={'/services'}><button className="custom-btn btn-6"> See All </button> </Link>
                </div>
            </section>
            <section>
                <div className='container mx-auto px-4 mt-20 mb-20 text-center'>
                    <h1 className='text-4xl text-bold font-bold mb-3'>Services<br /> Comming Soon</h1>
                    <hr />

                </div>
            </section>
            <section>
                <ShortDetails></ShortDetails>
            </section>
            <section>
                <div className='container mx-auto px-4 mt-20 mb-20 text-center'>
                    <h1 className='text-4xl text-bold font-bold mb-3'>Client  <br /> Services We Serve</h1>
                    <hr />
                </div>
            </section>

            <section>
                <div className=' grid grid-cols-3 gap-4 max-w-screen-xl mx-auto'>
                    {
                        userServices.map(service => <ClientServicesItems
                            key={service._id}
                            service={service}
                        ></ClientServicesItems>)
                    }
                </div>
                <div className='text-center mt-5 mb-10'>
                    <Link to={'/services'}><button className="custom-btn btn-6"> See All </button> </Link>
                </div>
            </section >
            <section>
                <div className="w-full rounded-md bg-violet-400">
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 h-12 mt-5 rounded-l-lg sm:w-2/3" />
                            <Link to={'/register'}><button type="button" className="custom-btn btn-6">Join Now</button></Link>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;