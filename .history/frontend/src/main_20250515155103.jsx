import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthProvider.jsx';
import App from './App';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import BookDetails from './Pages/BookDetails';
import { HelmetProvider } from 'react-helmet-async';

import Contact from './Pages/Contact.jsx';
import Course from './Pages/Course.jsx';
import About from './Pages/About.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <AuthProvider>
        <App />
      </AuthProvider>
    }>
      <Route index element={<Home />} />
      <Route path="/course" element={<CoursesWrapper />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book/:_id" element={<BookDetails />} />
    </Route>
  )
);

// To handle auth in main.jsx, create a wrapper:
function CoursesWrapper() {
  const { authUser } = useAuth();
  return authUser ? <Course /> : <Navigate to="/signup" />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);

