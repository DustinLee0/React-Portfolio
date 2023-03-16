import { Link } from "react-router-dom";

export default function Navbar({ page, handlePageRender }) {
  return (
    <header className="nav">
      <nav className='nav-card'>
        <h1><Link to="/">Dustin Lee</Link></h1>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/about-me">About Me</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
          <li className="nav-item"><Link to="/contact">Contact Me</Link></li>
          {/* TO BE ADDED */}
          {/* <li className="nav-item"><a href='#resume'>Resume</a></li> */}
        </ul>
      </nav>
    </header>
  )
}