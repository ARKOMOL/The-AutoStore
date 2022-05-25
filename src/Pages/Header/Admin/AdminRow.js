import React from 'react';

const adminRow = ({user,index}) => {
    console.log(user);
    const {email} = user;
    const createAdmin=()=>{
        // console.log('object');
        fetch( `http://localhost:4000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json()).then(data=> {
            console.log(data);
        })
    }
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
            <td><button className='btn' onClick={createAdmin}>Make Admin</button></td>
        </tr>
    );
};

export default adminRow;