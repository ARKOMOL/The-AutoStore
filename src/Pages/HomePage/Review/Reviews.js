import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const [reviews,SetReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/review')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            SetReviews(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-4xl'>
                Our Review From Our Client
            </h1>

            <div class="Lg:mx-32 md:mx-32 container gap-5 card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
  
             {
                reviews.map(rev =><ReviewDetails key={rev._id} rev ={rev}/>)
            }
            </div>
          
        </div>
    );
};

export default Reviews;