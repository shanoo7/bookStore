import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function BookDetails() {

  const navigate = useNavigate();
  const { selectedBook, handleBuy } = useAuth();


  if (!selectedBook) {
    return <h1 className="text-4xl text-center mt-10">No Book Selected</h1>;
  }

  return (
   <>
    <div className="max-w-screen-2xl h-screen pb-10  pt-5 container mx-auto md:px-20 px-4">
      <h1 className="text-3xl font-bold mb-4">{selectedBook.name}</h1>
      <p className="text-lg mb-6">{selectedBook.title}</p>
      <img
        src={selectedBook.image}
        alt={selectedBook.name}
        className="w-[300px] rounded object-cover mb-6"
      />
      <p className="text-lg text-justify mb-6">{selectedBook.description}</p>
      <button div onClick={() => handleBuy(selectedBook)} className=" mr-5 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 duration-200 cursor:pointer">Buy Now</button>
      <button onClick={() => navigate(-1)} className=' bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200 cursor:pointer'>back</button>
    </div>
   </>
  );
}

export default BookDetails;
