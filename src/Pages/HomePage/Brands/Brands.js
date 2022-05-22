import React, { useEffect, useState } from 'react';

const Brands = () => {
    const [brands,setBrands] = useState([]);

    useEffect(()=>{
        fetch('Brands.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setBrands(data)
        })
    },[])
    return (
       <div>
           <h1 className='text-5xl my-5'>Met Our Brand Partner</h1>
           <div class="carousel carousel-end gap-5 rounded-box items-center justify-center my-5">
                {
                    brands.map(brand=>(
                        <div class="carousel-item">
                            <img src={brand.img} alt='brand' class="rounded-box" />
                         </div> 
                    ))
                }
            </div>
       </div>
    );
};

export default Brands;