import React from 'react';

const ManageAllOrdersInfo = ({part,handleToDelete}) => {
    const {name,img,description,availableQuantity,minQuantity,price} = part;
    return (
        <div>
          
        <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <p>Minumum Buy: {minQuantity} </p>
            <p>Available Parts: {availableQuantity} </p>
            <p>Price: ${price} </p>
            <div class="card-actions">
             <button onClick={()=> handleToDelete(part._id)} class="btn btn-primary"  > Delete Parts </button>
            </div>
        </div>
    </div>
    );
};

export default ManageAllOrdersInfo;