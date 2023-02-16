export default function Navbar(props) {
    return (
        <nav className='nav-card'>
          <h1><a onClick={() => props.handlePageRender('home') } href='#home'>Dustin Lee</a></h1>
          <ul className="nav-links">
            <li className="nav-item"><a onClick={() => props.handlePageRender('about-me') } href='#about-me'>About Me</a></li>
            <li className="nav-item"><a href='#portfolio'>Portfolio</a></li>
            <li className="nav-item"><a href='#contact'>Contact</a></li>
            <li className="nav-item"><a href='#resume'>Resume</a></li>
          </ul>
        </nav>
    )
}