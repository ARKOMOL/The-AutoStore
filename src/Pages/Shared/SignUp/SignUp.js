import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import '../Login/Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../Components/Firebase/Firebase.init';

const SignUp = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true})

    const handleName = event =>{
        setName(event.target.value);
        console.log(event.target.value)
    }
    const handleLastName = event =>{
        setLastName(event.target.value);
        console.log(event.target.value)
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate(from,{replace:true});
    }

    const handleCreateUser = event =>{

        event.preventDefault();
         toast('Email sent');
         if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        
        createUserWithEmailAndPassword(email, password);
    }

    return (
    <div>
        <div className='login-container bg-info '>
                <h2 className='form-title text-center text-4xl'>Sign Up</h2>
                <form className='login-form' onSubmit={handleCreateUser}>
                    <div className="input-group">
                        
                        <input onBlur={handleName} type="name" name="name" placeholder='Name' id="" required/>
                    </div>
                    <div className="input-group">
                        
                        <input onBlur={handleLastName} type="name"  placeholder='Last Name'name="name" id="" required/>
                    </div>
                    <div className="input-group">
                       
                        <input onBlur={handleEmailBlur} type="email" name="email"  placeholder='Email' id="" required/>
                    </div>
                    <div className="input-group">
                      
                        <input onBlur={handlePasswordBlur} type="password" name="password"  placeholder='Password' id=""  required/>
                    </div>
                    <div className="input-group">
                       
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id=""  placeholder='Confirm Password' required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p className='text-center mt-2'>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
           
     </div>
    );
};

export default SignUp;