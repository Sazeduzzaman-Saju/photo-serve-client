import React from 'react';
import { Link } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTitle/useWebtitle';
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const About = () => {
    useWebTitle('About');
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">About Us
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
                                        <Link to={'/about'} className="flex items-center px-1 capitalize hover:underline">About</Link>
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
            <section className="dark:bg-gray-800 dark:text-gray-100 mb-20">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-6.png" alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none ">We're The Leading Photo Studio In The Country
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to={'/services'}><button className='custom-btn btn-6'>Services</button></Link>

                        </div>
                        <ul className='flex-col justify-around items-center mt-10'>
                            <li className='flex '><IoShieldCheckmarkSharp /><span className='mr-5'>Self learning</span></li>
                            <li className='flex '><IoShieldCheckmarkSharp /><span className='mr-5'>Contribute at Open Source</span></li>
                            <li className='flex '><IoShieldCheckmarkSharp /><span className='mr-5'>Gain Stack overflow respect</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h1 className='text-4xl text-center font-bold mt-20 mb-20 pt-10'>We Are Different & Professional</h1>
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-violet-400 text-gray-100 mb-20">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                            <div className="dark:text-gray-400">Contact Us For More Details.</div>
                        </div>
                        <img src="https://www.mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                    </div>
                    <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label for="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                        </div>
                        <button type="submit" className="custom-btn btn-6">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default About;