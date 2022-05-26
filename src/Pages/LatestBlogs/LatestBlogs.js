import React from 'react';

const LatestBlogs = () => {
    return (
        <div>
            <h1 className='text-2xl text-red-300'>Our Recent Posts</h1>
            <h1 className='text-4xl text-red-400'>Latest Posts</h1>
        <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="http://magento2.magentech.com/themes/sm_autostore/pub/media/magefan_blog/blo6.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p>22 june 2022</p>
                    <h2 class="card-title">MOVING FROM TICKET SYSTEM TO FORUM</h2>
                    
                    <div class="card-actions">
                    <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
             <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="http://magento2.magentech.com/themes/sm_autostore/pub/media/magefan_blog/blo1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p>01 may 2022</p>
                    <h2 class="card-title">8 IDEAS TO GET YOUR SITE READY</h2>
                    
                    <div class="card-actions">
                    <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
             <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="http://magento2.magentech.com/themes/sm_autostore/pub/media/magefan_blog/blo5.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p>10 june 2022</p>
                    <h2 class="card-title">HOW TO INSTALL MAGENTO ON XAMPP</h2>
                    
                    <div class="card-actions">
                    <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LatestBlogs;