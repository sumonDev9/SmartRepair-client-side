import React from 'react';
import { FaIndianRupeeSign, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {
    const {_id, photo, name, price, area, description, serviceProvider} = service || {}
    return (

    <div className='flex gap-5 flex-col sm:flex-row dark:bg-slate-700 bg-white p-5 rounded-lg'>
        <figure className='max-w-sm lg:h-[245px] w-full h-full'>
    <img
    className=' h-full w-full object-cover rounded-lg'
      src={photo}
      alt="Shoes" />
  </figure>
        <div className='space-y-3 '>
            <h1 className='text-2xl dark:text-white text-secondary font-bold'>{name}</h1>
            <p className='text-xl font-semibold dark:text-white text-info'>{description.substring(0, 100)}...</p>
            <div className='space-y-3'>
                <div className='flex gap-3 items-center'>
                    <img src={serviceProvider.photo} className='w-10 h-10 rounded-full' alt="" />
                    <h1 className='text-secondary dark:text-white font-bold text-2xl'>{serviceProvider.name}</h1>
                </div>
                <div className='flex gap-10'>
                    <h2 className='text-secondary dark:text-white font-semibold flex items-center '><FaIndianRupeeSign className='text-lg' /> <span className='text-lg dark:text-white text-info'>{price}</span></h2>
                    <h2 className='flex items-center gap-1 dark:text-white text-info font-semibold'><FaLocationDot className='text-secondary dark:text-white' /> {area}</h2>
                </div>
            </div>
            <Link to={`/services/${_id}`}>
            <button className='text-white mt-2 bg-primary px-3 py-2 rounded-md font-semibold'>View Detail</button>
            </Link>
        </div>
    </div>
    );
};

export default AllServiceCard;