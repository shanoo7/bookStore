import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../../context/AuthProvider'
import Cards from '../components/Cards'
function Course() {
  const [book, setBook] = useState([])
  const [filterBook, setFilterBook] = useState([])
 const {searchTerm} = useAuth()

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-3-9rto.onrender.com/book")
        // console.log(res.data)
        setBook(res.data)
        setFilterBook(res.data)
      } catch (error) {
        // console.log(error)
      }
    }
    getBook();
  }, [])

  useEffect(() => {
      const result = book.filter((book) =>
        book.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
      );
      setFilterBook(result);
    }, [searchTerm, book]);
  // console.log(list)
  return (
    <>
      <Helmet>
        <title>Browse All Courses</title>
        <meta name="description" content="Explore our comprehensive collection of programming, design, and development courses." />
      </Helmet>
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
          book.length > 0 ?
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {filterBook.map((item) => (
                <div key={item._id} > {<Cards item={item} />}
                </div>
              ))}
            </div>
            : <div className="flex items-center justify-center my-10 py-10">
              <span className="bg-green-500 loading loading-spinner loading-lg"></span>
            </div>
        }

      </div>
    </>
  )
}

export default Course;
