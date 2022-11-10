import React from 'react';

const ServiceReview = ({ review, handleDelete }) => {

    const { _id, photoURL, name, clientComment, } = review;

    return (
        <div class="p-2  bg-white">
            <div class=" w-full lg:max-w-full lg:flex">

                <div class=" flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
                </div>
                <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <p class="text-gray-700 text-base">{clientComment}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-10 h-10 rounded-full mr-4" src={photoURL} alt="Writer" />
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">{name}</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>

            </div>
        </div >
    );
};

export default ServiceReview;