import Home from "./Pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./Pages/courses/Courses"
import Signup from "./Pages/Signup"
import Contacts from "./Pages/contacts/Contacts"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider"
import { useState } from "react"
import Abouts from "./Pages/abouts/Abouts"
import Login from "./Pages/Login"
import BookDetails from "./Pages/BookDetails"
import {HelmetProvider} from 'react-helmet-async'

function App() {
  const {authUser}=useAuth()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    <HelmetProvider>
      {/* jsx */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes className="mt-10">
          <Route path="/" element={<Home setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
          <Route path="/course" element={authUser?<Courses  />:<Navigate to={"/signup"}/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<Abouts/>} />  
          <Route path="/login" element={<Login/>} /> 
          <Route path="/book/:_id" element={<BookDetails/>} /> 
        </Routes>
        <Toaster/>
      </div>
      </HelmetProvider>

    </>
  )
}

export default App;
