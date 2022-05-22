import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Components/Firebase/Firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
    const menu = <>
           <li> <Link to='/'>Home</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
            <li> <Link to='/about'>About</Link></li>
           { user?
            <li> <button  onClick={logout}>signout <br />{user.displayName}</button></li>:
            <li> <Link to='/login'>Login</Link></li>
            }
                 </>
    return (
        <div>
            <div class="navbar bg-base-100 container ">
  <div class="navbar-start">
    <div class="dropdown">
     
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menu}
      </ul>
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">Assignment</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menu}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;