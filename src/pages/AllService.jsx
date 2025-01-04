import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllServiceCard from '../components/AllServiceCard';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import Loading from '../components/loading';

const AllService = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  //dyanic title
  useEffect(() => {
    if (location.pathname === "/allService") {
      document.title = 'AllService || SmartRepair';
    }

  }, [location]);

  // sreach
  useEffect(() => {
    setLoading(true)
    fetch(`https://smart-repair-server-side.vercel.app/services?searchParams=${search}`)
    .then(res => res.json())
    .then(data => {
      setServices(data);
      setLoading(false);
    })
},[search]);


    // get to all data from database 

  useEffect(() => {
    fetchAllService()
  }, []);

  const fetchAllService = async () => {
    const {data} =await axios.get('https://smart-repair-server-side.vercel.app/services')
    setServices(data)
  }


    return (
        <div className='w-11/12 mx-auto py-10'>
           <ScrollRestoration></ScrollRestoration>
          <h2 className='text-center text-2xl font-bold pb-8 dark:text-white'>All Available Services</h2>
          <div className='max-w-lg mx-auto mb-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text"
                             onChange={(e) => setSearch(e.target.value)}
                            className="grow dark:text-black" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>

        {
          loading ? <Loading></Loading> : <div>
                {
              services.length > 0 ? <div className="grid grid-cols-1 gap-5">
              {
               services.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
              }
          </div>
           : 
           <div className="flex  my-5 min-h-80  rounded-lg justify-center items-center gap-2 flex-col">
            <img src='https://i.ibb.co/fNHCKcb/error.webp' className="w-32" alt="" />
            <h1 className="text-primary dark:text-white font-bold text-3xl">No Data Found</h1>
            </div>
            }
          </div>
        }

        </div>
    );
};

export default AllService;