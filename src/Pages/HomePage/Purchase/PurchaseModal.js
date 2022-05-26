import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../../Components/Firebase/Firebase.init';

const PurchaseModal = ({parts,setParts,handleToQunantity}) => {
    // console.log(parts);
    const  {id} = useParams();
    const [user] = useAuthState(auth)
    const {reset} = useForm()
    // console.log(user);
    const {_id,name,availableQuantity,minQuantity,price} = parts;
    

    const handleOrders =e=>{
        
        e.preventDefault();
        const orderDetails ={
            orderId : _id,
            orderName:name,
            userName: user.displayName,
            email: user.email,
            phone:e.target.phone.value,
            orderQuantity:e.target.orderQuantity.value,
            address:e.target.address.value,


        }

        // fetch('http://localhost:4000/order',{
        fetch('https://peaceful-shore-76688.herokuapp.com/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderDetails)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            
            

        });
        
        const orderQuantity = e.target.orderQuantity.value;
       
          const updateQuantity = parseInt(parts?.availableQuantity) - parseInt(orderQuantity);
       
    
        
        //   const url = `http://localhost:4000/purchase/${id}`
          const url = `https://peaceful-shore-76688.herokuapp.com/purchase/${id}`
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({quantity: updateQuantity }),
          })
            .then((res) => res.json())
            .then((data) => {
              
                toast.success('Ordered SuccessFull')
            
                console.log(data)});

        

    }
    return (
        <div>
            

<input type="checkbox" id="purchase-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-2xl font-bold">You are Buying: {name}</h3>
    <h3 class="text-lg font-bold">Price: ${price}</h3>
    <h3 class="text-lg font-bold">Minimum Buy: {minQuantity} Pieces</h3>
    <h3 class="text-lg font-bold">{ availableQuantity > 200 ? <span>Available: {availableQuantity} Pieces</span> :
          <span className='text-red-500'>Product Unavailalbe to Buy</span>}
        </h3>

    <form onSubmit={handleOrders} action="" className='grid grid-cols-1 gap-4 justify-items-center mt-3'>

        <input type="text" placeholder="Type here" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Type here" value={user?.email} class="input input-bordered w-full max-w-xs" />
        
       { availableQuantity > 200 ?
        <input type="number" placeholder="Order Quantity" name='orderQuantity' class="input input-bordered w-full max-w-xs" required />
        :  <>
            <input type="text" disabled placeholder='You cannot order'  class="input text-red-400 input-bordered w-full max-w-xs"  />
            <span className='text-red-500'>You cannot order</span>
        </>
        }
        <input type="text" name='phone' placeholder="Phone"  class="input input-bordered w-full max-w-xs" required/>
        <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" required />
        { availableQuantity > 200 ?

                <input type="submit"  value="Confirm Order"  class=" form-control input font-bold btn-primary input-bordered max-w-xs" />
                : 
                <input type="submit" disabled value='Confirm Order'  class=" form-control input font-bold btn-primary " />

        }
    </form>

    
  </div>
</div>
        </div>
    );
};

export default PurchaseModal;