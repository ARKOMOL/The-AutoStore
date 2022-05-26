import React, { useEffect, useState } from 'react';
import ManageAllOrdersInfo from './ManageAllOrdersInfo';

const ManageAllOrders = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/order-list')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setOrders(data)
        })
    },[orders])



    return (
        <div>
            <h1 className='text-4xl text-yellow-500'>Manage All Orders</h1>
            <h1 className='text-3xl text-yellow-500 py-3'> All Orders: {orders.length} </h1>
           
            <div class="overflow-x-auto">
                <table class="table w-full">
                <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           orders.map((order,index)=><ManageAllOrdersInfo
                           key={order._id}
                           order={order}
                           index ={index}
                          
                           ></ManageAllOrdersInfo>)
                       }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ManageAllOrders;