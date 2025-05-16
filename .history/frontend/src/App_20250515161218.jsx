import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen ">
      <Navbar />
     <div className=' container mx-auto py-10 md:px-5'>
       <Outlet />
     </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

