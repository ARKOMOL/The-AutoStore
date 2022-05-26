import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Components/Firebase/Firebase.init';
import UpdateProfile from './update';

const MyProfile = () => {
    const [user] = useAuthState(auth)
   
  console.log(user);
    return (
        <div>
            <h1 className='text-4xl text-yellow-500' >My Profile</h1>
            <h1 className='text-3xl'>Email: {user?.email}</h1>
            <h1 className='text-3xl'>Name: {user?.displayName}</h1>
            <UpdateProfile/>
        </div>
    );
};

export default MyProfile;