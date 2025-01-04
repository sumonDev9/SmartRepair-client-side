import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Bannar = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
}, []);
    return (
        <div className="z-0">
        <Swiper 
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
  
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
  
          <SwiperSlide>
            <div className="relative" data-aos="fade-up">
              <img
                src="https://i.ibb.co/0ZjLhRS/image.png"
                alt="home service"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base max-w-xl  md:text-2xl lg:text-5xl font-bold" data-aos="fade-right">Revamp Your Home with Colors</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium" data-aos="fade-left">Experience a new level of beauty and vibrancy with our professional home painting services. From modern shades to timeless classics, we bring your vision to life with precision and care</p>
               <div className="">
                <button data-aos="zoom-in" className="flex gap-2 items-center px-3 py-2 bg-primary text-base text-white rounded-md">Get a Free Quote</button>
              </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="relative" data-aos="fade-up">
              <img
                src="https://i.ibb.co/PWbx5C1/image.png"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base md:text-2xl lg:text-5xl font-bold" data-aos="fade-right">Expert Electrical Services</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium" data-aos="fade-left">Power up your space with our expert electrician services. From installations to repairs, we ensure safety, efficiency, and top-quality work every time</p>
               <div className="flex items-center gap-4">
                <button data-aos="zoom-in" className="flex gap-2 items-center px-3 py-2 bg-primary text-base text-white rounded-md">Book a Service Now</button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="relative" data-aos="fade-up">
              <img
                src="https://i.ibb.co/QKBj4tZ/image.png"
                alt="PLUMBER"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base md:text-2xl lg:text-5xl font-bold" data-aos="fade-right">Expert Plumbing Services</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium" data-aos="fade-left">Get reliable solutions for leaks, repairs, and installations. We ensure quick and efficient plumbing for your home and office</p>
               <div className="flex items-center gap-4">
                <button className="flex gap-2 items-center px-3 py-2 bg-primary text-white text-base  rounded-md" data-aos="zoom-in">Request a Service</button>
               </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


  
        </Swiper>
      </div>
    );
};

export default Bannar;