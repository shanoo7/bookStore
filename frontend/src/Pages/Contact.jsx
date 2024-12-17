import React from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>console.log(data)
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className="card bg-base-100 w-96 shadow-xl p-3 dark:bg-slate-600 dark:text-white">
        <h1 className='text-2xl'>Contact Us</h1>
        <div className='mt-3 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your name'
      {...register("name",{required:true})}
      />
      <br />
      {errors.name && <span className='text-red-500 dark:text-red-400 text-sm'>Name is required</span>}
      </div>
      <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email'
       {...register("email",{required:true})}
      />
      <br />
       {errors.email && <span className='text-red-500 dark:text-red-400 text-sm'>Email is required</span>}
      </div>
      <div className='mt-3 space-y-2'>
      <span>Message</span>
      <br />
      <textarea className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your name'
       {...register("message",{required:true})}
      />
      <br />
       {errors.message && <span className='text-red-500 dark:text-red-400 text-sm'>Message is required</span>}
      </div>
      <button className='mt-3 space-y-2 text-md bg-pink-500 text-white rounded hover:bg-pink-700 duration-200'>submit</button>
      </div>
     </form>
    </div>
    </>
  )
}

export default Contact
