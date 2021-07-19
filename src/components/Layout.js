import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Hero from "./Hero"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
    </>
  )
}

export default Layout
