import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useAuth } from '../context/AuthProvider';


function Freebook() {
  const [book, setBook] = useState([])
  const [searchBook, setSearchBook] = useState([])
  const { searchTerm } = useAuth()

  // Free catagory data
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://bookstore-3-9rto.onrender.com/book")
        const data = res.data.filter((item) => item.category === "free")
        // console.log(data)
        setBook(data);
        const result = book.filter((book) => {
          return (
            book.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
          );
        });
        setSearchBook(result);

      } catch (error) {
        // console.log(error)
      }
    }
    getData();
  }, [searchTerm, book])



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-4xl py-5 container mx-auto md:px-10 px-5'>
        <h1 className='font-bold text-xl pb-2'>free offered courses</h1>
        <p className='text-justify mb-5'>Here, you can explore a wide range of free courses designed to enhance your skills and knowledge. Browse through our collection, find what interests you, and take your learning journey to the next level. Discover the joy of learning with just a click!</p>
        {
          searchBook.length >= 1 ?
            <div className='py-2'>
              <Slider {...settings}>
                {searchBook.map((item) => (
                  <div key={item._id}>
                    <Cards item={item} />
                  </div>
                ))}
              </Slider>
            </div>

            // Loading books
            :
            <div className="flex items-center justify-center my-10 py-10">
              <span className="bg-green-500 loading loading-spinner loading-lg"></span>
            </div>

        }
      </div>

    </>
  )
}

export default Freebook;
