import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import Orders from './Orders';

const UserBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookingOrders, setBookingOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookingOrder(data))
    }, [user?.email])

    
    const handleDelete = id => {
        const proceed = window.confirm('Confirm Delete This Order')
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const available = bookingOrders.filter(order => order._id !== id)
                        setBookingOrder(available);
                    }
                })
                .catch(error => console.error(error))
        }
    }
    return (
        <div className='max-w-screen-xl mx-auto mt-20 mb-20'>
            <h1>
                <span className='text-3xl'>Total Service Booking :</span> <span className='text-3xl'>{bookingOrders.length}</span>
            </h1>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {bookingOrders.map(orders => <Orders
                    key={orders._id}
                    orders={orders}
                    handleDelete={handleDelete}
                ></Orders>)}
            </div>

        </div>
    );
};

export default UserBooking;