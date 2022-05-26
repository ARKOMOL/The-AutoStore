import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ManageAllOrdersInfo from './ManageAllOrdersInfo';

const ManageAllOrders = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        // fetch('http://localhost:4000/order-list')
        fetch('https://peaceful-shore-76688.herokuapp.com/order-list')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setOrders(data)
        })
    },[orders])


    const handleToDelete = id =>{
        const confirm = window.confirm ('Want to delete this item?')
       if (confirm) {
        // const url = `http://localhost:4000/orderList/${id}`;
        const url = `https://peaceful-shore-76688.herokuapp.com/orderList/${id}`
       
        fetch(url,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            const restorders = orders.filter(product => product._id !== id);
            setOrders(restorders);
        })
       }
    }

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
                           handleToDelete={handleToDelete}
                           ></ManageAllOrdersInfo>)
                       }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ManageAllOrders;