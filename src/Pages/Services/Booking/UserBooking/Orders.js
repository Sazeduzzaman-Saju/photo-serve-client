import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Orders = ({ orders, handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { _id, bookingId, orderName, price, img } = orders;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-lg w-40 h-40">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{orderName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {user?.displayName}
                <br />
                <span className="badge badge-ghost badge-sm bg-violet-700 text-white">{user?.email}</span>
            </td>
            <td className='text-violet-500'>${price}</td>
            <td>
                Complete
            </td>
            <td>
                <Link to={`/review/${bookingId}`}><button className="hover:text-violet-300">Review</button></Link>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="custom-btn btn-6">Remove</button>
            </th>
        </tr>
    );
};

export default Orders;


                //

                // 
