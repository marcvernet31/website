import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

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
            <Card sx={{  p:5, boxShadow: 5 }}>
              <p align="justify">
                {"Hey there! I'm Marc, i'm currently working in Amazon as a Business Intelligence Engineer and almost finished a Data Science degree at UPC university in Barcelona."}
                <br></br>
                <br></br>
                {"This website is created as a space to showcase projects that I did in a visual way, and I will be adding whatever things I do in the future. This website was also a good excuse to learn modern web development (I created the website completely from scratch!)."}
                <br></br>
                <br></br>
                {"Most of my old projects are data science and machine learning related but lately I have been obsessed with blockchain and website development. Some of these new blockchain projects are the ones I'm most proud of, because they come from independent self-learning in my free time."}
                <br></br>
                <br></br>
                {"Also, checkout"} <a target="_blank" href="https://marcvernet31.github.io/"> my old blog </a>
              </p>
            </Card>

          </div>
          <div className="image-wrapper">
            <img src={"profile-modified.png"} alt="about" width="350" height="350"></img>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
