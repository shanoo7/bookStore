import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import Logout from '../Pages/Logout';
import { Link } from 'react-router-dom';

function Navbar() {

    const {setSearchTerm} = useAuth()

    const navItems = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/course'>Course</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
        </>

    )

    const [inputValue, setInputValue] = useState("");
    const { authUser } = useAuth()
    // console.log(authUser)

    const handleSearch = () => {
        setSearchTerm(inputValue)
        setInputValue("")
    }
    //Theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    //Sticky
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }

        }
        window.addEventListener("scroll", handleScroll)
        return (() => {
            window.removeEventListener("scroll", handleScroll)
        })
    }, []);



    return (
        <>
            <div className={`max-w-screen-2xl py-10  container mx-auto  px-4 dark:bg-slate-600 dark:text-white fixed top-0 left-0 right-0 z-50  ${sticky ? " shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                             
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-600 dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}

                            </ul>
                        </div>
                        <Link to="/" className=" text-xl">  <img className='w-12 h-12' src='banner.webp' alt='Bookstore logo'></img></Link>
                    </div>
                    <div className="navbar-end space-x-3 ">
                        {/* desktop mode */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu gap-3 menu-horizontal px-5">
                                {navItems}
                            </ul>
                        </div>
                        <div className='hidden md:block'>
                            <label className=" flex items-center gap-2">


                            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='' type="search" value={inputValue} required placeholder="Search" onChange={(e) => setInputValue(e.target.value)} />
</label>
                                <input type="text" value={inputValue} className="grow outline-none h-8 dark:bg-slate-700 dark:text-white border px-3 py-2 rounded" placeholder="Search" onChange={(e) => setInputValue(e.target.value)} />
                                <button onClick={handleSearch} aria-label="Search books"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-8 w-8 opacity-90">


                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />

                                </svg></button>
                            </label>
                        </div>
                        <div>
                            
                        </div>
                        {
                            authUser ? <Logout />
                                : <div>
                                    <Link to={"/login"}>  <button className='btn btn-sm btn-outline btn-success duration-300 min-w-20 text-center'>Login</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
