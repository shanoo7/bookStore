import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from '../../components/Cards'
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Course() {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true)
        const res = await axios.get("https://bookstore-3-9rto.onrender.com/book")
        console.log(res.data)
        setLoading(false)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  // console.log(list)
  return (
    <>
      <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4'>
        <div className='pt-20 item-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We are delighted to welcome you to our
            <span className='text-pink-500'> Book Haven! 📚</span></h1>
          <p className='mt-12 text-center'>
            Discover a world of knowledge, stories, and imagination. Find your next favorite book today!
          </p>
          <Link to={"/"}>
            <button className='mt-8 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200 cursor:pointer'>back</button>
          </Link>
        </div>
        {
          loading ? <h1 className='text-3xl text-green-500 flex flex-col animate-spin items-center mt-20'><AiOutlineLoading3Quarters /></h1> : <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {book.map((item) => (
              <div key={item.id} > {<Cards item={item} />}
              </div>
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default Course;
