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
        <title>{selectedBook.name} | Course Details</title>
        <meta
          name="description"
          content={`Explore ${selectedBook.name}, a detailed course by ${selectedBook.author}`}
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-6 md:flex md:gap-10 flex-col md:flex-row">

          {/* Left: Image + Thumbnails */}
          <div className="md:w-1/2 w-full space-y-4">
            <div className="w-full overflow-hidden rounded-xl border shadow">
              <img
                src={selectedBook.image}
                alt={selectedBook.name}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Sample Thumbnails */}
              {[1, 2, 3].map((_, i) => (
                <img
                  key={i}
                  src={selectedBook.image}
                  alt={`Preview ${i + 1}`}
                  className="rounded object-cover h-20 w-full"
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 w-full flex flex-col justify-between mt-6 md:mt-0 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">{selectedBook.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{selectedBook.title}</p>

              <ul className="text-sm text-gray-700 space-y-1">
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
                  isFree
                    ? handleBuy(selectedBook)
                    : navigate("/payment", { state: { book: selectedBook } })
                }
                className={`px-6 py-2 rounded-lg text-white font-medium ${
                  isFree
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } transition duration-200`}
              >
                {isFree ? "Enroll for Free" : "Buy Now"}
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

