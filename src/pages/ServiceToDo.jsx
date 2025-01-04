import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import axios from "axios";
import { useLocation } from "react-router-dom";


const ServiceToDo = () => {

    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/serviceToDo") {
        document.title = 'Service To Do || SmartRepair';
      }
  
    }, [location]);

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetchAllService()
    }, [user]);

    const fetchAllService = async () => {
        const { data } = await axios.get(`https://smart-repair-server-side.vercel.app/bookings/provider/${user?.email}`, {
            withCredentials: true
        })
        setServices(data)
        
    }

    const handleStatusUpdated = async(e, id, newStatus) => {
        // console.log(e.target.value, id)

        try{
            const {data} = await axios.patch(`https://smart-repair-server-side.vercel.app/booking-updated/${id}`,{ serviceStatus: newStatus })
            // console.log(data);
            fetchAllService()
        }catch(err){
            console.log(err)
        }
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
                <p className="text-xl text-secondary dark:text-white">No services booked yet.</p>
            </div>
            ) 
            : 
            (
                <div className="overflow-x-auto pt-8">
                <table className="table">
                    {/* head */}
                    <thead className='bg-orange-100 text-secondary text-base'>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">SL.No</th>
                            <th className="border border-gray-300 px-4 py-2">Service Name</th>
                            <th className="border border-gray-300 px-4 py-2">userName</th>
                            <th className="border border-gray-300 px-4 py-2">service Taking Date</th>
                            <th className="border border-gray-300 px-4 py-2">special Instruction</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                         
                            services.map((service, index) => (
                                
                            <tr className='bg-gray-50 text-base' key={service._id}>
                            <th className='border border-gray-300 px-4 py-2'>{index + 1}</th>
                            <td className='border border-gray-300 px-4 py-2'>{service.serviceName}</td>
                            <td className='border border-gray-300 px-4 py-2'>{service.userName}</td>
                            <td className='border border-gray-300 px-4 py-2'>{service.serviceTakingDate}</td>
                            <td className='border border-gray-300 px-4 py-2'>{service.specialInstruction}</td>
                            <td className='border border-gray-300 px-4 py-2'>{service.price}</td>
                                    <td className='border border-gray-300 px-4 py-2'>
                                        <select
                                            onChange={(e) => handleStatusUpdated(e, service._id, e.target.value)}
                                            defaultValue={service?.serviceStatus}
                                            className="select select-bordered select-xs w-full max-w-xs"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="working">Working</option>
                                            <option value="complete">Complete</option>
                                        </select>
                                    </td>

                                    
                            </tr>
                            ))
                        
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

export default ServiceToDo;