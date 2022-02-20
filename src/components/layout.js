/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children, workRef, aboutRef, contactRef }) => {
  return (
    <>
      <Navbar workRef={workRef} aboutRef={aboutRef} contactRef={contactRef}></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
