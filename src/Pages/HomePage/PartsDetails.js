import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsDetails = ({part}) => {
    // console.log(part);
    const {name,img,description,availableQuantity,minQuantity,price} = part;
    const navigate = useNavigate()
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
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsDetails;