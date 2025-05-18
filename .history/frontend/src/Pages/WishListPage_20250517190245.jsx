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
          <p className="text-center text-gray-500 text-lg">
            Your wishlist is empty 💤
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-500 rounded-lg p-4 transition duration-300"
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
                  <p className="text-lg font-bold text-slate-600">₹{item.price}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto"
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

