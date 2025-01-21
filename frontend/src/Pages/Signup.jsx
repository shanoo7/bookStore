import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // const onSubmit=(data)=>console.log(data)
  const onSubmit = async (data) => {
    try {
      const { username, email, password } = data;
      const sendData = { username, email, password }
      const res = await axios.post("https://bookstore-3-9rto.onrender.com/user/signup", sendData)
      console.log(res.data)
      if (res.data) {
        toast.success("user created successfully")
      }
      navigate("/")

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("error occurred")
      }
    }

  };
  return (
    <>
      <div className='h-screen  flex justify-center items-center'>
        <div className="modal-box dark:bg-slate-600 dark:text-white">

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"}> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>

            <h3 className="font-bold text-lg ">Sinup</h3>
            {/* name */}
            <div className='mt-3 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your name'
                {...register("username", { required: true })}
              />
              <br />
              {errors.name && <span className='text-red-500 text-sm'>This filed is required</span>}
            </div>
            {/* email */}
            <div className='mt-3 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-500 text-sm'>This filed is required</span>}
            </div>
            {/* password */}
            <div className='mt-3 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your password'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-red-500 text-sm'>This filed is required</span>}
            </div>
            {/* button */}
            <div className='flex justify-between mt-3 text-xs'>
              <button className='bg-pink-500 text-white hover:bg-pink-700 duration-200 rounded py-1 px-3'>Signup</button>
              <p>have account?<Link to={"/login"}><span className='text-blue-500 hover:text-blue-700 duration-200 cursor-pointer'> login</span></Link></p>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default Signup;
