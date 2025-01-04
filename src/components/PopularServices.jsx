import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';
import Popularcard from './Popularcard';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularServices = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,     
      once: true,    
    });
  }, []);

  // get to all data from database 
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchAllService()
  }, []);

  const fetchAllService = async () => {
    const {data} =await axios.get('https://smart-repair-server-side.vercel.app/services/popular')
    setServices(data)
  }



    return (
      <div className='w-11/12 mx-auto py-10' data-aos="fade-up">
        <h1 className='text-primary text-center pb-8 font-bold text-2xl md:text-3xl'  data-aos="zoom-in">Popular Services</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
         services.map(service => <Popularcard key={service._id} service={service}></Popularcard>)
        }
    </div>
    <div className='flex justify-center pt-10' data-aos="fade-in">
   <Link to='/allService'>
   <button className='bg-primary py-2 px-3 text-white text-xl font-bold rounded-lg'>See all service</button></Link>
  </div>
      </div>
    );
};

export default PopularServices;