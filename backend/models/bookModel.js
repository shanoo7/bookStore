import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    name: String,
    title: String,
    price: String,
    category: String,
    image: String
});

const Book = mongoose.model('Book',bookSchema);

export default Book ;