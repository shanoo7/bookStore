import React, { useEffect, useState } from 'react'
// import List from '../../public/list.json'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook({searchTerm}) {
  const [book, setBook] = useState([])
  const [filterBook,setFilterBook]=useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book")
        const data = res.data.filter((item) => item.category === "free")
        console.log(data)
        setBook(data)
        setFilterBook(data)

      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [])
  // useEffect(() => {
  //   const result = book.filter((book) =>
  //     book.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilterBook(result);
  // }, [searchTerm, book]);
  useEffect(() => {
    const result = book.filter((book) =>
      book.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );
    setFilterBook(result);
  }, [searchTerm, book]);

  // const filterData = List.filter((item) => item.category === "free")
  // console.log(filterData)

  const settings = {
    dots: true,
    infinite: false,
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
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='font-bold text-xl pb-2'>free offered courses</h1>
       {
        filterBook.length>=1? 
        <div>
<p>Here, you can explore a wide range of free courses designed to enhance your skills and knowledge. Browse through our collection, find what interests you, and take your learning journey to the next level. Discover the joy of learning with just a click!</p>

        <Slider {...settings}>
          {filterBook.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
        </div>
        :
        <h1 className='text-6xl text-center my-4 text-red-500'>No result found </h1>
       }
      </div>

    </>
  )
}

export default Freebook
