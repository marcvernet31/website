import React from "react"

const Navbar = ({workRef, aboutRef, contactRef}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => workRef.current.scrollIntoView({behavior: 'smooth'})}>Work</button>
            <button onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>About</button>
            <button onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
