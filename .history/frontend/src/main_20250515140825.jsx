import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthProvider } from "./context/AuthProvider.jsx";
import Home from './Pages/Home.jsx'

const [searchTerm, setSearchTerm] = useState("");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
  <Route index element={<Home   setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}/>

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
