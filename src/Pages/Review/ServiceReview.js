import React from 'react';

const ServiceReview = ({ review, handleDelete }) => {

    const { _id, photoURL, name, clientComment, } = review;

    return (
        <div className="p-2  bg-white">
            <div className=" w-full lg:max-w-full lg:flex">

                <div className=" flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
                </div>
                <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-gray-700 text-base">{clientComment}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={photoURL} alt="Writer" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{name}</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>

            </div>
        </div >
    );
};

export default ServiceReview;