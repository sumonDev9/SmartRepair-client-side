import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Popularcard = ({ service }) => {
    const { _id, photo, name, price, area, description, serviceProvider } = service || {}
    return (
        <div className='flex flex-col lg:flex-row p-2 dark:bg-slate-700 bg-white rounded-lg gap-4'  data-aos="flip-left">
            <div>
                <img src={photo} className='max-w-sm w-full lg:h-[230px] object-cover rounded-lg' alt={name} />
            </div>
            <div >
                <h1 className='text-secondary dark:text-white text-xl font-bold'>{name}</h1>
                <p className='text-info my-3 dark:text-white'>{description.substring(0, 100)}...</p>
                <div className='space-y-3'>
                    <div className='flex gap-5 items-center'>
                        <img src={serviceProvider.photo} className='w-10 rounded-full' alt="" />
                        <h1 className='text-secondary dark:text-white font-bold text-xl'>{serviceProvider.name}</h1>
                    </div>
                    <div className='flex gap-10'>
                        <h2 className='text-secondary dark:text-white font-semibold text-lg '>Price: <span className='text-lg dark:text-white text-info'>{price}</span></h2>
                        <h2 className='flex items-center gap-2 dark:text-white text-lg text-info font-semibold'><FaLocationDot className='text-secondary dark:text-white' /> {area}</h2>
                    </div>
                    <Link to={`/services/${_id}`}>
                    <button className='text-white mt-2 bg-primary px-3 py-2 rounded-md font-semibold'  data-aos="fade-up">View Detail</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Popularcard;