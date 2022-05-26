import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // console.log(data)

         const url = `http://localhost:4000/review`
        //  const url = `https://peaceful-shore-76688.herokuapp.com/review`
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

                       
                            <div className="form-control  justify-center w-full max-w-xs">
                                    
                                    <input
                                    type="text"
                                    placeholder="Your Title"
                                    className="input input-bordered w-full max-w-xs"
                                     {...register("title", { required: true })} />
                                    {errors.title && "Title is required"}
                                    </div>  
                        <div className="form-control  justify-center w-full max-w-xs">
                                   
                        <input
                        type="text"
                        placeholder="Your name"
                        className="input input-bordered w-full max-w-xs"
                         {...register("name", { required: true })} />
                        {errors.name && "name is required"}
                        </div> 
                         
                        <div className="form-control  justify-center w-full max-w-xs">
                                   
                        <input
                        type="number"
                        placeholder="Your Ratings"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ratings", { required: true })} />
                        {errors.ratings?.type === 'required' && "Ratings is required"}
                        </div>
                        
                         <div className="form-control  justify-center w-full max-w-xs">
                                  
                        <input
                        type="text"
                        placeholder="Your Review"
                        className="input input-bordered w-full max-w-xs"
                         {...register("review", { required: true })} />
                        {errors.review && "Review is required"}
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