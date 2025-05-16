import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthProvider.jsx";
import Home from './Pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
  <Route path='/home' element={<Home/>}/>

    </Route>
   
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      
        
            <BrowserRouter router={router}>
<AuthProvider></AuthProvider>
            </BrowserRouter>
      
      
   

  </StrictMode>
)
