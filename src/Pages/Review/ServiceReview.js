import React from 'react';

const ServiceReview = ({ review }) => {
    const { photoURL, name, clientComment, } = review;
    return (
        <div>
            <h1>{clientComment}</h1>
        </div>
    );
};

export default ServiceReview;