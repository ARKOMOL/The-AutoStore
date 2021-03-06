import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Components/Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin);
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-nav" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-5xl font-bold text-yellow-500 my-4 '>Welcome to your Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-nav" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                
               <li> <Link to='/dashboard'>My Profile</Link></li>
               
        
                {
                    admin ?
                    <>
                        <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                        <li><Link to="/dashboard/add-products">Add Products</Link></li>
                        <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                    </>
                    :
                    <>
                    <li> <Link to='/dashboard/orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                    </>
                }
                
            </ul>

        </div>
    </div>
    );
};

export default Dashboard;