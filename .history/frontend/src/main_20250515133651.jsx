import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}/>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter router={router}r>
      <AuthProvider>
        <div>
          
        </div>
      </AuthProvider>
    </BrowserRouter>

  </StrictMode>
)
