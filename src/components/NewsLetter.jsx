import React from 'react';

const NewsLetter = () => {
    return (
 <section className='pb-10'>
           <div className="dark:bg-slate-700  w-11/12 mx-auto shadow-xl bg-white py-10 rounded-md text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Stay Updated with SmartRepair</h2>
          <p className="text-lg mb-6 dark:text-white text-info">
            Subscribe to our newsletter and receive the latest updates, exclusive repair offers, and tips to maintain your devices.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-3 rounded-md text-gray-900 focus:outline-none dark:border-0 border-2 border-primary focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-base text-secondary dark:text-white mt-4">
            Your privacy is important to us. Unsubscribe anytime.
          </p>
        </div>
      </div>
 </section>
      
    );
};

export default NewsLetter;