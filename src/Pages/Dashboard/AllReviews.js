import React from 'react';

const AllReviews = ({ allreview, handleDelete }) => {
    const { clientComment, _id, name, photoURL } = allreview;
    console.log(_id)
    return (
        <div class=" lg:-mx-6 lg:flex lg:items-center mb-10 bg-white p-5 shadow-lg">
            <div class=" lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">
                    <button className='' onClick={() => handleDelete(_id)}>X</button>
                </p>

                <a href="/#" class="block mt-4 text-1xl font-semibold text-gray-800 hover:underline dark:text-white md:text-1xl">
                    {clientComment}
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {clientComment}
                </p>

                <a href="/#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div class="flex items-center mt-6">
                    <img class={photoURL ? <>Empty</> : <></>} alt="" />

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">{name}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Author</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;