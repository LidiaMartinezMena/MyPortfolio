import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" ><a href="#hero">Lidia Martínez Mena</a></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="resume-btn">Resume</li>
      </ul>
    </nav>
  );
}

