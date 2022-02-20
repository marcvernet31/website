import React from "react"
import Fade from "react-reveal/Fade"

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

const data = {
  "contactEmail": "mrcvs31@gmail.com"
}

const Footer = ({contactRef}) => {
  return (
    <div ref={contactRef} className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact Me</h1>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Button target="_blank" rel="noopener noreferrer" href="https://twitter.com/marc_uaiaiaia"> 
              <TwitterIcon/> 
            </Button>
            <Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marc-vernet/"> 
              <LinkedInIcon/> 
            </Button>
            <Button target="_blank" rel="noopener noreferrer" href="https://github.com/marcvernet31"> 
              <GitHubIcon/> 
            </Button>            
          </Stack>
          </div>
          <span>
            Made With ❤ by{" "}
            <a href="https://github.com/marcvernet31"> Myself</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
