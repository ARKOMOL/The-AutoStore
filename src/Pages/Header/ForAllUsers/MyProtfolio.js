import React from 'react';
import { Link } from 'react-router-dom';

const MyProtfolio = () => {
    return (
        <div class="hero min-h-full bg-base-200">
        <div class="hero-content sm:text-center sm:mx-15 text-left">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Abdur Rashid</h1>
            <h1 class="text-2xl font-bold">Address: Khilkhet,Dhaka-1219</h1>
            <h1 class="text-2xl font-bold">Email: abdurrashid.official77@gmail.com</h1>
            <p class="py-6">Now i am studing in Honours 2nd Year at Govt. Titumir College.My Subject is English.Before that i was studing in my Village.</p>
            <p class="py-6">I a am Front-End-Developer.Before that i was a web Designer .I used to design web site using HTML,CSS and Bootsrap.But now i m using JAVASCRIPT,Tailwind,React JS,Firebase Authentication,Node JS,Express JS.For the store data i am using MongoDB.I also use Github to store my code.And to deploy my site i use Netlify,Firebase Hosting and for the server Hosting i use Heroku.</p>
            <h1 className='text-2xl my-4'>My Projects</h1>
            <a href="https://car-manager-by-abdur-rashid.netlify.app " target="_blank" rel="noopener noreferrer"><button  class="btn btn-ancent">Car Manager</button></a>
            <a href="https://dentist-ace-by-abdur-rashid.netlify.app " target="_blank" rel="noopener noreferrer"><button  class="btn btn-ancent mx-3">Dentist Ace</button></a>
            <a href="https://camera-world-by-abdurrashid77.netlify.app " target="_blank" rel="noopener noreferrer"><button  class="btn btn-ancent  ">Camera World</button></a>
            <a href='https://drive.google.com/file/d/1tQAaX8e6kfamLbcYAR8am-P4MdaTmRqr/view?usp=sharing' target='blank'><button  class="btn btn-info my-5">My Resume</button></a>
           
          </div>
        </div>
      </div>
    );
};

export default MyProtfolio;