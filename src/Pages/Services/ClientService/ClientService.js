import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useWebTitle from '../../../hooks/useWebTitle/useWebtitle';


const ClientService = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(name, email, phoneNumber, message)

        const userService = {
            orderName: title,
            customer: user?.displayName,
            customerProfile: user?.photoURL,
            price,
            email,
            phoneNumber,
            description,
            img
        }
        fetch(`https://photo-serve-server.vercel.app/user-services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userService)
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
    useWebTitle('Client Services Booking');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 max-w-screen-xl mx-auto">
            <h1 className='text-5xl text-center mt-10'>Book your service</h1>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm w-full mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-[650px] mx-auto'>
                        <input name='title' type="text" placeholder="Inter your Service title" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='img' type="text" placeholder="Inter Service Image Link " className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                        <input name='phoneNumber' type="number" placeholder="Phone Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />

                        <input name='price' type="number" placeholder="Inter Service Price" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />

                        <input name='email' type="email" placeholder="Service Description" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={user?.email} readOnly />
                        <textarea name='description' className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-5 " placeholder="Enter Comment"></textarea>
                        <div>
                            <input type="submit" placeholder="Type here" className="btn  input-success w-full mt-4" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <div className='grid grid-cols-3 gap-4 mt-20 mb-20'>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientService;