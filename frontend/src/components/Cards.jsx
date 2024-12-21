import React from 'react'

function Cards({ item }) {
  console.log(item)
  return (
    <>
      <div className='my-4 p-3'>
        <div className="card w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge py-4 px-4">${item.price}</div>
              <div className="badge badge-outline bg-pink-500 text-white py-4 px-2 cursor-pointer hover:bg-pink-700 duration:200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
