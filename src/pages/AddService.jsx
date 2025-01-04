import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const AddService =  () => {
 
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/addServiec") {
      document.title = 'AddService || SmartRepair';
    }

  }, [location]);

    const {user} = useContext(AuthContext)

    const handleSubmit = async e => {
      e.preventDefault();
      const form = e.target;
      const photo = form.photo.value;
      const name = form.name.value;
      const price = parseInt(form.price.value);
      const area = form.area.value;
      const description = form.description.value;

      const formData = {
        photo,
        name,
        price,
        area,
        description,
        serviceProvider: {
          serviceProvideremail: user?.email,
          name: user?.displayName,
          photo:user?.photoURL
        } 
      }


      try{
        //1. make a post request database
      await axios.post(`https://smart-repair-server-side.vercel.app/service-add`, formData, {
        withCredentials: true
      })
        //2. Show SweetAlert  and navigate
        Swal.fire({
          title: 'Added!',
          text: 'The service has been successfully added.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
         //3. Reset form
        form.reset();
       
    
       } 
       catch(err){
        Swal.fire({
          title: 'Unexpected Error!',
          text: `Something went wrong: ${err.message}`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }



    return (
        <div className='flex justify-center items-center mx-4  py-12'>
      <section className=' p-4 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-secondary   text-center '>
        Add a Services
        </h2>

        <form onSubmit={handleSubmit} className='w-[310px] md:w-[450px]'>
          <div className='grid grid-cols-1 gap-6 pt-4 md:grid-cols-2'>
            {/* Service image url */}
            <div className='col-span-2 md:col-span-1'>
              <label className='text-gray-700 ' htmlFor='job_title'>
              Service image URL
              </label>
              <input
                name='photo'
                type='text'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* Service Name */}
            <div className='col-span-2 md:col-span-1'>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
              Service Name
              </label>
              <input
                type='text'
                name='name'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           {/* Service Price */}
           <div className='col-span-2 md:col-span-1'>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
              Price
              </label>
              <input
                type='number'
                name='price'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
             {/* Service Area */}
           <div className='col-span-2 md:col-span-1'>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
              Service Area
              </label>
              <input
                type='text'
                name='area'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           {/* description */}
          <div className='w-full col-span-2'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block resize-none w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              required
              id='description'
            ></textarea>
          </div>

          <div className='w-full col-span-2 mt-6'>
            <button className='disabled:cursor-not-allowed w-full px-8 py-2.5 leading-5 text-white text-xl transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-orange-500 focus:outline-none focus:bg-primary'>
              Add Service
            </button>
          </div>
          </div>
        </form>
      </section>
    </div>
    );
};

export default AddService;