import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className='bg-base-300  dark:bg-black dark:text-white'>
      <footer className="footer footer-center  text-primary-content p-10">
        <aside  data-aos="fade-up">
          <img src="https://i.ibb.co/7tkTYc4/image-Photoroom-7.png" className='w-20' alt="" />
          <p className="font-bold text-secondary dark:text-white text-xl">
            Smart Repair Service
          </p>
          <p className='text-info font-semibold text-base dark:text-white'>Copyright © {new Date().getFullYear()} -Smart Repair All right reserved</p>
        </aside>
        <nav data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-flow-col items-center gap-4">
            <a href="https://facebook.com" target="_blank" ><img className='w-10' src="https://i.ibb.co/Rb7H2bD/facebook.png" alt="" /></a>
            <a href="https://linkedin.com" target="_blank"><img className='w-12' src="https://i.ibb.co/BN0wwGC/icons8-linkedin-48.png" alt="" /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;