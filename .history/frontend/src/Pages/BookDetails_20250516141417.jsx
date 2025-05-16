import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";

function BookDetails() {
  const navigate = useNavigate();
  const { selectedBook, handleBuy } = useAuth();

  if (!selectedBook) {
    return <h1 className="text-4xl text-center mt-10">No Book Selected</h1>;
  }

  const isFree = selectedBook.price > 0 || selectedBook.price === 0;

  return (
    <>
      <Helmet>
        <title>{selectedBook.name} | Course Details</title>
        <meta
          name="description"
          content={`Explore ${selectedBook.name}, a detailed course by ${selectedBook.author}`}
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className=" shadow-xl rounded-xl p-6 md:flex md:gap-10 flex-col md:flex-row">

          {/* Left: Image + Thumbnails */}
          <div className="md:w-1/2 w-full space-y-4">
            <div className="w-full overflow-hidden ">
              <img
                src={selectedBook.image}
                alt={selectedBook.name}
                className="w-[400px] h-[400px] rounded "
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Thumbnails */}
              {[1, 2, 3].map((_, i) => (
<div key={i} className=" border-2 border-slate-500 p-1 rounded">
                  <img
                  key={i}
                  src={selectedBook.image}
                  alt={`Preview ${i + 1}`}
                  className="rounded h-20 w-full"
                />
</div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 w-full flex flex-col justify-between mt-6 md:mt-0 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">{selectedBook.name}</h1>
              <p className="text-lg  mb-4">{selectedBook.title}</p>

              <ul className="text-sm  space-y-1">
                <li><strong>Author:</strong> {selectedBook.author || "Unknown"}</li>
                <li><strong>Category:</strong> {selectedBook.category}</li>
                <li><strong>Rating:</strong> ⭐ {selectedBook.rating || "4.5"}</li>
                <li><strong>Language:</strong> English</li>
                <li>
                  <strong>Price:</strong>{" "}
                  {isFree ? (
                    <span className="text-green-600 font-semibold">Free</span>
                  ) : (
                    <span className="text-red-600 font-semibold">₹{selectedBook.price}</span>
                  )}
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                   handleBuy(selectedBook)
                    
                }
                className={`px-6 py-2 rounded-lg text-white font-medium ${
                  isFree
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } transition duration-200`}
              >
                {isFree ? " Buy Now " : " Enroll for Free " }
              </button>

              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Extra Content Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700 text-sm">
              {selectedBook.description || "This course will help you learn new skills, build confidence, and grow in your career. Perfect for beginners and professionals alike."}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Understand the fundamentals of {selectedBook.name}</li>
              <li>Practical hands-on projects</li>
              <li>Build real-world applications</li>
              <li>Get certified after completion</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Internet access</li>
              <li>Willingness to learn</li>
              <li>No prior experience needed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;



// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import { useEffect, useState } from "react";

// function BookDetails() {
//   const navigate = useNavigate();
//   const { selectedBook, handleBuy } = useAuth();
//   const [book, setBook] = useState(selectedBook || null);

//   //LocalStorage
//   useEffect(() => {
//     // Set Item in localStorage
//     if (selectedBook) {
//       localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
//       setBook(selectedBook);
//     } else {
//       // Get Item in localStorage
//       const stored = localStorage.getItem("selectedBook");
//       if (stored) {
//         setBook(JSON.parse(stored));
//       }
//     }
//   }, [selectedBook]);

//   if (!book) {
//     return <h1 className="text-4xl text-center mt-10">No Book Selected</h1>;
//   }

//   const isFree = book.price === 0;

//   return (
//     <>
//       <Helmet>
//         <title>{book.name} | Course Details</title>
//         <meta
//           name="description"
//           content={`Explore ${book.name}, a detailed course by ${book.author}`}
//         />
//       </Helmet>

//       <div className="max-w-screen-xl mx-auto px-4 py-10">
//         <div className="shadow-xl rounded-xl p-6 md:flex md:gap-10 flex-col md:flex-row">

//           {/* Left: Image + Thumbnails */}
//           <div className="md:w-1/2 w-full space-y-4">
//             <div className="w-full overflow-hidden">
//               <img
//                 src={book.image}
//                 alt={book.name}
//                 className="w-[400px] h-[400px] object-cover rounded"
//               />
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               {[1, 2, 3].map((_, i) => (
//                 <div key={i} className="border-2 border-slate-500 p-1 rounded">
//                   <img
//                     src={book.image}
//                     alt={`Preview ${i + 1}`}
//                     className="rounded h-20 w-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Details */}
//           <div className="md:w-1/2 w-full flex flex-col justify-between mt-6 md:mt-0 space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold mb-1">{book.name}</h1>
//               <p className="text-lg mb-4">{book.title}</p>

//               <ul className="text-sm space-y-1">
//                 <li><strong>Author:</strong> {book.author || "Unknown"}</li>
//                 <li><strong>Category:</strong> {book.category}</li>
//                 <li><strong>Rating:</strong> ⭐ {book.rating || "4.5"}</li>
//                 <li><strong>Language:</strong> English</li>
//                 <li>
//                   <strong>Price:</strong>{" "}
//                   {isFree ? (
//                     <span className="text-green-600 font-semibold">Free</span>
//                   ) : (
//                     <span className="text-red-600 font-semibold">₹{book.price}</span>
//                   )}
//                 </li>
//               </ul>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={() =>
//                   isFree
//                     ? handleBuy(book)
//                     : navigate("/payment", { state: { book } })
//                 }
//                 className={`px-6 py-2 rounded-lg text-white font-medium ${
//                   isFree
//                     ? "bg-green-600 hover:bg-green-700"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 } transition duration-200`}
//               >
//                 {isFree ? "Buy Now" : "Enroll for Free"}
//               </button>

//               <button
//                 onClick={() => {
//                   localStorage.removeItem("selectedBook");
//                   navigate(-1);
//                 }}
//                 className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
//               >
//                 Back
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Extra Content */}
//         <div className="mt-10 grid gap-6 md:grid-cols-2">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">Overview</h2>
//             <p className="text-gray-700 text-sm">
//               {book.description || "This course will help you learn new skills, build confidence, and grow in your career. Perfect for beginners and professionals alike."}
//             </p>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
//             <ul className="list-disc list-inside text-sm text-gray-700">
//               <li>Understand the fundamentals of {book.name}</li>
//               <li>Practical hands-on projects</li>
//               <li>Build real-world applications</li>
//               <li>Get certified after completion</li>
//             </ul>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
//             <h2 className="text-xl font-semibold mb-2">Requirements</h2>
//             <ul className="list-disc list-inside text-sm text-gray-700">
//               <li>Internet access</li>
//               <li>Willingness to learn</li>
//               <li>No prior experience needed</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BookDetails;

