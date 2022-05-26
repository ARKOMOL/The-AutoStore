import React from 'react';

const Blogs = () => {
    return (
   <div className='grid justify-center items-center '>
        <div class="card   bg-base-100 shadow-xl grid lg:grid-cols-3 ">
            <div class="card-body items-center text-center">
                <h1 className='text-2xl'>How will you improve the performance of a React Application?</h1>
                <p>
                    With React we can make  a single page application.we have to keep component state local where necessary.When we need code-splitting in React we better use  dynamic import.Windowing or list virtualization in React.We can setup our React components cleanly  to prevent unnecessary re-renders.

                </p>
            </div>
            <div class="card-body items-center text-center">
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p >
                    There are some types of manage state.
                    <ul>
                        <li><span >Global State:</span>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.We can use this when we are managing multiple components.</li>
                        <li><span >Server State:</span> This State are using from external server which is intigrated with our state UI.Server state is a simple concept where we cannot manage this with all of our local and global state</li>
                        <li><span >Local State :</span>  Local state is most often managed in React using the useState hook.Local state is data we manage in one or another component.Local state is needed whenever we are hide and show a modal.</li>
                        
                    </ul>
                </p>
            </div>
            <div class="card-body items-center text-center">
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the 'Prototype' of an object, we use Object.getPrototypeOf and Object.
                </p>
            </div>
             <div class="card-body items-center text-center">
                <h1 className='text-2xl'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
               <p>
                   Firstly we need to fetch the array from locally or a database.Then loop the whole array and find the require field.Then if we need show this in our UI we can do this.When we implement a search bar to find the require product by name we have to use condition like if condition.We can easily implement a search bar and find the prodcut by name with this method.
               </p>
            </div>
            <div class="card-body items-center text-center">
                <h1 className='text-2xl'>What is a unit test? Why should write unit tests?</h1>
               <p>
               Unit Testing is a type of software testing where individual units or components of a software are tested.It is done during the development by the developers for and applications.Unit Tests verify its correctness and isolate a section of code.A unity may be an method , procedure,module and individual funcition.Unit Testing is important because software developers sometimes try saving time doing minimal unit testing.
               </p>
            </div>
        </div>
</div>
        
    );
};

export default Blogs;