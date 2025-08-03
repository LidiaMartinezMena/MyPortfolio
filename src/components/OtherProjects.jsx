import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import "./OtherProjects.css";
import Modal from "./Modal";
import { useState } from "react";
import Salad from "../assets/salad.png";
import School from "../assets/colegio.png";
import App from "../assets/movil-App1.webp";
import volvo from "../assets/volvoWeb.png";
import casona from "../assets/casona.png";
import Automat1 from "../assets/automat1.jfif";
import Automat2 from "../assets/automat2.png";
import Automat3 from "../assets/automat3.png";

const otherProjects = [
  {
    title: "UX/UI",
    description:
      "Visual prototypes, UI kits and app redesigns created with design tools like Figma and Zeplin. Focused on improving usability and aesthetics.",
    tech: ["Figma", "Zeplin"],
    github: "https://github.com/lidia/keep-clone",
  },
  {
    title: "WordPress",
    description:
      "Custom themes, plugin development and website builds using WordPress, JavaScript and CSS. Projects aimed at content-driven websites.",
    tech: ["WordPress", "JavaScript", "CSS"],
    github: "https://github.com/lidia/octoprofile",
  },
  {
    title: "Automations AI",
    description:
      "Low-code automations with Make, n8n and Zapier integrated with OpenAI. Includes workflows for content creation, emails, and data processing.",
    tech: ["Make", "n8n", "OpenAI", "Zapier"],
    github: "https://github.com/lidia/octoprofile",
  },
];

const projectDetails = {
  "UX/UI": [
    {
      title: "UI Restaurant Design",
      description:
        "A modern, parallax-based landing page built for a salad restaurant. The design emphasizes clean visuals and smooth scroll animations to enhance the user’s appetite and trust.",
      image: Salad,
      figmaUrl:
        "https://www.figma.com/proto/M8xYkEOEez6XLaFuCSsRrK/Salad-Web?node-id=4010-169&p=f&t=DMsbICUbl7VBTBCv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2001%3A2",
    },
    {
      title: "School Web Design",
      description:
        "A colorful and engaging website designed for a primary school, featuring playful animations and easy-to-navigate sections for students and parents.",
      image: School,
      figmaUrl:
        "https://www.figma.com/proto/FbRgU0bEqjR9gHbhzT7RwY/web-colegio-Copernico?node-id=1015-329&t=QbGbIl2MyPgW5Arz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1015%3A329",
    },
    {
      title: "Mobile Prototype",
      description: "Created an interactive prototype for a hotel app.",
      image: App,
    },
  ],
  WordPress: [
    {
      title: "Interactive Website for Volvo EX90",
      description: "",
      image: volvo,
      figmaUrl:"https://lidiacreativedesigns.com/volvo-website/#"
    },
    {
      title: "Rural Getaway Website",
      description: "",
      image: casona,
      figmaUrl:"https://lidiacreativedesigns.com/casona-website/"
    },
    
  ],
  "Automations AI": [
    {
      title: "Smart Invoice Automation",
      description: "Automated invoice processing for a car repair shop using Make, OpenAI, and Dropbox. Emails with invoices are detected, key data extracted with AI, saved to Dropbox, and logged in Google Sheets, no manual work needed.",
      image: Automat1,
    },
    {
      title: "Automated Dental Quote Sender",
      description: "AI-driven automation that generates and sends personalized treatment quotes based on form responses — seamlessly connected via Google Sheets and OpenAI.",
      image: Automat2,
    },
    {
      title: "AI-Powered Diet Generator",
      description: "Automatically creates and sends personalized meal plans using form responses, OpenAI, and Google Sheets.",
      image: Automat3,
    },
  ],
};

export default function OtherProjects() {
  const [activeModal, setActiveModal] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <section className="other-projects-section">
      <h2 className="section-title">
        Other Noteworthy Projects
        <span className="section-line"></span>
      </h2>

      <div className="other-projects-grid">
        {otherProjects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setActiveModal(project.title)}
          >
            <div className="card-header"></div>
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

      {activeModal && (
        <Modal onClose={() => setActiveModal(null)}>
          {projectDetails[activeModal]?.map((item, i) => (
            <div className="modal-card" key={i}>
              <a href={item.figmaUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => {
                    if (item.title === "Mobile Prototype", "Smart Invoice Automation", "Automated Dental Quote Sender", "AI-Powered Diet Generator")
                      setExpandedImage(item.image);
                  }}
                  style={{
                    cursor: "pointer"
                  }}
                />
              </a>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </Modal>
      )}
      {expandedImage && (
        <div className="image-overlay" onClick={() => setExpandedImage(null)}>
          <img src={expandedImage} alt="Expanded view" />
        </div>
      )}
    </section>
  );
}
