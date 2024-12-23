import Home from "./Pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
// import Courses from "./Pages/Courses"
import Courses from "./Pages/courses/Courses"
import Signup from "./Pages/Signup"
import Contacts from "./Pages/contacts/Contacts"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/authProvider"
import { useState } from "react"
import Abouts from "./Pages/abouts/Abouts"
import Login from "./Pages/Login"

function App() {
  const {authUser}=useAuth()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* jsx */}
      <div className="dark:bg-slate-600 dark:text-white">
        <Routes>
          <Route path="/" element={<Home setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
          <Route path="/course" element={authUser?<Courses  />:<Navigate to={"/signup"}/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<Abouts/>} />  
          <Route path="/login" element={<Login/>} /> 
        </Routes>
        <Toaster/>
      </div>

    </>
  )
}

export default App
