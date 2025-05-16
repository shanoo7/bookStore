import React from 'react'
import Banner from "../components/Banner"
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
               
                <Banner />
                <Suspense fallback={<h1 className='text-3xl text-green-500 flex flex-col animate-spin items-center mt-20'><AiOutlineLoading3Quarters /></h1>} >
                    <Freebook />
                </Suspense>
            </div>
        </>
    )
}

export default Home;
