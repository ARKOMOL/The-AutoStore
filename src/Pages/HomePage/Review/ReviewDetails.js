import React from 'react';

const ReviewDetails = ({rev}) => {
    // console.log(review.name);
    const {name,title,review,ratings} = rev;
    return (
        <div>
       
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{title}</p>
            <p>Minumum Buy: {review} </p>
            <p>Available Parts: {ratings} </p>
         
        </div>
    </div>
    );
};

export default ReviewDetails;