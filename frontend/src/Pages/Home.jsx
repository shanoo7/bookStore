import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { Suspense } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Freebook = React.lazy(() => import("../components/Freebook"))

function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div>
                <Navbar setSearchTerm={setSearchTerm} />
                <Banner />
                <Suspense fallback={<h1 className='text-3xl text-green-500 flex flex-col animate-spin items-center mt-20'><AiOutlineLoading3Quarters /></h1>} >
                    <Freebook searchTerm={searchTerm} />
                </Suspense>

                <Footer />
            </div>
        </>
    )
}

export default Home;
