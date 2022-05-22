import React from 'react';
import { GrFlag } from 'react-icons/gr';

const BusinessSummary = () => {
    return (
    <div >
        <div class="grid grid-cols-4 grid-flow-col gap-4" >
            
            
            <div>
                <h1 className='w-96'><GrFlag className='w-96'/></h1>
                <h1> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>72</h1>
                <h2>Countries</h2>
            </div><div>
                <h1>72</h1>
                <h2>Countries</h2>
            </div><div>
                <h1>72</h1>
                <h2>Countries</h2>
            </div><div>
                <h1>72</h1>
                <h2>Countries</h2>
            </div>
        </div>
    </div>
    );
};

export default BusinessSummary;