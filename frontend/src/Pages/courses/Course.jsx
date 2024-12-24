import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from '../../components/Cards'
import { Link } from 'react-router-dom'
function Course() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-3-9rto.onrender.com/book")
        console.log(res.data)
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
          <h1 className='text-2xl md:text-4xl'>we are delighted to have <span className='text-pink-500'>Here ):</span></h1>
          <p className='mt-12 text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aliquid id vero tenetur, fugit voluptatum?
          </p>
          <Link to={"/"}>
            <button className='mt-8 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200 cursor:pointer'>back</button>
          </Link>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {book.map((item) => (
            <div key={item.id} >
              {<Cards item={item} />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Course;
