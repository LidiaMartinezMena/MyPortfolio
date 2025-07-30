import './Socials.css';


export default function Socials() {
  return (
    <>
      <div className="socials-left">
        <ul>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://codepen.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a></li>
        </ul>
      </div>

      <div className="email-right">
        <a>l.martinez.mena@gmail.com</a>
      </div>
    </>
  );
}
