import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Booking = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email;
        const message = form.message.value;
        console.log(name, email, phoneNumber, message)

        const bookingOrder = {
            bookingId: _id,
            orderName: title,
            customer: name,
            price,
            phoneNumber,
            message
        }
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingOrder)
        })
            .then(res => res.json())
            .then(then => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='mt-5 mb-5'>
            <h1 className='pt-24 text-3xl font-bold'>Your Chosen Service : {title}</h1>
            <h4 className='pt-5 text-2xl font-bold pb-10'>Service Price : {price}</h4>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-success w-full " />

                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-success w-full " />

                    <input name='phoneNumber' type="number" placeholder="Phone Number" className="input input-bordered input-success w-full " required />

                    <input name='email' type="email" placeholder="Type here" className="input input-bordered input-success w-full " defaultValue={user?.email} readOnly />
                </div>
                <textarea name='message' className="textarea textarea-accent w-full mt-4" placeholder="Enter Comment"></textarea>
                <div>
                    <input type="submit" placeholder="Type here" className="btn  input-success w-full mt-4" />
                </div>
            </form>
        </div>
    );
};

export default Booking;