import React from 'react'
import { useAuth } from '../context/authProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const clickButton = ()=>{
        try {
            setAuthUser({...authUser,user:null})
            localStorage.removeItem("Users");
            toast.success("logout successfully")
            setTimeout(()=>{
               
                window.location.reload()
            },1000)
          
        } catch (err) {
            toast.error(err + err.message)
        }
    }

  return (
    <>
    <div>
      <button onClick={clickButton} className='bg-red-500 text-white rounded py-2 px-4'>Logout</button>
    </div>
    </>
  )
}

export default Logout
