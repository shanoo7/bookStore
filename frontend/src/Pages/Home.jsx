import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Freebook from "../components/Freebook"

function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div>
                <Navbar setSearchTerm={setSearchTerm}/>
                <Banner />
                <Freebook searchTerm={searchTerm} />
                <Footer />
            </div>
        </>
    )
}

export default Home
