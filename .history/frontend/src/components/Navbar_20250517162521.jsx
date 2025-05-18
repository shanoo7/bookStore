import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import Logout from '../Pages/Logout';
import { Link } from 'react-router-dom';
import { BsCartFill,BsHearts } from "react-icons/bs";


function Navbar() {

    const { setSearchTerm,cartItems } = useAuth()

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
            <div className={`max-w-screen-2xl py-3  container mx-auto  px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50  ${sticky ? " shadow-md bg-base-300 dark:bg-gray-700 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
                <div className="navbar">
                    <div className="navbar-start gap-3">
                        <div className="dropdown">
                            <button
                                aria-label="Open navigation menu"
                                className="flex lg:hidden"
                            >
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 hover:opacity-70 transition-all duration-300 ease-in-out"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
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

                        {/* search */}
                        <div className='hidden md:block'>

                            <label className="input max-h-10 border-none outline-none  flex justify-center items-center gap-3 dark:bg-slate-800 dark:text-white">
                                <svg onClick={handleSearch} className="h-[1em] opacity-50 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        </div>

                        {/* Cart icon */}
                        <div className='relative text-2xl cursor-pointer'>
                            <Link to={"/cart-page"}>
                            <BsCartFill/> 
                            <span className='text-xl absolute -top-2 left-7'>{cartItems.length}</span>
                            </Link>
                        </div>

                        <div className=' text-xl cursor-pointer text-red-700 mr-5'>
                            <BsHearts/>

                        </div>

                        <div>
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg
                                    className="swap-off h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 23 21"
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                >
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-on h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 23 21"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                >
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                        {
                            authUser ? <Logout />
                                : <div>
                                    <Link to={"/login"}> <button className='flex justify-center items-center btn-sm border btn-outline btn-success duration-300 min-w-24 rounded py-[18px] text-center'>Login</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
