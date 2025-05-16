import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const {authUser,setAuthUser}=useAuth();
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
      <button onClick={clickButton} className='btn-md border flex justify-center items-center btn-outline btn-error duration-300 min-w-20 py-3 text-center'>Logout</button>
    </div>
    </>
  )
}

export default Logout;
