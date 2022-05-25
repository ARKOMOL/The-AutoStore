import React from 'react';

const adminRow = ({user,index}) => {
    console.log(user);
    const {email} = user;
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
        </tr>
    );
};

export default adminRow;