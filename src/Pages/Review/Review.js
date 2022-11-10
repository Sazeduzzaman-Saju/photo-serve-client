import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import MainBookingService from '../Services/Booking/BookingService/MainBookingService/MainBookingService';





const Review = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const bookingServices = useLoaderData({});
    const { _id, title, price, img } = bookingServices;
    console.log(_id, title, price, img)


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
                    toast.success('Feed Back Successfully Added')

                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='mt-5 mb-5'>
            <MainBookingService
                key={bookingServices._id}
                bookingServices={bookingServices}
            ></MainBookingService>
            <div className='max-w-[550px] mx-auto mb-20'>
                <h1 className='text-4xl text-center mb-10'>Feedback</h1>
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
                            <input type="submit" className="btn  input-success w-full mt-4" value="Book Now" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;