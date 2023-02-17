export default function Navbar({ page, handlePageRender }) {
  return (
    <header className="nav">
      <nav className='nav-card'>
        <h1><a onClick={() => handlePageRender('home')} href='#home'>Dustin Lee</a></h1>
        <ul className="nav-links">
          <li className="nav-item"><a onClick={() => handlePageRender('about-me')} href='#about-me'>About Me</a></li>
          <li className="nav-item"><a onClick={() => handlePageRender('projects')} href='#projects'>Projects</a></li>
          <li className="nav-item"><a onClick={() => handlePageRender('contact')}href='#contact'>Contact</a></li>
          {/* TO BE ADDED */}
          {/* <li className="nav-item"><a href='#resume'>Resume</a></li> */}
        </ul>
      </nav>
    </header>
  )
}