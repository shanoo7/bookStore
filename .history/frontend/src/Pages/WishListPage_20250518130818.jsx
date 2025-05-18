import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { BsCartFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    addToCart,
    handleSelectedBook
  } = useAuth();

  return (
    <>
      <Helmet>
        <title>Your Wishlist</title>
      </Helmet>

      <div className=" min-h-screen mx-auto py-10 mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your wishlist is empty
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-500 rounded p-4 transition duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100px]  rounded cursor-pointer"
                  onClick={() => handleSelectedBook(item)}
                />

                {/* Details */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="text-lg font-bold text-slate-400">₹{item.price}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-5 w-full md:w-auto justify-evenly md:justify-end">
                  <button
                    onClick={() => addToCart(item)}
                    className=" text-2xl"
                  >
                    <BsCartFill />
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className=" text-2xl text-red-600"
                  >
                    <RiDeleteBin4Fill />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist

