import React from 'react';

const AllReviews = ({ allreview, handleDelete }) => {
    const { clientComment, _id, name, photoURL } = allreview;
    console.log(_id)
    return (
        <div className=" lg:-mx-6 lg:flex lg:items-center mb-10 bg-white p-5 shadow-lg">
            <div className=" lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">
                    <button className='' onClick={() => handleDelete(_id)}>X</button>
                </p>

                <a href="/#" className="block mt-4 text-1xl font-semibold text-gray-800 hover:underline dark:text-white md:text-1xl">
                    {clientComment}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {clientComment}
                </p>

                <a href="/#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div className="flex items-center mt-6">
                    <img className={photoURL ? <>Empty</> : <></>} alt="" />

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{name}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;