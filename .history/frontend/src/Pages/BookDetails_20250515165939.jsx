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
        <title>{selectedBook.name} Details</title>
        <meta name="description" content={`Detailed information about ${selectedBook.name} - ${selectedBook.title}`} />
      </Helmet>
      <div className="max-w-screen-4xl h-screen py-20 container mx-auto ">
        <h1 className="text-3xl font-bold mb-4">{selectedBook.name}jjjjjjjjjjj</h1>
        <p className="text-lg mb-6">{selectedBook.title}</p>
        <img
          src={selectedBook.image}
          alt={selectedBook.name}
          className="w-[300px] rounded object-cover"
          width={300}
          height={300}
        />
        <p className="text-lg text-justify mb-6">{selectedBook.description}</p>
        <button div onClick={() => handleBuy(selectedBook)} className=" mr-5 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 duration-200 cursor:pointer">Buy Now</button>
        <button onClick={() => navigate(-1)} className=' bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200 cursor:pointer'>back</button>
      </div>
    </>
  );
}

export default BookDetails;
