import React from 'react';
import UseParts from '../../Hooks/UseParts';
import PartsDetails from './PartsDetails';

const Parts = () => {
    const [parts] = UseParts();
    // console.log(parts);
    return (
        <div>
            <h1 className='text-4xl'>
                Our Parts
            </h1>

            <div class="Lg:mx-32 md:mx-32 container gap-5 card  shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
  
             {
                parts.map(part =><PartsDetails key={part._id} part ={part}/>)
            }
            </div>
          
        </div>
    );
};

export default Parts;