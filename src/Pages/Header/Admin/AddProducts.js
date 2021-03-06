import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // console.log(data)

        //  const url = `http://localhost:4000/parts`
         const url = `https://peaceful-shore-76688.herokuapp.com/parts`
    console.log(url);
    fetch(url, {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(result =>{
        console.log(result);
        reset()
    })



      };
    return (
        <div >
            <h1 className='text-3xl text-yellow-500'>Add a review</h1>
        <div className='flex  justify-center items-center'>

                  {/* main */}
                <div class="card justify-center w-96 bg-base-100 shadow-xl">
                    
                    <div class="card-body items-center text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control mt-4  justify-center w-full max-w-xs">
                                 
                        <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: true })} />
                        {errors.name?.type === 'required' && "Name is required"}
                        </div>

                        <div className="form-control my-4   justify-center w-full max-w-xs">
                                   
                        <input
                        type="text"
                        placeholder="Photo"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", { required: true })} />
                        {errors.img?.type === 'required' && "Photo is required"}
                        </div>

                        <div className="form-control  justify-center w-full max-w-xs">
                                
                        <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", { required: true })} />
                        {errors.description?.type === 'required' && "Description is required"}
                        </div>

                        <div className="form-control my-4  justify-center w-full max-w-xs">
                                  
                        <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", { required: true })} />
                        {errors.price?.type === 'required' && "price is required"}
                        </div>

                        <div className="form-control  justify-center w-full max-w-xs">
                                 
                        <input
                        type="number"
                        placeholder="Min Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQuantity", { required: true })} />
                        {errors.minQuantity?.type === 'required' && "Min Quantity is required"}
                        </div>

                        <div className="form-control my-4  justify-center w-full max-w-xs">
                                
                        <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                         {...register("availableQuantity", { required: true })} />
                        {errors.availableQuantity?.type &&<span className="label-text-alt text-red-500"> Description is required </span>}
                        </div>  
                        <input className='btn btn-info justify-center my-4 max-w-xs' type="submit" />
                        </form>
                    </div>  
            </div>
          
        </div>
        </div>
    );
};

export default AddProducts;