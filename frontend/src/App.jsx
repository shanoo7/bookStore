import Home from "./Pages/Home"
import {Route, Routes} from "react-router-dom"
import Courses from "./Pages/Courses"

function App() {
  //js

  return (
    <>
      {/* jsx */}
<div className="dark:bg-slate-600 dark:text-white">
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/course" element={<Courses/>}/>

</Routes>
</div>

    </>
  )
}

export default App
