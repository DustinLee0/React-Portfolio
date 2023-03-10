import './Portfolio.css';
import { useState } from 'react';

// pages
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe'; 
import Projects from './components/pages/Projects'; 
import Contact from './components/pages/Contact';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Portfolio() {
  // use state to render page when nav links clicked
  const [page, setPage] = useState('home');

  const handlePageRender = page => {
    // console.log('handlepage render func hit: ')
    setPage(page);
  };

  const renderPage = () => {
    if (page === "home") {
      return <Home page={page} handlePageRender={handlePageRender} />;
    } else if (page === "about-me") {
      return <AboutMe />;
    } else if (page === "projects") {
      return <Projects />;
    } else if (page === "contact") {
      return <Contact />;
    } 

  }

  return (
    <div>
      <Navbar page={page} handlePageRender={handlePageRender} />
      <div id='main-card'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
