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
            <button onClick={() => workRef.current.scrollIntoView({behavior: 'smooth'})}>
              <h2>Work</h2>
            </button>
            <button onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>
              <h2>About</h2>
            </button>
            <button onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>
              <h2>Contact</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
