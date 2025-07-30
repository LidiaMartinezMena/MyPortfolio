import React from "react";
import "./LeadershipSectionDesktop.css";
import LinkedinIcon from "./assets/icons/LinkedinIcon.svg?react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";



const leaders = [
  {
    name: "Corina Larsen",
    role: "CEO",
    img: img1,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
    featured: true,
  },
  {
    name: "Jorge Pastor",
    role: "Chief commercial officer",
    img: img2,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
  {
    name: "Lucia Guerra",
    role: "Chief digital officer",
    img: img3,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
  {
    name: "Gemma Porch",
    role: "Chief strategy officer",
    img: img4,
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
    linkedin: "#",
  },
  {
    name: "Leire Martínez",
    role: "Chief Institutional",
    img: img5,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },

  {
    name: "Virginia Guzman",
    role: "Country manager Spain",
    img: img6,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
  {
    name: "Bárbara Alonso",
    role: "Chief Legal Officer",
    img: img7,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
  {
    name: "Manolo García",
    role: "Chief operations officer",
    img: img8,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association. ",
  },
  {
    name: "Guadalupe Mena",
    role: "Chief producer officer",
    img: img1,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
  {
    name: "Yaiza Mendoza",
    role: "Chief financial officer",
    img: img5,
    linkedin: "#",
    hoverText:
      "Long leadership career in the fhasion sector, notable roles include President and Chairman of the Board at the Inditex Association.",
  },
];

export default function LeadershipSectionDesktop() {
  // Líder destacado
  const featuredLeader = leaders.find((l) => l.featured);
  // Resto de miembros
  const otherLeaders = leaders.filter((l) => !l.featured);

  return (
    <section className="leadership-section-desktop">
      <div className="leader-title-desktop">Our Team</div>

      <div className="leaders-grid-desktop">
        {/* Primer cuadrado vacío */}
        <div className="leader-empty-desktop"></div>
        {/* LEADERS CARDS */}
        {featuredLeader && (
          <div className="leader-card-desktop leader-featured-desktop">
            <div className="leader-img-wrapper-desktop">
              <div className="leader-hover-gradient-desktop"></div>{" "}
              {/* ← Gradiente */}
              <img
                src={featuredLeader.img}
                alt={featuredLeader.name}
                className="leader-featured-img-desktop"
              />
              <div className="leader-hover-text-desktop">
                {featuredLeader.hoverText}
              </div>
            </div>
            <div className="leader-info-desktop">
              <div className="leader-left-desktop">
                <span className="leader-name-desktop">
                  {featuredLeader.name}
                </span>
                <p className="leader-role-desktop">{featuredLeader.role}</p>
              </div>
              <div className="leader-right-desktop">
                <LinkedinIcon className="leader-icon-desktop" />
              </div>
            </div>
          </div>
        )}

        {otherLeaders.map((leader, idx) => (
          <div className="leader-card-desktop" key={idx}>
            <div className="leader-img-wrapper-desktop">
              <div className="leader-hover-gradient-desktop"></div>{" "}
              {/* ← Gradiente */}
              <img
                src={leader.img}
                alt={leader.name}
                className="leader-img-desktop"
              />
              <div className="leader-hover-text-desktop">
                {leader.hoverText}
              </div>
            </div>
            <div className="leader-info-desktop">
              <div className="leader-left-desktop">
                <span className="leader-name-desktop">{leader.name}</span>
                <p className="leader-role-desktop">{leader.role}</p>
              </div>
              <div className="leader-right-desktop">
                <LinkedinIcon className="leader-icon-desktop" />
              </div>
            </div>
          </div>
        ))}

        {/* Texto lateral */}
        <div className="leadership-text-desktop">
          <p>
            From 2001 to 2024, there was a total of 517 Mha of tree cover loss a nivel mundial, equivalent to a 13% of the 2000 tree cover area, and 220 Gt of CO₂ emissions.
           This does not account for gains in tree cover over the same period.
          </p>
        </div>
      </div>
    </section>
  );
}
