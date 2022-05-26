import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Components/Firebase/Firebase.init';
import MyOrdersDetails from './MyOrdersDetails';

const MyOrders = () => {

    const [myOrders,setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
        

    useEffect(()=>{
        if (user) {
            // fetch(`http://localhost:4000/order?orderinfo=${user.email}`,{
            fetch(`https://peaceful-shore-76688.herokuapp.com/order?orderinfo=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    
                }
                return res.json()
            })
        .then(data => {
            console.log(data);
            setMyOrders(data)
        })
        }
    },[user])


    return (
        <div>
            <h1 className='text-4xl text-yellow-500'>My orders {myOrders.length}</h1>

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
                           myOrders.map((order,index)=><MyOrdersDetails
                           key={order._id}
                           order={order}
                           index ={index}
                          
                           ></MyOrdersDetails>)
                       }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrders;