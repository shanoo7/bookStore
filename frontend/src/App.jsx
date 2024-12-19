import Home from "./Pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./Pages/Courses"
import Signup from "./Pages/Signup"
import Contacts from "./Pages/Contacts"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/authProvider"
function App() {
  const [authUser]=useAuth()

  return (
    <>
      {/* jsx */}
      <div className="dark:bg-slate-600 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to={"/signup"}/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Toaster/>
      </div>

    </>
  )
}

export default App
