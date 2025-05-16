// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import { AuthProvider } from "./context/AuthProvider.jsx";
// import Home from './Pages/Home.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//   <Route index element={<Home/>}/>

//     </Route>
   
//   )
// )
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
  
      
        
//             <RouterProvider router={router}>
// <AuthProvider></AuthProvider>
//             </RouterProvider>
      
      
   

//   </StrictMode>
// )


import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
import App from './App';
import Home from './Pages/Home';
import Courses from './Pages/courses/Courses';
import Contacts from './Pages/contacts/Contacts';
import Signup from './Pages/Signup';
import Abouts from './Pages/abouts/Abouts';
import Login from './Pages/Login';
import BookDetails from './Pages/BookDetails';
import { HelmetProvider } from 'react-helmet-async';

// You can still manage searchTerm here if needed using context or props.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/course" element={<CoursesWrapper />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book/:_id" element={<BookDetails />} />
    </Route>
  )
);

// To handle auth in main.jsx, create a wrapper:
function CoursesWrapper() {
  const { authUser } = useAuth();
  return authUser ? <Courses /> : <Navigate to="/signup" />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <HelmetProvider>
        <RouterProvider router={router}>
 <AuthProvider></AuthProvider>
        </RouterProvider>
      </HelmetProvider>
   
  </StrictMode>
);

