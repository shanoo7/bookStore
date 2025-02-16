import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { name, email, phone, message } = data;
      const contactData = { name, email, phone, message };

      await axios.post("http://localhost:4000/contact", contactData);
      toast.success("Contact created successfully");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Internal server error");
    }
  }

  return (
    <>
    <Helmet>
            <title>Contact component</title>
            <meta name='description' content='this is the Contact page'></meta>
          </Helmet>
      <div className="flex items-center justify-center h-screen px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="items-center bg-base-100 shadow-xl p-6 dark:bg-slate-600 dark:text-white rounded-lg">
            <h1 className="text-2xl text-center">Contact Us</h1>
            <div className='mt-3 space-y-2'>
              <span>Name</span>
              <br />
              <input 
                type="text" 
                className='w-full p-2 rounded border outline-none dark:bg-slate-600 dark:text-white' 
                placeholder='Enter your name'
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className='text-red-500 dark:text-red-400 text-sm'>Name is required</span>}
            </div>

            <div className='mt-3 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email" 
                className='w-full p-2 rounded border outline-none dark:bg-slate-600 dark:text-white' 
                placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-500 dark:text-red-400 text-sm'>Email is required</span>}
            </div>

            <div className='mt-3 space-y-2'>
              <span>Phone</span>
              <br />
              <input 
                type="text" 
                className='w-full p-2 rounded border outline-none dark:bg-slate-600 dark:text-white' 
                placeholder='Enter your number'
                {...register("phone", { required: true })}
              />
              <br />
              {errors.phone && <span className='text-red-500 dark:text-red-400 text-sm'>Number is required</span>}
            </div>

            <div className='mt-3 space-y-2'>
              <span>Message</span>
              <br />
              <textarea 
                className='w-full p-5 rounded border outline-none dark:bg-slate-600 dark:text-white' 
                placeholder='Enter your message'
                rows="2"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && <span className='text-red-500 dark:text-red-400 text-sm'>Message is required</span>}
            </div>

            <button 
              type="submit" 
              className='mt-3 w-full py-2 text-md bg-pink-500 text-white rounded hover:bg-pink-700 duration-200'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
