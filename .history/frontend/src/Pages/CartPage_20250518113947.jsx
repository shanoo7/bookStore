// import React from "react";

// const CartPage = ({ items = [], onRemove, onCheckout }) => {
//   const totalItems = items.length || 4;
//   const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 10;
//   const grandTotal = totalCost + shipping || 3000 ;

//   const dummyItems = [
//     {
//       name: "Luxe Card Holder",
//       code: "RF293",
//       image: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
//       price: 200,
//       quantity: 1,
//       details: "Height: 10 inches",
//       description: "Composition: 100% calf leather",
//       onQuantityChange: (index, newQty) => {
//         console.log(`Item ${index} quantity changed to`, newQty);
//       },
//     },
//     {
//       name: "Elegant Shoulder Bag",
//       code: "RF294",
//       image: "https://i.ibb.co/TTnzMTf/Rectangle-21.png",
//       price: 290,
//       quantity: 1,
//       details: "Height: 12 inches",
//       description: "Material: Vegan Leather",
//       onQuantityChange: (index, newQty) => {
//         console.log(`Item ${index} quantity changed to`, newQty);
//       },
//     },
//     {
//       name: "Classic Wallet",
//       code: "RF295",
//       image: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
//       price: 100,
//       quantity: 2,
//       details: "Compact and stylish",
//       description: "Soft-touch premium leather",
//       onQuantityChange: (index, newQty) => {
//         console.log(`Item ${index} quantity changed to`, newQty);
//       },
//     },
//   ];

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="sm:flex shadow-md border border-slate-500 my-10">
//         {/* Left: Cart Items */}
//         <div className="w-full sm:w-3/4 px-10 py-10">
//           <div className="flex justify-between border-b-2 border-slate-500 pb-8">
//             <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//             <h2 className="font-semibold text-2xl">{totalItems} Items</h2>
//           </div>

//           {/* Cart Items Loop */}
//           {dummyItems.map((item, index) => (
//             <div key={index} className="md:flex items-stretch py-8 border-t border-gray-50">
//               <div className="md:w-4/12 w-full">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-full object-cover object-center md:block hidden"
//                 />
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="md:hidden w-full h-full object-cover object-center"
//                 />
//               </div>

//               <div className="md:pl-3 md:w-8/12  flex flex-col justify-center">
//                 <p className="text-xs">#{item.code || "ITEM"}</p>
//                 <div className="flex items-center justify-between w-full">
//                   <p className="">{item.name}</p>
//                   <select
//                     value={item.quantity}
//                     className="py-2 px-1 border border-slate-500 rounded bg-transparent mr-6 focus:outline-none"
//                     onChange={(e) => item.onQuantityChange(index, parseInt(e.target.value))}
//                   >
//                     {[1, 2, 3, 4, 5].map((qty) => (
//                       <option className=" text-slate-500" key={qty} value={qty}>
//                         {qty < 10 ? `0${qty}` : qty}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <p className="text-xs text-slate-500 pt-2">{item.details || "Details unavailable"}</p>
//                 <p className="w-96 text-xs text-slate-500">{item.description || ""}</p>
//                 <div className="flex items-center justify-between pt-5">
//                   <div className="flex items-center">
//                     <p className="text-xs underline text-slate-500 cursor-pointer">Add to favorites</p>
//                     <p
//                       onClick={() => onRemove(index)}
//                       className="text-xs underline text-red-500 pl-5 cursor-pointer"
//                     >
//                       Remove
//                     </p>
//                   </div>
//                   <p className="text-base font-black text-slate-500">${item.price * item.quantity}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <button className="flex font-semibold text-indigo-600 text-sm mt-10">
//             <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
//               <path d="M134.059 296H436c6.627 0 12-5.373..." />
//             </svg>
//             Continue Shopping
//           </button>
//         </div>

//         {/* Right: Summary */}
//         <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
//           <h1 className="font-semibold text-2xl border-b-2 border-slate-500 pb-8">Order Summary</h1>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Items {totalItems}</span>
//             <span className="font-semibold text-sm">${totalCost}</span>
//           </div>

//           <div>
//             <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//             <select className="block p-2 text-slate-500 border-2 rounded border-slate-500 bg-transparent w-full text-sm">
//               <option>Standard shipping - ${shipping}.00</option>
//             </select>
//           </div>

//           <div className="py-10">
//             <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
//             <input
//               type="text"
//               placeholder="Enter your code"
//               className="p-2 text-sm text-slate-500 border-2 rounded border-slate-500 bg-transparent w-full"
//             />
//           </div>

//           <button className="bg-red-600 rounded hover:bg-red-700 px-5 py-2 text-sm text-white uppercase">
//             Apply
//           </button>

//           <div className="border-t mt-8">
//             <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//               <span>Total cost</span>
//               <span>${grandTotal}</span>
//             </div>
//             <button
//               onClick={onCheckout}
//               className=" bg-yellow-300 rounded text-black font-semibold hover:bg-yellow-400 py-3 text-sm uppercase w-full"
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


import { useAuth } from "../context/AuthProvider";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiPokerHeartsFill,RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useAuth();

  const navigate = useNavigate()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const grandTotal = totalCost + shipping;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    clearCart();
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md border border-slate-500 my-10">
        {/* Left: Cart Items */}
        <div className="w-full sm:w-3/4 px-10 py-10">
          <div className="flex justify-between border-b-2 border-slate-500 pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{totalItems} Items</h2>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 mt-6">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="md:flex items-stretch py-8 border-t border-slate-500">
                <div className="md:w-4/12 flex w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-1/2 object-center md:block hidden"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="md:hidden w-full h-full object-cover object-center"
                  />
                </div>

                <div className="md:pl-3 md:w-8/12 flex flex-col justify-center">
                  <p className="text-xs">#{item.code || "ITEM"}</p>
                  <div className="flex items-center justify-between w-full">
                    <p>{item.name}</p>
                    <select
                      value={item.quantity}
                      className="py-2 px-1 border border-slate-500 rounded bg-transparent mr-6 focus:outline-none"
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty < 10 ? `0${qty}` : qty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs text-slate-500 pt-2">{item.details || "Details unavailable"}</p>
                  <p className="w-96 text-xs text-slate-500">{item.description || ""}</p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center">
                      <p onClick={()=>addToCart(item)} className="text-lg cursor-pointer"><RiPokerHeartsFill/></p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="text-lg underline text-red-500 pl-5 cursor-pointer"
                      >
                        <RiDeleteBin4Fill/>
                      </p>
                    </div>
                    <p className="text-base font-black text-slate-500">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          <button onClick={()=>navigate(-1)} className="flex justify-center items-center gap-1 font-semibold text-slate-500 text-sm mt-10">
           <MdOutlineKeyboardBackspace className="text-xl"/>
            Continue Shopping
          </button>
        </div>

        {/* Right: Summary */}
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b-2 border-slate-500 pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {totalItems}</span>
            <span className="font-semibold text-sm">${totalCost}</span>
          </div>

          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-slate-500 border-2 rounded border-slate-500 bg-transparent w-full text-sm">
              <option>Standard shipping - ${shipping}.00</option>
            </select>
          </div>

          <div className="py-10">
            <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input
              type="text"
              placeholder="Enter your code"
              className="p-2 text-sm text-slate-500 border-2 rounded border-slate-500 bg-transparent w-full"
            />
          </div>

          <button className="bg-red-600 rounded hover:bg-red-700 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>

          <div className="border-t border-slate-500 mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${grandTotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-yellow-300 rounded text-black font-semibold hover:bg-yellow-400 py-3 text-sm uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

