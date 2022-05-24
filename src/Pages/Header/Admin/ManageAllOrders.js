import React from 'react';
import UseParts from '../../../Hooks/UseParts';
import ManageAllOrdersInfo from './ManageAllOrdersInfo';

const ManageAllOrders = () => {

    const [parts,setParts] = UseParts();

    const handleToDelete = id =>{
        const confirm = window.confirm ('Want to delete this item?')
       if (confirm) {
        // const url = `http://localhost:4000/purchase/${id}`;
        const url = `https://peaceful-shore-76688.herokuapp.com/purchase/${id}`
       
        fetch(url,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            const restParts = parts.filter(product => product._id !== id);
            setParts(restParts);
        })
       }
    }


    return (
        <div>
            <h1 className='text-4xl text-yellow-500'>Manage All Orders</h1>
            <div class="Lg:mx-32 md:mx-32 container gap-5 card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
  
                {
                    parts.map(part =><ManageAllOrdersInfo key={part._id} part ={part} handleToDelete={handleToDelete} />)
                }
            </div>



        </div>
    );
};

export default ManageAllOrders;