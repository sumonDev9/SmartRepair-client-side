import React, { useEffect } from 'react';
import Bannar from '../components/Bannar';
import PopularServices from '../components/PopularServices';
import AboutUs from '../components/AboutUs';
import Review from '../components/Review';
import { useLocation } from 'react-router-dom';
import NewsLetter from '../components/NewsLetter';

const Home = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = 'SmartRepair || SmartRepair';
    }

  }, [location]);

    return (
        <div>
          <Bannar></Bannar>
          <PopularServices></PopularServices>
          <AboutUs></AboutUs>
          <Review></Review>
          <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;