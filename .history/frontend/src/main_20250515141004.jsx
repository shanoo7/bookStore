import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import { AuthProvider, useAuth } from "./context/AuthProvider.jsx";
import Home from './Pages/Home.jsx'
import Courses from './Pages/courses/Courses.jsx'

const [searchTerm, setSearchTerm] = useState("");
const authUser = useAuth()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
  <Route index element={<Home   setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}/>
  <Route path="/course" element={authUser?<Courses  />:<Navigate to={"/signup"}/>} />

    </Route>
   
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      
        
            <RouterProvider router={router}>
<AuthProvider></AuthProvider>
            </RouterProvider>
      
      
   

  </StrictMode>
)
