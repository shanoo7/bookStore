// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
// import { Helmet } from "react-helmet-async";

// function BookDetails() {

//   const navigate = useNavigate();
//   const { selectedBook, handleBuy } = useAuth();


//   if (!selectedBook) {
//     return <h1 className="text-4xl text-center mt-10">No Book Selected</h1>;
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{selectedBook.name} Details</title>
//         <meta name="description" content={`Detailed information about ${selectedBook.name} - ${selectedBook.title}`} />
//       </Helmet>
//       <div className="max-w-screen-4xl h-screen py-20 container mx-auto ">
//         <h1 className="text-3xl font-bold mb-4">{selectedBook.name}jjjjjjjjjjj</h1>
//         <p className="text-lg mb-6">{selectedBook.title}</p>
//         <img
//           src={selectedBook.image}
//           alt={selectedBook.name}
//           className="w-[300px] rounded object-cover"
//           width={300}
//           height={300}
//         />
//         <p className="text-lg text-justify mb-6">{selectedBook.description}</p>
//         <button div onClick={() => handleBuy(selectedBook)} className=" mr-5 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 duration-200 cursor:pointer">Buy Now</button>
//         <button onClick={() => navigate(-1)} className=' bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200 cursor:pointer'>back</button>
//       </div>
//     </>
//   );
// }

// export default BookDetails;


import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";

function BookDetails() {
  const navigate = useNavigate();
  const { selectedBook, handleBuy } = useAuth();

  if (!selectedBook) {
    return <h1 className="text-4xl text-center mt-10">No Book Selected</h1>;
  }

  const isFree = !selectedBook.price || selectedBook.price === 0;

  return (
    <>
      <Helmet>
        <title>{selectedBook.name} | Book Overview</title>
        <meta name="description" content={`Learn more about ${selectedBook.name}, a course by ${selectedBook.author}.`} />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-6 md:flex gap-10">

          {/* Left - Image & Gallery */}
          <div className="md:w-1/2 space-y-4">
            <img
              src={selectedBook.image}
              alt={selectedBook.name}
              className="w-full max-w-md object-cover rounded-xl border"
            />

            <div className="grid grid-cols-3 gap-2">
              {/* Add preview thumbnails or mockups here */}
              <img src={selectedBook.image} alt="thumb" className="w-full rounded" />
              <img src={selectedBook.image} alt="thumb" className="w-full rounded" />
              <img src={selectedBook.image} alt="thumb" className="w-full rounded" />
            </div>
          </div>

          {/* Right - Summary and Actions */}
          <div className="md:w-1/2 flex flex-col justify-between space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedBook.name}</h1>
              <p className="text-lg text-gray-500 mb-4">{selectedBook.title}</p>

              <ul className="text-sm text-gray-600 space-y-1">
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

            {/* CTA Button */}
            <div className="mt-4 space-x-4">
              <button
                onClick={() => {
                  if (isFree) {
                    handleBuy(selectedBook); // Instantly enroll
                  } else {
                    // Navigate or show payment modal
                    navigate("/payment", { state: { book: selectedBook } });
                  }
                }}
                className={`px-6 py-2 rounded-lg text-white font-medium ${
                  isFree ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                } transition duration-200`}
              >
                {isFree ? "Enroll for FreeBuy Now" : ""}
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
      </div>
    </>
  );
}

export default BookDetails;

