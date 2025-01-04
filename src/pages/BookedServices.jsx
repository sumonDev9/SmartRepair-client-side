import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const BookedServices = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/bookedServices") {
        document.title = 'Booked Services || SmartRepair';
      }
  
    }, [location]);

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchAllService()
    }, [user]);

    const fetchAllService = async () => {
        const { data } = await axios.get(`https://smart-repair-server-side.vercel.app/booking/${user?.email}`, {
            withCredentials: true
        })
        setServices(data)
    }
    return (
        <div className='w-11/12 py-10 mx-auto'>
            <div className='border-l-8 border-primary pl-4'>
                 <h3 className='text-2xl text-primary font-semibold dark:text-white'>My Book service</h3>
            </div>
            
            <div>
               {
                services.length === 0 ? (
                    <div className="text-center min-h-48 py-6">
                    <p className="text-xl text-secondary dark:text-white">No booked services found.</p>
                </div>
                ) 
                : 
                (
                    <div className="overflow-x-auto pt-8">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-orange-100 text-secondary text-sm lg:text-base'>
                            <tr>
                                <th className="border border-gray-300">SL.No</th>
                                <th className="border border-gray-300">Service Name</th>
                                <th className="border border-gray-300">Provider Name</th>
                                <th className="border border-gray-300">service Taking Date</th>
                                <th className="border border-gray-300">Price</th>
                                <th className="border border-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            services.length === 0 ? '' : (
                                services.map((booking, index) => (
                                <tr className='bg-gray-50 text-base' key={booking._id}>
                                <th className='border border-gray-300'>{index +1}</th>
                                <td className='border border-gray-300'>{booking.serviceName}</td>
                                <td className='border border-gray-300'>{booking.providerName}</td>
                                <td className='border border-gray-300'>{booking.serviceTakingDate}</td>
                                <td className='border border-gray-300'>{booking.price}</td>
                                <td className='border border-gray-300'>{booking.serviceStatus}</td>
                                </tr>
                                ))
                            ) 
                          }
                            

                        </tbody>
                    </table>
                </div>  
                )
               }
            </div>
        </div>
    );
};

export default BookedServices;