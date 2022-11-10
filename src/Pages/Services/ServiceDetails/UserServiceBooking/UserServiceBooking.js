import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
// import toast from 'react-hot-toast';

const UserServiceBooking = () => {
    const { user } = useContext(AuthContext);
    const userBookingServices = useLoaderData([]);
    console.log(userBookingServices)
    const { bookingId, title, price, customerProfile, description, img } = userBookingServices;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email;
        const message = form.message.value;
        console.log(name, email, phoneNumber, message)

        const bookingOrder = {
            bookingId: bookingId,
            orderName: title,
            customer: name,
            price,
            email,
            phoneNumber,
            message,
            img,
        }
        fetch(`https://photo-serve-server.vercel.app/user-service-booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Booking Successfully placed')
                }
            })
            .catch(error => console.error(error))
    };

    return (
        <div className='mt-5 mb-5'>
            <section>
                <section>
                    <div className="card card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-10 mb-10">
                        <figure><img src={customerProfile} alt="" className='image-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <p>$ {price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
            <h1 className='text-5xl text-center mb-10'>Book Now</h1>
            <div className='max-w-[550px] mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-[550px] mx-auto'>
                        <input name='firstName' type="text" placeholder="First Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='lastName' type="text" placeholder="Last Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='phoneNumber' type="number" placeholder="Phone Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />

                        <input name='email' type="email" placeholder="Type here" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={user?.email} readOnly />
                    </div>
                    <textarea name='message' className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-5 " placeholder="Enter Comment"></textarea>
                    <div>
                        <input type="submit" placeholder="Type here" className="btn  input-success w-full mt-4" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserServiceBooking;