import React from 'react';
import { Link } from 'react-router-dom';
import  './AllCss.css'

const Banner = () => {
    return (
        <div className=''>
            <div class="hero banner min-h-screen" >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Welcome to The AutoStore</h1>
                <p class="mb-5 text-2xl">Here you can get every parts whatever you wants to your car.And also you get here any kind of parts of a vehicles</p>
                <Link to='/contact'><button class="btn btn-primary">Contact Us</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;