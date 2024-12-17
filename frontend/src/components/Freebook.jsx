import React, { useEffect, useState } from 'react'
// import List from '../../public/list.json'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book")
        const data = res.data.filter((item) => item.category === "free")
        console.log(data)
        setBook(data)

      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [])

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum alias necessitatibus sapiente itaque vitae ea ut voluptas laboriosam ab harum.</p>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>

    </>
  )
}

export default Freebook
