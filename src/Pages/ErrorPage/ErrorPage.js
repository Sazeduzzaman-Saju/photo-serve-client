import React from 'react';
import { Link } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTitle/useWebtitle';
import './ErrorPage.css'

const ErrorPage = () => {
    useWebTitle('Routes Not Found..!');
    return (
        <div className=''>
            {/* https://i.ibb.co/VS62RfK/404.png */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src="https://i.ibb.co/VS62RfK/404.png" alt="" />
                        <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>
                        <p className="py-6">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to='/home'>
                            <button className="custom-btn btn-6"><span>BACK HOME</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;