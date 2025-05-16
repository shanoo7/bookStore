import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../context/AuthProvider';



function Banner() {
// const{setCategory,category,maxPrice,setMaxPrice} =useAuth()
    return (
        <>
            <Helmet>
                <title>Banner component</title>
                <meta name='description' content='this is the Banner page'></meta>
            </Helmet>

            <div className='max-w-screen-4xl  mx-auto md:px-20 px-4 flex md:flex-row flex-col'>
                <div className="w-full md:w-1/2 md:mt-32 mt-12 order-2 md:order-1">
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Welcome to  <span className='text-pink-500'>BookStore</span>
                        </h1>
                        <p className='text-xl font-bold'>Discover, explore, and purchase your favorite books easily. We're building a modern platform for all your reading needs!</p>
            
                        

                    </div>
                    <button className="btn btn-secondary mt-6">Get Started</button>
                </div>
                  <div className="w-full md:w-1/2 p-4 md:mt-32 mt-32  order-1">
                    <img className='w-full md:w-96 h-auto m-auto' src='banner.webp' alt='Bookstore banner showcasing'></img>
                </div>
            </div>
        </>
    )
}

export default Banner;
