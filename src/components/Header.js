import React from "react"
import Box from '@mui/material/Box';
import Fade from "react-reveal/Fade";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';
import LinkIcon from '@mui/icons-material/Link';
import StorageIcon from '@mui/icons-material/Storage';
import ShowChartIcon from '@mui/icons-material/ShowChart';


const Header = ({contactRef}) => {
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
            <Box sx={{p: 2}}>
              <Stack direction="row" spacing={2}>
                <Chip icon={<StorageIcon />} label="Data Engineering" variant="outlined" sx={{boxShadow: 3 }}/>
                <Chip icon={<ShowChartIcon />} label="Data Science" variant="outlined"  sx={{boxShadow: 3 }} />
                <Chip icon={<WebIcon />} label="Web Dev" variant="outlined" sx={{boxShadow: 3 }} />
                <Chip icon={<LinkIcon />} label="Blockchain" variant="outlined" sx={{boxShadow: 3 }} />
              </Stack>
            </Box>

          </Fade>
          <Fade bottom>
            <Box sx={{p: 2}}>

              <Button 
                variant="contained"
                onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}
                sx={{boxShadow: 8 }}
              >               
                CONNECT WITH ME
              </Button>
              </Box>

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
