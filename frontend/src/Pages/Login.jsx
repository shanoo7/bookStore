import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  // const onSubmit =(data)=> {
  //   console.log(data)
  // }
  const navigate = useNavigate();
  const onSubmit = async (data) => {

    try {
      const sendData = {
        email: data.email,
        password: data.password
      }
      const res = await axios.post("https://bookstore-3-9rto.onrender.com/user/login", sendData)

      if (res.data) {
        toast.success("user login successfully")
        navigate("/")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }

      localStorage.setItem("Users", JSON.stringify(res.data.user))
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error("error occurred")
      }
    }
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}


        <div className="modal-box dark:bg-slate-600 dark:text-white w-full max-w-sm overflow-auto">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>

            <h3 className="font-bold text-lg ">Login</h3>
            {/* email */}
            <div className='mt-3 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-3 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your password'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            {/* button */}
            <div className='flex justify-between mt-3 text-xs'>
              <button className='bg-pink-500 text-white hover:bg-pink-700 duration-200 rounded py-1 px-3'>Login</button>
              <p>not registered?<Link to={"/signup"}><span className='text-blue-500 hover:text-blue-700 duration-200 cursor-pointer'> signup</span></Link></p>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Login ;
