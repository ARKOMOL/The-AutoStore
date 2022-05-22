import React from 'react';

const ReviewDetails = ({rev}) => {
    // console.log(review.name);
    const {name,title,review,ratings} = rev;
    return (
        <div>
       
        <div class="card-body items-center text-center">
        <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=0" className='rounded-full w-25 h-25' alt='' />
  </div>
            <h2 class="card-title">{name}</h2>
            <p>{title}</p>
            <p>Minumum Buy: {review} </p>
            <p>Ratings: {ratings} </p>
         
        </div>
    </div>
    );
};

export default ReviewDetails;