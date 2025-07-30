import './About.css';
import profileImage from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="heading">
         About Me
        <span className="line"></span>
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Lidia and I enjoy creating things that live on the internet...
          </p>
          <p>
            Energetic and curious professional with 9 years of experience in the architectural industry, now focused on building accessible, user-friendly websites and automations powered by AI. 
          </p>
          <p>
            I currently work as a front-end developer using frameworks like React and Angular. Skilled in project and team management.
          </p>
          <p>
            Proficient in translating complex requirements into clear, visual, and effective digital solutions. 
          </p>
          <p>
            Highly motivated, ambitious, and able to perform under pressure.
          </p>

          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>React Native</li>
            <li>Angular</li>
            <li>Flutter</li>
            <li>Figma</li>
            <li>TypeScript</li>
            <li>WordPress</li>
            <li>Automations AI</li>
            
          </ul>
        </div>

        <div className="about-pic-wrapper">
        
          <img src={profileImage} alt="Lidia" className="about-img" />
        </div>
      </div>
     
  
        
    </section>
  );
};

export default About;
