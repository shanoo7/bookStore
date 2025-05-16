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
            <div className={`max-w-screen-2xl container mx-auto  px-4 dark:bg-slate-600 dark:text-white fixed top-0 left-0 right-0 z-50  ${sticky ? " shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <button
                                aria-label="Open navigation menu"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                        <Link to="/" className="btn btn-ghost text-xl">  <img className='w-12 h-auto' src='banner.webp' alt='Bookstore logo'></img></Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar;
