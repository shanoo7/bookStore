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

      <div className="max-w-screen-xl mx-auto mt-20">
        <div className=" rounded-xl md:flex md:gap-10 flex-col md:flex-row">

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
              <p className="text-lg text-slate-500  mb-4">{selectedBook.title}</p>

              <ul className="text-sm text-slate-500  space-y-1">
                <li><strong>Author:</strong> {selectedBook.author || "Unknown"}</li>
                <li><strong>Category:</strong> {selectedBook.category}</li>
                <li><strong>Rating:</strong> ⭐ {selectedBook.rating || "4.5"}</li>
                <li><strong>Language:</strong> English</li>
                <li>
                  <strong>Price:</strong>{" "}
                  {isFree ? (
                    <span className="text-green-600 font-semibold">₹{selectedBook.price}</span>
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
                className={`flex justify-center items-center btn-sm border btn-outline btn-success duration-300 min-w-24 rounded py-[18px] text-center`}
              >
                {isFree ? " Buy Now " : " Enroll for Free " }
              </button>

              <button
                onClick={() => navigate(-1)}
                className="flex justify-center items-center btn-sm border btn-outline border-slate-400 text-slate-500 duration-300 min-w-24 rounded py-[18px] text-center"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Extra Content Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className=" border border-slate-500 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-slate-500 text-sm">
              {selectedBook.description }
            </p>
            <p className="text-slate-500 text-sm py-5">
               "This course will help you learn new skills, build confidence, and grow in your career. Perfect for beginners and professionals alike.
            </p>
          </div>

          <div className="border border-slate-500 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
            <ul className="list-disc list-inside text-sm text-slate-500">
              <li>Understand the fundamentals of {selectedBook.name}</li>
              <li>Practical hands-on projects</li>
              <li>Build real-world applications</li>
              <li>Get certified after completion</li>
            </ul>
          </div>

          <div className="border border-slate-500 shadow-md rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-sm text-slate-500">
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
