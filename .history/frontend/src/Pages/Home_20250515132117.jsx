import React from 'react'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { Suspense } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'
const Freebook = React.lazy(() => import("../components/Freebook"))

function Home() {

    return (
        <>
            <Helmet>
                <title>Home component</title>
                <meta name='description' content='this is the Banner page'></meta>
            </Helmet>
            <div>
                {/* <Navbar /> */}
                <Banner />
                <Suspense fallback={<h1 className='text-3xl text-green-500 flex flex-col animate-spin items-center mt-20'><AiOutlineLoading3Quarters /></h1>} >
                    <Freebook />
                </Suspense>

                <Footer />
            </div>
        </>
    )
}

export default Home;
