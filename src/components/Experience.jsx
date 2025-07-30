import { useState } from "react";
import "./Experience.css";

const jobs = [
  {
    company: "Avvale",
    title: "Front-End Developer",
    date: "Nov 2023 – Present",
    bullets: [
      "Designed and developed mobile applications with a user-centered approach, ensuring seamless and intuitive user experiences.",
      "Created and customized WordPress websites, optimizing UI/UX for better engagement and accessibility.",
      "Developed and implemented custom SharePoint intranet solutions, integrating React-based components to enhance functionality and user interaction.",
      "Conducted user research, wireframing, and prototyping to refine and improve digital products",
    ],
  },
  {
    company: "ITV Fácil",
    title: "Salesforce Consultant",
    date: "Mar 2023 – Oct 2023",
    bullets: [
      "Development of an application to manage invoices, accounts, issues, and everything related to the management of the company. In the development phase, a declarative approach has been employed, working with flows, validation rules, creation of Lightning web components, customizing views with custom actions, and managing visibility. Aura components were also utilized. Integrations with linked APIs, scheduled jobs, and notifications were implemented. Security considerations were addressed using profiles and permission sets. Sales and Service Clouds. Additionally, business logic was developed using APEX, including triggers and SOQL queries. All of this following an Agile methodology.",
    ],
  },
  {
    company: "Lidia Creativa",
    title: "Founder",
    date: "Jul 2025 – Present",
    bullets: [
      "Created and developed Lidia Creativa, a personal brand offering custom web design and automation solutions for entrepreneurs and small businesses. Focused on building responsive, user-friendly websites using React, WordPress, and AI-powered tools to streamline workflows and boost digital presence.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = jobs[activeIndex];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        Experience
        <span className="section-line" />
      </h2>

      <div className="experience-content">
        <div className="tab-list">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          <h3 className="job-title">{activeJob.title}</h3>
          <p className="job-date">{activeJob.date}</p>
          <ul className="job-bullets">
            {activeJob.bullets.map((item, i) => (
              <li key={i}>▸ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
