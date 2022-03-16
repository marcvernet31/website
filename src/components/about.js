import React from "react"
import Fade from "react-reveal/Fade"

const About = ({aboutRef}) => {
  return (
    <div ref={aboutRef} className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
              <br></br>
              <br></br>
              {"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              <br></br>
              <br></br>
              {"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            </p>
          </div>
          <div className="image-wrapper">git push origin main
            <img src={"profile-modified.png"} alt="about" width="350" height="350"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
