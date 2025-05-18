import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";

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

      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your wishlist is empty 💤</p>
        ) : (
          <div className="">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="border flex rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full rounded mb-4 cursor-pointer"
                  onClick={()=>handleSelectedBook(item)}
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.title}</p>
                <p className="text-lg font-bold text-green-600 mt-2">₹{item.price}</p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
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

export default Wishlist;
