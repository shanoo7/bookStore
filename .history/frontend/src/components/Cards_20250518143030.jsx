import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthProvider'
import { BsCartFill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";

function Cards({ item }) {


  const { handleSelectedBook, addToCart, wishlistItems, toggleWishlist } = useAuth();
  const isLiked = (id) => wishlistItems.some((wishItem) => wishItem._id === id);
  const navigate = useNavigate();
  
  return (
    <>
      <div className=' w-full p-5'>
        <div className="card w-100 h-80  shadow-md p-3 shadow-gray-400 hover:scale-105 duration-300">
          <figure>

            <img
              className="w-[150px] h-[120px] cursor-pointer"
              src={item.image}
              alt={`Cover of ${item.name}`}
              width={200}
              height={200}
              onClick={() => handleSelectedBook(item)}
            />

          </figure>
          <div className="card-body border">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className='text-xs'>{item.title}</p>
            <div className="card-actions border justify-evenly items-center text-[10px]">
              <div className="badge py-4 px-4">${item.price}</div>
              <button onClick={() => toggleWishlist(item)}><GoHeartFill className={` text-lg ${isLiked(item._id) ? " text-red-500" : ""}`} /></button>
              <button onClick={() => addToCart(item)}><BsCartFill className=' text-lg' /></button>

              <button onClick={() => { addToCart(item), navigate("/cart-page") }} className="badge border-none  badge-outline bg-pink-500  py-4 px-2 cursor-pointer hover:bg-pink-700 duration:200">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
