import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Cards({ item }) {
  // console.log(item)

 const {handleSelectedBook,handleBuy} = useAuth()
  return (
    <>
      <div className='my-4 p-3'>
        <div className="card w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              className="w-100 min-h-80 overflow-hidden rounded-lg cursor-pointer"
              src={item.image}
              onClick={()=>handleSelectedBook(item)}
              alt="not available" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className='text-sm'>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge py-4 px-4">${item.price}</div>
              <div onClick={()=>handleBuy()} className="badge badge-outline bg-pink-500 text-white py-4 px-2 cursor-pointer hover:bg-pink-700 duration:200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
