import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import "./OtherProjects.css";


const otherProjects = [
  {
    title: 'UX/UI',
    description: 'Visual prototypes, UI kits and app redesigns created with design tools like Figma and Zeplin. Focused on improving usability and aesthetics.',
    tech: ['Figma', 'Zeplin'],
    github: 'https://github.com/lidia/keep-clone',
  
  },
  {
    title: 'WordPress',
    description: 'Custom themes, plugin development and website builds using WordPress, JavaScript and CSS. Projects aimed at content-driven websites.',
    tech: ['WordPress', 'JavaScript', 'CSS'],
    github: 'https://github.com/lidia/octoprofile',
  
  },
  {
    title: 'Automations AI',
    description: 'Low-code automations with Make, n8n and Zapier integrated with OpenAI. Includes workflows for content creation, emails, and data processing.',
    tech: ['Make', 'n8n', 'OpenAI', 'Zapier'],
    github: 'https://github.com/lidia/octoprofile',

  },
  
  
];

export default function OtherProjects() {
  return (
    <section className="other-projects-section">
        <h2 className="section-title">
        Other Noteworthy Projects
        <span className="section-line"></span>
      </h2>   

      <div className="other-projects-grid">
        {otherProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-header">
               
              <div className="card-icons">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                )}
                
              </div>
            </div>
            <h3 className="other-projects-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="other-project-tech">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
