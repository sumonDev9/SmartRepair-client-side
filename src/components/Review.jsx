import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    const [review, setReview] = useState([]);
    
    
   
    useEffect(() => {
      // animation
      AOS.init({
        duration: 1000, 
        offset: 100,     
        once: true,      
      });
         // data get
        fetch('/review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <section className=" py-10">
        <div className="w-11/12 bg-white dark:bg-slate-800 p-4 rounded-lg mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">What Our Clients Say</h2>
  
          {/* Marquee  Review */}
          <Marquee pauseOnHover={true} speed={50}>
            {review.map((review) => (
              <div key={review.id} 
              className="flex flex-col items-center dark:bg-slate-700 mx-5 bg-white p-5 rounded-lg shadow-md max-w-xs"  data-aos="fade-up">
                <img src={review.photo} alt={review.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-secondary dark:text-white mb-2">{review.title}</h3>
                <p className="text-info dark:text-white text-sm mb-4">{review.comment}</p>
  
                {/* Rating Section */}
                <div className="flex justify-center mt-3">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
               <p className="mt-2 text-secondary dark:text-white font-semibold">{review.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    );
};

export default Review;