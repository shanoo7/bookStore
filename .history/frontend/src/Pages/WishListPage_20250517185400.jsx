// import { useAuth } from "../context/AuthProvider";
// import { Helmet } from "react-helmet-async";

// function Wishlist() {
//   const {
//     wishlistItems,
//     removeFromWishlist,
//     addToCart,
//     handleSelectedBook
//   } = useAuth();

//   return (
//     <>
//       <Helmet>
//         <title>Your Wishlist</title>
//       </Helmet>

//       <div className="max-w-screen-xl mx-auto py-10 px-4">
//         <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

//         {wishlistItems.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">Your wishlist is empty 💤</p>
//         ) : (
//           <div className=" flex flex-col gap-5">
//             {wishlistItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="border flex justify-evenly items-center gap-5 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full max-w-[100px] rounded mb-4 cursor-pointer"
//                   onClick={()=>handleSelectedBook(item)}
//                 />
//                 <h2 className="text-xl font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-600">{item.title}</p>
//                 <p className="text-lg font-bold text-green-600 mt-2">₹{item.price}</p>

//                 <div className="flex gap-2 mt-4">
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => removeFromWishlist(item._id)}
//                     className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Wishlist;

import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    addToCart,
    handleSelectedBook,
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 flex flex-col"
              >
                <div className="cursor-pointer" onClick={() => handleSelectedBook(item)}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                </div>

                <h2 className="text-lg font-semibold mb-1 line-clamp-1">{item.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.title}</p>
                <p className="text-md font-bold text-green-600 mb-4">₹{item.price}</p>

                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-1/2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-1/2"
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

