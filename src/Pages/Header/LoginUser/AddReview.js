import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div >
            <h1 className='text-3xl text-yellow-500'>Add a review</h1>
        <div className='flex  justify-center items-center'>

                  {/* main */}
                <div class="card justify-center w-96 bg-base-100 shadow-xl">
                    
                    <div class="card-body items-center text-center">
                                            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control  justify-center w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                        <input
                        type="number"
                        placeholder="Your Ratings"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ratings", { required: true })} />
                        {errors.ratings?.type === 'required' && "Ratings is required"}
                        </div>

                        <div className="form-control  justify-center w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                        <input
                        type="text"
                        placeholder="Your Description"
                        className="input input-bordered w-full max-w-xs"
                         {...register("description", { required: true })} />
                        {errors.description && "Description is required"}
                        </div>  
                        <input className='btn btn-info justify-center my-4 max-w-xs' type="submit" />
                        </form>
                    </div>  
            </div>
          
        </div>
        </div>
    );
};

export default AddReview;