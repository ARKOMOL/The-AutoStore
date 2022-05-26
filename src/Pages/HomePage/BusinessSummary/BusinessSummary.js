import React from 'react';


const BusinessSummary = () => {
    return (
    <div >
        <h1 className='text-4xl text-yellow-500 my-10'> Business Summary</h1>
      <div class=" grid grid-cols-2 lg:grid-cols-4 shadow">
  
  <div class="stat place-items-center">
    <div class="stat-title"><img className='w-12' src="https://static.thenounproject.com/png/582803-200.png" alt="" /></div>
    <div class="stat-value">102</div>
    <div class="stat-desc">Countries</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title"><img className='w-12' src="https://w7.pngwing.com/pngs/973/697/png-transparent-of-laptop-smartphone-and-tablet-laptop-tablet-computer-mobile-phone-mobile-device-graphy-apple-computer-material-computer-network-angle-3d-computer-graphics-thumbnail.png" alt="" /></div>
    <div class="stat-value text-secondary">450+</div>
    <div class="stat-desc text-secondary">Complete Projects</div>
  </div> 
  <div class="stat place-items-center">
    <div class="stat-title"><img className='w-12' src="https://cdn1.iconfinder.com/data/icons/developer-set-2/512/multiple-512.png" alt="" /></div>
    <div class="stat-value text-secondary">200+</div>
    <div class="stat-desc text-secondary">Happy Clients</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title"><img className='w-12' src="https://w7.pngwing.com/pngs/202/102/png-transparent-business-paper-glider-flick-football-social-media-traffic-panic-positive-feedback-building-text-hand.png" alt="" /></div>
    <div class="stat-value">355+</div>
    <div class="stat-desc">Feedbacks</div>
  </div>
  
</div>
    </div>
    );
};

export default BusinessSummary;