//import './App.css';

import Layout from "./components/layout"
//import SEO from "./components/seo"
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Footer from "./components/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import { Helmet } from "react-helmet";

import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useRef } from 'react';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#373737',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    success: {
      main: '#c46de5',
      darker: '#bc6adb'
    }
  },
});

function App() {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Helmet>
          <title> Marc Vernet </title>
          <meta name="Marc Vernet"  />
          <link rel="icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        </Helmet>
        <main>
          <Layout workRef={workRef} aboutRef={aboutRef} contactRef={contactRef}>
            {/* <SEO title="Marc Vernet Portfolio" /> */}
            <Header contactRef={contactRef}></Header>
            <Work workRef={workRef}></Work>
            <About aboutRef={aboutRef}></About>
            <Footer contactRef={contactRef}></Footer>
          </Layout>
        </main>
      </ThemeProvider>
  );
}

export default App;
