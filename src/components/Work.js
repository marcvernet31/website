import React from "react"
import { useState } from "react"

import Box from '@mui/material/Box';
import Fade from "react-reveal/Fade";
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const chips = ["All", "Blockchain", "Ethereum", "Solidity", "React", "Python", "Data Science", "WebDev", "Embedded devices", "C/C++", "Machine Learning", "Data Engineering", "Apache Spark"]

const projects = [
  {
    "title": "This website",
    "body": "This website itself it's a cool project. Developed with React and MaterialUI",
    "image": "website.png",
    "kind": ["All", "WebDev", "React"],
    "github_link": "",
    "demo_link": "",
    "live_demo": "true",
    "has_image": "true"
  },
  {
    "title": "Waveportal",
    "body": "Wave Portal is a blockchain message wall on the Rinkeby testnet. Users can writte any message throught a transaction that will be stored forever in the contract.",
    "image": "waveportal.png",
    "kind": ["All", "Blockchain", "Ethereum", "Solidity"],
    "github_link": "https://github.com/marcvernet31/waveportal",
    "demo_link": "https://waveportal-rinkeby.netlify.app/",
    "live_demo": "true" ,
    "has_image": "true"

  },
  {
    "title": "Colors NFT",
    "body": "Colors is a simple proof-of-concept NFT minting app. The NFT's are squares of a pseudo-random color chosen at the mint moment. Everything is generated on-chain.",
    "image": "colorNFT.png",
    "kind": ["All", "Blockchain", "Ethereum", "Solidity"],
    "github_link": "https://github.com/marcvernet31/ColorsNFT",
    "demo_link": "https://colorsquare-nft.netlify.app/",
    "live_demo": "true",
    "has_image": "true" 
  },
  {
    "title": "Reddit Scrapper",
    "body": "Reddit Scrapper is a tool to extract data from Reddit. It's used from a terminal and it's aimed to be an easy and relatively fast way to download massive quantities of text and metadata from any subreddit.",
    "image": "reddit.png",
    "kind": ["All", "Python", "Data Science"],
    "github_link": "https://github.com/marcvernet31/redditScrapper",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Bitcoin from scratch",
    "body": "This project is an attempt to code a DIY clone of Bitcoin with similar functionalities. The goal was to learn firsthand the inner working of cryptocurrency more than having a functional final product (which is absolutely not haha).",
    "image": "bitcoin.png",
    "kind": ["All", "Blockchain", "Python"],
    "github_link": "https://github.com/marcvernet31/bitcoin-from-scratch",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Bicing Visualizations",
    "body": "The aim of this project was to develop two sets of insightful visualizations for the Bicing Data. Bicing is the Barcelona bike sharing service. Both groups of visualizations were developed with Python's library Altair.",
    "image": "bicing.jpg",
    "kind": ["All", "Python", "Data Science"],
    "github_link": "https://github.com/marcvernet31/Bicing-Visualization",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "true"
 
  },
  {
    "title": "BicingBot",
    "body": "TheRealBicingBot, un bot de Telegram que permet obtenir informació en temps real sobre el servei del Bicing. ",
    "image": "bicing_bot.jpg",
    "kind": ["All", "Python", "Data Science"],
    "github_link": "https://github.com/marcvernet31/BicingBot",
    "demo_link": "",
    "live_demo": "",
    "has_image": "true" 
  },
  {
    "title": "CryptoBizum",
    "body": "Simple interface for sending Eth",
    "image": "cryptobizum.png",
    "kind": ["All", "Blockchain", "Ethereum", "Solidity"],
    "github_link": "https://github.com/marcvernet31/CryptoBizum",
    "demo_link": "https://cryptobizum.netlify.app/ ",
    "live_demo": "true" ,
    "has_image": "true"
  },
  {
    "title": "Door Opening",
    "body": "Door movement prediction",
    "image": "stm.jpg",
    "kind": ["All", "Python", "Embedded devices"],
    "github_link": "https://github.com/marcvernet31/door_opening",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "MNIST for smallcomputer",
    "body": "Handwritten digit recognition on an STM32F4 32-bit microcontroller integrated circuit",
    "image": "stm.jpg",
    "kind": ["All", "Embedded devices", "C/C++", "Machine Learning"],
    "github_link": "https://github.com/marcvernet31/MNIST-for-smallcomputer",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Small Neural Network",
    "body": "Mini neural network coded in C",
    "image": "nn.png",
    "kind": ["All", "Embedded devices", "C/C++", "Machine Learning"],
    "github_link": "https://github.com/marcvernet31/shmall_nn",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Polygon Calculator",
    "body": "Polygon Calculator is a project developed for the Algorithmic and Programming II class at UPC. The objective of this program is to provide an intuitive and easy way of doing different calculus related to polygon geometry from the computer terminal.",
    "image": "polygon.png",
    "kind": ["All", "C/C++"],
    "github_link": "https://github.com/marcvernet31/Polygon-Calculator",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Spark project",
    "body": "",
    "image": "spark.png",
    "kind": ["All", "Data Engineering", "Apache Spark", "Python", "Machine Learning"],
    "github_link": "https://github.com/marcvernet31/Spark---BDA",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "Kernel methods on cannabis microsatellite data",
    "body": "The main task is to classify cannabis plants into two groups: marijuana and hemp. This classification is made with microsatellite data from an open dataset.",
    "image": "kernel.png",
    "kind": ["All", "Python", "Data Science"],
    "github_link": "https://github.com/marcvernet31/Project-Kernel",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "true",
    "has_image": "false"
 
  },
  {
    "title": "SVM with AMPL",
    "body": "Support-Vector-Machine implementation for classification, with AMPL ",
    "image": "SVM.png",
    "kind": ["All", "Data Science"],
    "github_link": "https://github.com/marcvernet31/SVM-AMPL",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "false"
 
  },
  {
    "title": "MareNostrum HPC",
    "body": "NAS Parallel Benchmarks testing at MareNostrum Supercomputer (PSD class at GCED, UPC) ",
    "image": "marenostrum.jpg",
    "kind": ["All", "C/C++"],
    "github_link": "https://github.com/marcvernet31/Proyecto-HPC",
    "demo_link": "",
    "live_demo": "false",
    "has_image": "true"
 
  },
  {
    "title": "Fantasy Football",
    "body": " Project for AP3 class at UPC ",
    "image": "football.png",
    "kind": ["All", "C/C++"],
    "github_link": "",
    "demo_link": "",
    "live_demo": "",
    "has_image": "false"
 
  },
]

const ImgMediaCard = ({project}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {project.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.body}
        </Typography>
      </CardContent>
      <CardActions>
          <Button 
            size="small" variant="contained" 
            startIcon={<GitHubIcon/>}
            target="_blank"
            href={project.github_link}
          > 
            Github 
          </Button>
          {project.live_demo == "true" ? (          
            <Button 
              size="small" variant="contained" 
              startIcon={<OpenInBrowserIcon/>}
              target="_blank"
              href={project.demo_link}
            > 
              Live Demo 
            </Button>)
          :(<></>)}
      </CardActions>
    </Card>
  );
}

const Work = ({workRef={workRef}}) => {
  const [clickedChips, setClickedChips] = useState("All")  
  const chips_1 = chips.slice(0, Math.floor(chips.length/2))
  const chips_2 = chips.slice(Math.floor(chips.length/2), chips.length)

  return (
    <div ref={workRef} className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
          <Container>
            <Box sx={{ p: 2}} textAlign="center">
              <Box sx={{ p: 1}} textAlign="center">  
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  {chips_1.map((chip, index) => (
                    chip !== clickedChips ? 
                      (<Chip key={index} label={chip} onClick={() => setClickedChips(chip)}/>) 
                      : 
                      (<Chip key={index} label={chip} onClick={() => setClickedChips(chip)} variant="outlined" />) 
                  ))}
                </Stack>
              </Box>
              <Box sx={{ p: 1}} textAlign="center">  
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  {chips_2.map((chip, index) => (
                    chip !== clickedChips ? 
                      (<Chip key={index} label={chip} onClick={() => setClickedChips(chip)}/>) 
                      : 
                      (<Chip key={index} label={chip} onClick={() => setClickedChips(chip)} variant="outlined" />) 
                  ))}
                </Stack>
              </Box>

            </Box>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4} >
              {projects.map((project, index) => (
                project.kind.includes(clickedChips) ? 
                  (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <ImgMediaCard key={index} project={project}/>
                  </Grid>
                  )
                  :
                  (<></>)
              ))}
          </Grid>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Work
