import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto px-4'>
            <h1 className='flex justify-start'>This is Home {services.length}</h1>
        </div>
    );
};

export default Home;