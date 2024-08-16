import Header from "@/components/Header"
import Hero from "@/components/Hero"
import React from "react"

type Props ={
    children : React.ReactNode 
}

const  Layout = ({ children }:Props) => {
    return(
        <div className="flex flex-col  min-h-screen">
            <Header/> 
            <Hero/>
            <div className=" container py-10 mx-auto flex-1">{children}</div>
        </div>
    )
}

export default Layout