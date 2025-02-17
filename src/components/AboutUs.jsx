import React, { useEffect } from 'react';
import { FaCalendarAlt, FaSmile, FaTools } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 50,     
      once: true,     
    });
  }, []);

    return (
        <div className=" dark:bg-slate-800 px-4 md:py-10">
        <div className="max-w-7xl bg-white  mx-auto dark:bg-slate-700 p-4 rounded-md grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-5"  data-aos="fade-up">
          {/* Left Content */}
          <div className="space-y-5"  data-aos="fade-right">
            <h2 className=" text-xl md:text-4xl font-bold text-primary">About Home Smart Repair Services</h2>
            <p className="text-lg text-info dark:text-white">
              At Home Repair Services, we take pride in delivering top-notch solutions for all your home repair needs. From small fixes to major renovations, our expert team is committed to making your home a better place.
            </p>
            <h3 className="text-2xl font-semibold text-secondary dark:text-white">Our Commitment to Excellence</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3" data-aos="zoom-in">
                <FaCalendarAlt className="text-primary text-xl hidden md:block" />
                <span className="text-lg font-medium text-info dark:text-white">
                  <strong className="text-secondary dark:text-white">Years of Experience:</strong> With over 10 years in the industry, we bring expertise to every project.
                </span>
              </li>
              <li className="flex items-center gap-3" data-aos="zoom-in" data-aos-delay="200">
                <FaSmile className="text-primary text-xl hidden md:block" />
                <span className="text-lg font-medium text-info dark:text-white">
                  <strong className="text-secondary dark:text-white">Satisfied Customers:</strong> Thousands of happy customers trust us for reliable and efficient service.
                </span>
              </li>
              <li className="flex items-center gap-3" data-aos="zoom-in" data-aos-delay="400">
                <FaTools className="text-primary text-xl hidden md:block" />
                <span className="text-lg font-medium text-info dark:text-white">
                  <strong className="text-secondary dark:text-white">Quality Workmanship:</strong> We ensure every job is completed with precision and care.
                </span>
              </li>
            </ul>
          </div>
  
          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src="https://i.ibb.co/Rv5pPDd/image.png"
              alt="Home Repair Services"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
};

export default AboutUs;