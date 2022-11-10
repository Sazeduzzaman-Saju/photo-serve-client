import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ServiceReview from '../../Review/ServiceReview';
import '../../Review/ServiceReview.css'


const ServiceDetails = () => {
    const { _id, title, price, img, description } = useLoaderData({});
    const [customerService, setCustomerService] = useState({});
    const { user } = useContext(AuthContext);
    const [customerReview, setCustomerReview] = useState([]);

    useEffect(() => {
        fetch(`https://photo-serve-server.vercel.app/review?reviewId=${_id}`)
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, [_id])


    const handleDelete = id => {
        const proceed = window.confirm('Confirm Delete This Order')
        if (proceed) {
            fetch(`https://photo-serve-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const available = customerService.filter(order => order._id !== id)
                        setCustomerService(available);
                    }
                })
                .catch(error => console.error(error))
        }
    }

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const name = user?.displayName;
        console.log(message)

        const serviceReview = {
            reviewId: _id,
            clientComment: message,
            email,
            photoURL,
            name
        }
        fetch(`https://photo-serve-server.vercel.app/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceReview)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Feed Back Successfully Added')

                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-20 mb-20">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img} alt="" className="object-contain " />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">{title}
                        </h1>
                        <div className="rating mb-5 mt-5">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-3xl font-bold">$ {price}</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to={`/booking/${_id}`}>
                                <button className='btn'>Book Now</button>
                            </Link>
                            <Link to={'/services'}>
                                <button className='btn'>Back Services</button>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div >
                <div className='max-w-screen-xl mx-auto mt-20 mb-5'>

                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        {description}
                    </p>
                </div>
            </section >






            <h1 className='text-4xl text-center'>Give Your Feedback</h1>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        {customerReview.map(review => <ServiceReview
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ServiceReview>)}
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleReviewSubmit}>
                                <div className="mb-5">
                                    <label
                                        for="message"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    ></textarea>
                                </div>
                                <div className="mb-5">
                                    <label
                                        for="message"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <input name='email' type="email" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={user?.email} readOnly />
                                </div>
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Rating
                                    </label>
                                    <div className="rating rating-lg">
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div>
                                        <input type="submit" className="btn  input-success w-full mt-4" value="Review Service" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ServiceDetails;