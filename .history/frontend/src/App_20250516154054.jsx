import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen overflow-hidden ">
      <Navbar />
      <div className=' container mx-auto  px-5'>
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

