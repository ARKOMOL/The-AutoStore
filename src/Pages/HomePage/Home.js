import React from 'react';
import Banner from './Banner';
import Brands from './Brands/Brands';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Parts from './Parts';
import Reviews from './Review/Reviews';



const Home = () => {
  
    return (
        <div>
            
        <Banner/>
        <Parts/>
        <BusinessSummary/>
        <Reviews/>
        <Brands/>
        </div>
    );
};

export default Home;