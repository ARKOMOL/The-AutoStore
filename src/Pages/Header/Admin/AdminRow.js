import React from 'react';
import { toast } from 'react-toastify';

const adminRow = ({user,index,refetch}) => {
    // console.log(user);
    const {email,role} = user;
    const createAdmin=()=>{
        // console.log('object');
        // fetch( `http://localhost:4000/user/admin/${email}`,{
        fetch( `https://peaceful-shore-76688.herokuapp.com/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>{
            if (res.status === 403) {
                toast.error('failed')
            }
            return res.json()
        }).then(data=> {
            console.log(data);
            if (data.modifiedCount >0) {
                refetch()
                toast('sucess')
            }
        })
    }
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
            <td>{role}</td>
            <td>{ role !== 'admin' &&<button className='btn' onClick={createAdmin}>Make Admin</button>}</td>
        </tr>
    );
};

export default adminRow;