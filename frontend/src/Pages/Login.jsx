import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Login() {
  const {register,handleSubmit}= useForm()
  const onSubmit =(data)=> console.log(data)
  return (
    <>
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-600 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   
    <h3 className="font-bold text-lg ">Login</h3>
    {/* email */}
    <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email'
      {...register("email",{required:true})}
       />
    </div>
    {/* password */}
    <div className='mt-3 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your password'
      {...register("password",{required:true})}
      />
    </div>
    {/* button */}
    <div className='flex justify-between mt-3 mx-3'>
      <button className='bg-pink-500 text-white hover:bg-pink-700 duration-200 rounded py-1 px-3'>Login</button>
      <p>not registered?<Link to={"/signup"}><span className='text-blue-500 hover:text-blue-700 duration-200 cursor-pointer'> signup</span></Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
