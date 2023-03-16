import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function Portfolio() {
  ////////////    PREVIOUS METHOD TO HANDLE RERENDER       ///////////////
  // // use state to render page when nav links clicked
  // const [page, setPage] = useState('home');

  // const handlePageRender = page => {
  //   // console.log('handlepage render func hit: ')
  //   setPage(page);
  // };

  // const renderPage = () => {
  //   if (page === "home") {
  //     return <Home page={page} handlePageRender={handlePageRender} />;
  //   } else if (page === "about-me") {
  //     return <AboutMe />;
  //   } else if (page === "projects") {
  //     return <Projects />;
  //   } else if (page === "contact") {
  //     return <Contact />;
  //   } 
  // }
  ////////////    PREVIOUS METHOD TO HANDLE RERENDER       ///////////////



  return (
    <Router>
      <div>
        <Navbar />
        <div id="main-card">
          {/* {renderPage()} */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
                        <Route
              path="/about-me"
              element={<AboutMe />}
            />
                        <Route
              path="/projects"
              element={<Projects />}
            />
                        <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Portfolio;
