import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const ManageService = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/manageService") {
      document.title = 'Manage Service || SmartRepair';
    }

  }, [location]);



  const { user } = useContext(AuthContext);
  // get to all data from database 
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  useEffect(() => {
    fetchAllService()
  }, [user]);

  const fetchAllService = async () => {
    const { data } = await axios.get(`https://smart-repair-server-side.vercel.app/services/user/${user?.email}`, {
      withCredentials: true
    })
    setServices(data)
  }

  const handleEdit = (service) => {
    setCurrentService(service);
    setShowModal(true);
  };

  // updated 
  const handleUpdate = async e => {
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const area = form.area.value;
    const description = form.description.value;

    const updatedServiceData = {
      photo,
      name,
      price,
      area,
      description,
    }
    
    try {
     const {data} = await axios.put(`https://smart-repair-server-side.vercel.app/services/${currentService._id}`, updatedServiceData, {
      withCredentials: true
     });
      setShowModal(false);
      fetchAllService(); // Re-fetch services to reflect changes
    } catch (error) {
      console.error('Error updating service:', error);
    }
  }

  const handleDelete = async (_id) => {
   
    const result =  await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
  })
  if (result.isConfirmed) {
    const { data } = await axios.delete(`https://smart-repair-server-side.vercel.app/services/${_id}`, {
      withCredentials: true
    });
    
    if (data.deletedCount > 0) {
      Swal.fire({
        title: 'Service Deleted!',
        text: 'Your service has been deleted successfully.',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      fetchAllService(); // Re-fetch services to reflect changes
    }
  }
  
} 

  


  return (
    <div className='w-11/12 mx-auto py-10'>
      <h2 className='text-primary text-3xl font-bold text-center pb-7'>Your Services</h2>
     
     {
      services.length === 0 ? (
      <div className="text-center text-xl font-semibold dark:text-white text-secondary min-h-48">
        No services found. Please add a service to manage.
      </div>
      )
       :
       ( 
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          services.map(service => (
            <div
              key={service._id}
              className='flex card p-2 dark:bg-slate-700 bg-white rounded-lg gap-4'>
              <div>
                <img src={service.photo} className='max-w-sm w-full lg:h-[230px] object-cover rounded-lg' alt={service.name} />
              </div>
              <div >
                <h1 className='text-secondary dark:text-white text-xl font-bold'>{service.name}</h1>
                <p className='text-info my-3 dark:text-white'>{service.description.substring(0, 100)}...</p>
                <div className='space-y-3'>
                  <div className='flex gap-5 items-center'>
                    <img src={service.serviceProvider.photo} className='w-10 h-10 rounded-full' alt="" />
                    <h1 className='text-secondary dark:text-white font-bold text-xl'>{service.serviceProvider.name}</h1>
                  </div>
                  <div className='flex gap-10'>
                    <h2 className='text-secondary dark:text-white font-semibold text-lg '>Price: <span className='text-lg dark:text-white text-info'>{service.price}</span></h2>
                    <h2 className='flex items-center gap-2 dark:text-white text-lg text-info font-semibold'><FaLocationDot className='text-secondary dark:text-white' /> {service.area}</h2>
                  </div>

                  <div className='flex gap-3'>
                    <button onClick={() => handleEdit(service)} 
                    className='text-white mt-2 bg-primary px-3 py-2 rounded-md font-semibold'>Update </button>
                    <button 
                    onClick={() => handleDelete(service._id)} 
                    className='text-white mt-2 bg-primary px-3 py-2 rounded-md font-semibold'>Delete </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
)
     }
      {
        showModal && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className='text-secondary text-center text-2xl font-bold'>Edit Service</h2>
              <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 gap-6 pt-4 md:grid-cols-2'>
                  {/* Service image url */}
                  <div className='col-span-2 md:col-span-1'>
                    <label className='text-gray-700 ' htmlFor='job_title'>
                      Service image URL
                    </label>
                    <input
                     defaultValue={currentService?.photo}
                      name='photo'
                      type='text'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />
                  </div>
                  {/* Service Name */}
                  <div className='col-span-2 md:col-span-1'>
                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                      Service Name
                    </label>
                    <input
                     defaultValue={currentService?.name}
                      type='text'
                      name='name'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />
                  </div>
                  {/* Service Price */}
                  <div className='col-span-2 md:col-span-1'>
                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                      Price
                    </label>
                    <input
                      defaultValue={currentService?.price}
                      type='number'
                      name='price'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />
                  </div>
                  {/* Service Area */}
                  <div className='col-span-2 md:col-span-1'>
                    <label className='text-gray-700' htmlFor='emailAddress'>
                      Service Area
                    </label>
                    <input
                     defaultValue={currentService?.area}
                      type='text'
                      name='area'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />
                  </div>
                  {/* description */}
                  <div className='w-full col-span-2'>
                    <label className='text-gray-700' htmlFor='description'>
                      Description
                    </label>
                    <textarea
                      defaultValue={currentService?.description}
                      className='block resize-none w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                      name='description'
                      id='description'
                    ></textarea>
                  </div>

                  <div className="modal-action w-full gap-4">
                    <button  className="btn text-white text-lg bg-primary">Update</button>
                    <button onClick={() => setShowModal(false)}
                      className="btn-error btn rounded text-white text-lg">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div >
        )
      }

    </div>
  );

};

export default ManageService;