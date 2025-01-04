import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex mt-20 justify-center items-center'>
        <div className='text-center'>
            <img src='https://i.ibb.co/pLssvhK/errorpagee.jpg' className='w-[450px] h-[250px] rounded-2xl mx-auto' alt="" />
            <h1 className='my-5 text-textsecondary font-bold text-3xl'>Oops! The page youre looking for can not be found.</h1>
            <Link to='/'><button className='px-4 py-2 bg-primary text-lg font-bold text-white rounded-3xl'>Go Back to Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;