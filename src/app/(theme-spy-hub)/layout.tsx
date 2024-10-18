
import React from 'react'
import Navbar from '../../theme-spy-hub-components/Navbar'
import Footer from '../../theme-spy-hub-components/Footer'
export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}