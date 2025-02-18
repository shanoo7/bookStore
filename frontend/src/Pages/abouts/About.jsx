import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
    <Helmet>
            <title>About component</title>
            <meta name='description' content='this is the About page'></meta>
          </Helmet>
    <div className="max-w-screen-4xl container mx-auto px-4 md:px-20 py-10 mt-10">
    <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
    <p className="text-lg text-justify leading-relaxed">
      Welcome to <span className="font-semibold text-blue-600">BookStore</span>, your one-stop destination for discovering a world of books. Our mission is to make reading accessible to everyone by offering a wide range of books, including free and premium collections, at your fingertips. Whether you're a casual reader, a student, or an avid book lover, we aim to provide a seamless and enriching experience for all.
    </p>
    <p className="mt-6 text-lg leading-relaxed">
      At <span className="font-semibold text-blue-600">BookStore</span>, we understand the power of stories and knowledge. Our carefully curated selection includes books from various genres, authors, and categories. With an easy-to-navigate platform and engaging features, we strive to make exploring and enjoying books a delightful journey.
    </p>
    <p className="mt-6 text-lg leading-relaxed">
      Thank you for choosing <span className="font-semibold text-blue-600">BookStore</span> as your trusted reading companion. Together, let's embark on a literary adventure and build a community of readers who share a love for books.
    </p>
  </div>
  </>
  );
}

export default About;
