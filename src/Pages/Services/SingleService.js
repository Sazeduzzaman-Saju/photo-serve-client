import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcAdvance } from "react-icons/fc";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ service }) => {
    // console.log(service)
    const { loading } = useContext(AuthContext);
    const { _id, title, description, img, price } = service;
    return (
        <div>

            {loading ?
                <>
                    <p>Loading...</p>
                </>
                :
                <>
                    <section className="flex justify-center items-center mt-5 bg-blue-lightest">
                        <div className="bg-white rounded shadow-md flex card text-grey-darkest">
                            <div className='flex'>
                                <PhotoProvider>
                                    <PhotoView src={img}>
                                        <img src={img} className="w-1/2 h-72 rounded-l-sm" alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                <div className="w-full flex flex-col">
                                    <div className="p-4 pb-0 flex-1">
                                        <h3 className="font-bold text-grey-darkest mb-5">{title}</h3>
                                        <span className="text-3xl text-grey-darkest">£{price}<span className="text-lg">/ 5hr</span></span>
                                        <div className="flex items-center mt-4">
                                            <div>{description.slice(0, 70)}..</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/services/${_id}`}>
                                            <div className="bg-grey-lighter flex justify-between items-center p-3 transition hover:bg-violet-600 hover:text-white">
                                                Book Now
                                                <FcAdvance />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </div>
    );
};

export default SingleService;