import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Components/Firebase/Firebase.init';
import PurchaseModal from './PurchaseModal';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const  {id} = useParams();
    const [parts,setParts] = useState({});
    const {name,img,description,availableQuantity,minQuantity,price} = parts;

    useEffect(()=>{
        // const url = `http://localhost:4000/purchase/${id}`;
        const url = `https://peaceful-shore-76688.herokuapp.com/purchase/${id}`;
      
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data =>setParts(data))
    },[id,setParts])

    const handleToQunantity = e=>{
         
   
 
    }


    return (
        <div>
          <div class="hero  bg-base-200">
                            
            <div class="hero-content flex-col lg:flex-row">
            <img src={img} alt="Shoes" className='w-full'  class="rounded-xl" />
                <div>
                {<p>Current User: {user?.displayName}</p>}
          
                <h1 class="text-5xl font-bold">{name}</h1>
                <p class="py-6">{description}</p>
                <p class="py-6">Min Buy: {minQuantity}</p>
                <p class="py-6">Available: {availableQuantity}</p>
                <p class="py-6">Price Per Unit: {price}</p>
                <label for="purchase-modal" class="btn btn-primary modal-button">Purchase</label>
                </div>
                {parts && <PurchaseModal parts ={parts} setParts={setParts} handleToQunantity={handleToQunantity} />}
               
            </div>
            </div>
        </div>
    );
};

export default PurchasePage;