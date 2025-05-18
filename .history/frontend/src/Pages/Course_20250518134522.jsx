import { useEffect, useState } from 'react'
import axios from "axios"
import { Helmet } from 'react-helmet-async'
import Cards from '../components/Cards'
import { useAuth } from '../context/AuthProvider'
import { ImBook } from "react-icons/im";
function Course() {
  const [book, setBook] = useState([])
  const [filterBook, setFilterBook] = useState([])
 const {searchTerm} = useAuth();

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
      <div className='max-w-screen-2xl mx-auto'>
        <div className='pt-20  text-center'>
          <h1 className='text-sm sm:text-lg gap-2'>We are delighted to welcome you to our
            <span className='text-pink-500 flex inline-flex '> Book Haven! <p><ImBook/></p></span></h1>
          <p className='my-5 text-center'>
            Discover a world of knowledge, stories, and imagination. Find your next favorite book today!
          </p>
          <hr />
         
        </div>

        {
          book.length > 0 ?
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
