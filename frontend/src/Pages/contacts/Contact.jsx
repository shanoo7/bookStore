import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const navigate = useNavigate()
    // const onSubmit=(data)=>{
    //   console.log(data)
    //   toast.success( "Thank you for contacting us! We'll get back to you soon"
    //   )
    // }
    const onSubmit = async(data)=>{
      try {
        const contactData = {
          name:data.name,
          email:data.email,
          phone:data.phone,
          message:data.message
        }
        await axios.post("http://localhost:4000/contact",contactData)
        toast.success("Contact created successfully")
        console.log(data)
      setTimeout(()=>{
        navigate("/")
      },2000)
      } catch (error) {
        toast.error("Internal server error")
        console.log("Internal server error" + error.message)
      }
    }
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className="card items-center bg-base-100 shadow-xl p-3 dark:bg-slate-600 dark:text-white">
        <h1 className='text-2xl'>Contact Us</h1>
        <div className='mt-3 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your name'
      {...register("name",{required:true})}
      />
      <br />
      {errors.name && <span className='text-red-500 dark:text-red-400 text-sm'>Name is required</span>}
      </div>
      <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" className='p-1  rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email'
       {...register("email",{required:true})}
      />
      <br />
       {errors.email && <span className='text-red-500 dark:text-red-400 text-sm'>Email is required</span>}
      </div>
      <div className='mt-3 space-y-2'>
      <span>phone</span>
      <br />
      <input type="text" className='p-1 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your number'
      {...register("phone",{required:true})}
      />
      <br />
      {errors.phone && <span className='text-red-500 dark:text-red-400 text-sm'>number is required</span>}
      </div>
      <div className='mt-3 space-y-2'>
      <span>Message</span>
      <br />
      <textarea className='w-full px-4 py-2 h-20 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your message'
       {...register("message",{required:true})}
      />
      <br />
       {errors.message && <span className='text-red-500 dark:text-red-400 text-sm'>Message is required</span>}
      </div>
      <button className='mt-3 w-full py-1 space-y-2 text-md bg-pink-500 text-white rounded hover:bg-pink-700 duration-200'>submit</button>
      </div>
     </form>
    </div>
    </>
  )
}

export default Contact
