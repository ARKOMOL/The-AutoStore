import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Hello komol</h1>
           <div className='grid gap-5 justify-center my-10'>
           <progress class="progress progress-info w-56" value="0" max="100"></progress>
            <progress class="progress progress-info w-56" value="10" max="100"></progress>
            <progress class="progress progress-info w-56" value="40" max="100"></progress>
            <progress class="progress progress-info w-56" value="70" max="100"></progress>
            <progress class="progress progress-info w-56" value="100" max="100"></progress>
           </div>
        </div>
    );
};

export default Home;