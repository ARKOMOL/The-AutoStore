import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    // const url = 'http://localhost:4000/user'
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://peaceful-shore-76688.herokuapp.com/user', {
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <h2 className="text-3xl text-yellow-500">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><AdminRow
                           key={user._id}
                           user={user}
                           index ={index}
                           refetch={refetch}
                           ></AdminRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;