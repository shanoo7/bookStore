import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Courses from "./Pages/Courses"
import Signup from "./Pages/Signup"
import Contacts from "./Pages/Contacts"

function App() {
  //js

  return (
    <>
      {/* jsx */}
      <div className="dark:bg-slate-600 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
      </div>

    </>
  )
}

export default App
