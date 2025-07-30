// LeadershipSection.jsx
import React from "react";
import "./LeadershipSectionMobile.css";
import { ReactComponent as LinkedinIcon } from "../assets/icons/LinkedinIcon.svg";

const leaders = [
  {
    name: "Leo Moreno",
    role: "CEO",
    img: "/assets/LeadersImages/Leo1.png",
    linkedin: "#",
    hoverText:
      "Long leadership career in the energy sector, notable roles include President of AES Clean Energy and Chairman of the Board at the American Clean Power Association.",
    featured: true,
  },
  {
    name: "Iván Nieto",
    role: "Chief commercial officer",
    img: "/assets/LeadersImages/Ivan.png",
    linkedin: "#",
    hoverText:
      "Long leadership career in the energy industry in different roles in commercial, energy management, operations and digital at Total Energies, EDP, IBM and PricewaterhouseCoopers.",
  },
  {
    name: "Borja Guerrero",
    role: "Chief digital officer",
    img: "/assets/LeadersImages/Borja.png",
    linkedin: "#",
    hoverText:
      "Long career leading business transformation and management of business projects involving Digital and IT, with leading roles at GKN globally.",
  },
  {
    name: "Mikel Gutiérrez",
    role: "Chief strategy officer",
    img: "/assets/LeadersImages/Mikel.png",
    hoverText:
      "Extensive leadership career in renewable energy, automotive, aerospace and construction. Notable executive roles include CEO of Asebal and Ormazabal Germany.",
    linkedin: "#",
  },
  {
    name: "Scarlett Álvarez",
    role: "Chief Institutional & External Affairs Officer",
    img: "/assets/LeadersImages/Scarlet.png",
    linkedin: "#",
    hoverText:
      "Long leadership career in institutional management, external affairs, communications, and sustainability, including CEO of WiseConsulting and Executive VP at The AES Corporation, managing global stakeholders, governmental relations, sustainability and CSR initiatives.",
  },

  {
    name: "Luis Alvargonzalez",
    role: "Country manager Spain",
    img: "/assets/LeadersImages/Luis.png",
    linkedin: "#",
    hoverText:
      "25-year international career in Corporate Finance and Private Equity. Leading investments in renewable energy since 2011. Former Managing Director at Ferrovial Energy.",
  },
  {
    name: "Juan Antonio Garcia",
    role: "Chief Legal Officer",
    img: "/assets/LeadersImages/JuanAntonio.png",
    linkedin: "#",
    hoverText:
      "Formerly served as lawyer in Clifford Chance and PWC focusing on Finance and M&A; notable executive roles in Siemens Gamesa include General Counsel and Board Secretary.",
  },
  {
    name: "John Paul Larrañeta",
    role: "Chief operations officer",
    img: "/assets/LeadersImages/JohnPaul.png",
    linkedin: "#",
    hoverText:
      "Long leadership career at Siemens Gamesa including regional CEO role, with a consistent commitment to excellence, having delivered numerous projects across the world and overseen the service of large wind turbine fleets. ",
  },
  {
    name: "Stefano Breda",
    role: "Chief producer officer",
    img: "/assets/LeadersImages/Stefano.png",
    linkedin: "#",
    hoverText:
      "Played a key role at AES, originating and structuring 1+ GW of PPAs in South America, and held crucial positions at EDF and Noble Group in London, showcasing diverse expertise in the energy sector.",
  },
  {
    name: "Xavier Puig",
    role: "Chief financial officer",
    img: "/assets/LeadersImages/Xavier.png",
    linkedin: "#",
    hoverText:
      "Extensive international leadership career in the manufacturing and recycling sectors. Notable executive positions include various Group CFO and Managing Director roles in Spain and the UK.",
  },
];

export default function LeadershipSectionMobile() {
  // Líder destacado
  const featuredLeader = leaders.find((l) => l.featured);
  // Resto de miembros
  const otherLeaders = leaders.filter((l) => !l.featured);

  return (
    <section className="leadership-section-mobile">
      {/* Título opcional */}
      <div className="leader-title-mobile">Our leadership</div>

      {/* Tarjeta destacada (CEO) */}
      {featuredLeader && (
        <div className="leader-featured-mobile">
          <div className="leader-featured-img-wrapper-mobile">
            <LinkedinIcon className="leader-icon-mobile" />

            {/* ← Image */}
            <img
              src={featuredLeader.img}
              alt={featuredLeader.name}
              className="leader-featured-img-mobile"
            />
          </div>
          <div className="leader-info-mobile">
            <span className="leader-name-mobile">{featuredLeader.name}</span>
            <p className="leader-role-mobile">{featuredLeader.role}</p>
            <div className="leader-hover-text-mobile">
              {featuredLeader.hoverText}
            </div>
          </div>
        </div>
      )}

      {/* Grid de líderes */}
      <div className="leaders-grid-mobile">
        {otherLeaders.map((leader, idx) => (
          <div className="leader-card-mobile" key={idx}>
            <div className="leader-img-wrapper-mobile">
              <LinkedinIcon className="leader-icon-mobile" />

              {/* ← Image */}
              <img
                src={leader.img}
                alt={leader.name}
                className="leader-img-mobile"
              />
            </div>
            <div className="leader-info-mobile">
              <span className="leader-name-mobile">{leader.name}</span>
              <p className="leader-role-mobile">{leader.role}</p>
              <div className="leader-hover-text-mobile">{leader.hoverText}</div>
            </div>
          </div>
        ))}

        {/* Texto final */}
        <div className="leadership-text-mobile">
          <p>
            With an average of 20 years of experience and extensive backgrounds
            in the renewables sector, our senior executives drive our purpose to
            change the world by making decarbonization a reality for our
            partners.
            <br />
            By placing customers at the center of our activity and co-creating
            with them at the forefront of new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
