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

  return (
    <>
      <Helmet>
        <title>{selectedBook.name} | Book Details</title>
        <meta
          name="description"
          content={`Detailed information about ${selectedBook.name} by ${selectedBook.author}. Learn more about this course and its contents.`}
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-xl p-6 md:flex gap-10">
          {/* Left Column - Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={selectedBook.image}
              alt={selectedBook.name}
              className="w-full max-w-xs h-auto object-cover rounded-lg border"
            />
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{selectedBook.name}</h1>
            <p className="text-lg text-gray-600">{selectedBook.title}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span><strong>Author:</strong> {selectedBook.author || "John Doe"}</span>
              <span><strong>Category:</strong> {selectedBook.category}</span>
              <span><strong>Rating:</strong> ⭐ {selectedBook.rating || "4.5"}</span>
              <span><strong>Price:</strong> {selectedBook.price ? `₹${selectedBook.price}` : "Free"}</span>
            </div>

            <div className="text-gray-700 text-justify">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p>{selectedBook.description}</p>
            </div>

            {/* Sample Section: What You'll Learn */}
            <div>
              <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Understanding the fundamentals of {selectedBook.name}</li>
                <li>Real-world applications and use-cases</li>
                <li>Step-by-step guided learning</li>
                <li>Downloadable resources included</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleBuy(selectedBook)}
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Buy Now
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;

