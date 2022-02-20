import React from "react"
import Fade from "react-reveal/Fade"


const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              <span role="img" aria-label="Emoji">
                👋👋👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {"Marc"}
              </h1>
              <h1>
                {" "}
                {"Vernet"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{"Data engineer | data science | web | blockchain"}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                "mrcvs31@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
