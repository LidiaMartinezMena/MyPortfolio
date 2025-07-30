import React, { useState } from "react";

import "./Work.css";
import MapImg from "../assets/map.png";
import Leadership from "../assets/Leadership.png";
import Testimonial from "../assets/testimonial.png";
import Modal from "./Modal";
import WorldMap from "./WorldMap/WorldMap";
import LeadershipSectionDesktop from "./LeadershipSection/LeadershipSectionDesktop";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import Portfolio from "../assets/portfolio.png";


const Work = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const projects = [
    {
      type: "React Component",
      title: "Interactive Map",
      description:
        "A responsive React component that displays a dotted world map with highlighted orange markers for different regions. A list of countries and regions (e.g., Colombia, Ecuador, Perú, Chile, etc.) is aligned alongside the map, allowing for a clear and modern representation of global presence or coverage.",
      tech: ["React", "Vite","CSS", "Responsive design", "React Spring"],
      image: MapImg,
      github: "https://github.com/LidiaMartinezMena/WorldMap.git",
      component: <WorldMap />,
      mobileUrl: "https://myproject.com/mobile",
    },
    {
      type: "React Component",
      title: "Leadership Grid",
      description:
        "A responsive React component displaying the company’s leadership team with grayscale portraits, names, roles, and LinkedIn links. The CEO is highlighted with a central mission statement. When you hover over the image, it darkens and a text appears at the bottom explaining each person's role in the company, adding an elegant interactive touch.",
      tech: ["React", "CSS", "Responsive design", "React Spring", "Figma"],
      image: Leadership,
      github: "https://github.com/LidiaMartinezMena/LeadershipSection.git",
      component: <LeadershipSectionDesktop />,
      mobileUrl: "https://myproject.com/mobile",
    },
    {
      type: "React Component",
      title: "Testimonials Slider",
      description:
        "A colorful and responsive React carousel component that displays user testimonials with profile images, quotes, star ratings, and navigation controls. Each slide features a distinct background, smooth transitions, and a clean layout optimized for user experience across devices. Ideal for showcasing customer feedback or reviews in a visually engaging way.",
      tech: ["React", "CSS", "Responsive design", "Framer Motion"],
      image: Testimonial,
      github: "#",
      component: <TestimonialCarousel />,
      mobileUrl: "https://myproject.com/mobile",
    },
    {
      type: "React Project",
      title: "Personal Developer Portfolio",
      description:
        "Designed and built a responsive portfolio website using React, showcasing my front-end development skills, UI/UX design, and animations with Framer Motion. Includes custom components, project modals, and a clean, accessible layout tailored for modern web standards.",
      tech: ["React", "CSS", "Responsive design", "Framer Motion"],
      image: Portfolio,
      github: "https://github.com/LidiaMartinezMena/MyPortfolio.git",
      component: "",
      mobileUrl: "https://myproject.com/mobile",
    },
  ];

 return (
    <section id="projects" className="work-section">
      <h2 className="section-title">
        Projects
        <span className="section-line"></span>
      </h2>

      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <i className="fab fa-github"></i>
                </a>

                <span
                  className="icon-link"
                  onClick={() => setOpenModalIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-desktop"></i>
                </span>

                {/*<a
                  href={project.mobileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <i className="fas fa-mobile-alt"></i>
                </a> */}

                <p className="featured-label">{project.type}</p>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">{project.description}</div>

              <ul className="project-tech">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              {openModalIndex === index && (
                <Modal onClose={() => setOpenModalIndex(null)}>
                  {project.component}
                </Modal>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 

export default Work;
