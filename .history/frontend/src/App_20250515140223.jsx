// import Home from "./Pages/Home"
// import { Navigate, Outlet, Route, Routes } from "react-router-dom"
// import Courses from "./Pages/courses/Courses"
// import Signup from "./Pages/Signup"
// import Contacts from "./Pages/contacts/Contacts"
// import {Toaster} from 'react-hot-toast'
// import { useAuth } from "./context/AuthProvider"
// import { useState } from "react"
// import Abouts from "./Pages/abouts/Abouts"
// import Login from "./Pages/Login"
// import BookDetails from "./Pages/BookDetails"
// import {HelmetProvider} from 'react-helmet-async'
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

// function App() {
//   const {authUser}=useAuth()
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <>
//     <HelmetProvider>
//       {/* jsx */}
//       <div className="dark:bg-slate-900 dark:text-white">
//         <Navbar/>
//         <Outlet/>
//         <Footer/>
//         {/* <Routes>
//           <Route path="/" element={<Home setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
//           <Route path="/course" element={authUser?<Courses  />:<Navigate to={"/signup"}/>} />
//           <Route path="/contact" element={<Contacts />} />
//           <Route path="/signup" element={<Signup/>} />
//           <Route path="/about" element={<Abouts/>} />  
//           <Route path="/login" element={<Login/>} /> 
//           <Route path="/book/:_id" element={<BookDetails/>} /> 
//         </Routes> */}
//         <Toaster/>
//       </div>
//       </HelmetProvider>

//     </>
//   )
// }

// export default App;


import React from 'react'

function App() {
  return (
    <div>
      <h1>hhh</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi molestiae dolorem repellat incidunt quae fugiat voluptatibus sunt ab ipsum?</p>
    </div>
  )
}

export default App

