import React, { Suspense } from 'react'
import Navbar from '../../components/Navbar'
const Course = React.lazy(() => import("./Course"))
import Footer from '../../components/Footer'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


function Courses() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Suspense fallback={<h1 className='text-3xl text-green-500 flex flex-col animate-spin items-center mt-20'><AiOutlineLoading3Quarters /></h1>} >
          <Course />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default Courses;
