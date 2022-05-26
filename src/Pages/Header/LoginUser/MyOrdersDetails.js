import React from 'react';

const MyOrdersDetails = ({order,index}) => {
    const {orderName,phone,orderQuantity,address} = order;
    return (
        <tr>
            <th>{index +1}</th>
            <td>{orderName}</td>
            
            <td>{orderQuantity}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td><button className='btn btn-sm'>Pay</button></td>
            <td><button className='btn btn-sm'>Cancel</button></td>
            
        </tr>
    );
};

export default MyOrdersDetails;