import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Cards({ item }) {
  // console.log(item)

  const { handleSelectedBook, handleBuy } = useAuth()
  return (
    <>
      <div className='my-4 p-3 border bg-red-400'>
        <div className="card w-92 shadow-xl hover:scale-105 duration-300">
          <figure>

            <img
              className="w-[200px] h-[200px]"
              src={item.image}
              alt={`Cover of ${item.name}`}
              width={200}
              height={200}
              onClick={() => handleSelectedBook(item)}
            />

          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className='text-xs'>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge py-4 px-4">${item.price}</div>
              <button onClick={() => handleBuy(item)} className="badge badge-outline bg-pink-500 text-white py-4 px-2 cursor-pointer hover:bg-pink-700 duration:200">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
