import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}


  <div className="modal-box dark:bg-slate-600 dark:text-white">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
     <Link to={"/"}> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    </form>
    <h3 className="font-bold text-lg ">Sinup</h3>
    {/* name */}
    <div className='mt-3 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your name' />
    </div>
    {/* email */}
    <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your email' />
    </div>
    {/* password */}
    <div className='mt-3 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" className='py-1 px-3 rounded border outline-none dark:bg-slate-600 dark:text-white ' placeholder='Enter your password' />
    </div>
    {/* button */}
    <div className='flex justify-between mt-3 mx-3'>
      <button className='bg-pink-500 text-white hover:bg-pink-700 duration-200 rounded py-1 px-3'>Signup</button>
      <p>have account?<span className='text-blue-500 hover:text-blue-700 duration-200 cursor-pointer' onClick={()=>document.getElementById('my_modal_3').showModal()}> login</span></p>
    </div>
    <Login/>
  </div>

    </div>
    </>
  )
}

export default Signup
