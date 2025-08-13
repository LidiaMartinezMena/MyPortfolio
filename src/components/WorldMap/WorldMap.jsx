import './WorldMapSVG.css';
import BaseMap from "./assets/Map.svg?react";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const hotspots = [
    {
        id: 1,
        name: 'Colombia',
        country: 'USA',
        pipeline: '4Mha',
        projects: '2.36Gha',
        committed: '40Mha',
        cx: 205,
        cy: 283.132
    },
    {
        id: 2,
        name: 'Uruguay',
        country: 'Spain',
        pipeline: '2Mha',
        projects: '5.6Gha',
        committed: '25Mha',
        cx: 642.814,
        cy: 224
    },
    {
        id: 3,
        name: 'Perú',
        country: 'Spain',
        pipeline: '22Mha',
        projects: '2.56Gha',
        committed: '26Mha',
        cx: 503,
        cy: 283.517
    },
    {
        id: 4,
        name: 'Italy',
        country: 'Spain',
        pipeline: '1.65Mha',
        projects: '2Gha',
        committed: '29Mha',
        cx: 563,
        cy: 303.391
    },
    {
        id: 5,
        name: 'Spain',
        country: 'Spain',
        pipeline: '16Mha',
        projects: '26Gha',
        committed: '75Mha',
        cx: 324.055,
        cy: 482
    },
   
    
];

const WorldMap = () => {
    const [activeId, setActiveId] = useState(null);

    const itemRefs = useRef({});

    const handleClick = (id) => {
        setActiveId(id === activeId ? null : id);
        const el = itemRefs.current[id];
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    useEffect(() => {
        let current = 0;

        const pulse = () => {
            const id = hotspots[current].id;
            const flood = document.querySelector(`#pulseFlood-${id}`);
            if (!flood) return;

            gsap.fromTo(flood,
                { attr: { 'flood-opacity': 0 } },
                {
                    attr: { 'flood-opacity': 1 },
                    duration: 1,
                    ease: "power1.inOut",
                    onComplete: () => {
                        gsap.to(flood, {
                            attr: { 'flood-opacity': 0 },
                            duration: 1,
                            ease: "power1.inOut"
                        });
                    }
                });

            current = (current + 1) % hotspots.length;
        };

        const interval = setInterval(pulse, 1000);
        return () => clearInterval(interval);
    }, []);




    return (
        <div class="map-section">
            <div class="map-heading">
                <h2 class="map-title">Global Deforestation</h2>
            </div>
            <div className="svg-container">
                <svg viewBox="0 0 1106 667" className="map-svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <defs>
                            {hotspots.map((spot) => (
                                <filter
                                    key={spot.id}
                                    id={`glow-${spot.id}`}
                                    x="-150%"
                                    y="-150%"
                                    width="400%"
                                    height="400%"
                                >
                                    <feGaussianBlur stdDeviation="13" result="blur" />
                                    <feFlood
                                        floodColor="#93c5b2"
                                        floodOpacity="0"
                                        result="glowColor"
                                        id={`pulseFlood-${spot.id}`}
                                    />
                                    <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                                    <feMerge>
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            ))}
                        </defs>

                    </defs>

                    <BaseMap />
                    {hotspots.map((spot) => (
                        <circle
                            key={spot.id}
                            className={`hotspot hotspot-${spot.id}`}
                            cx={spot.cx}
                            cy={spot.cy}
                            r="6"
                            fill="white"
                            filter={`url(#glow-${spot.id})`}
                            onClick={() => handleClick(spot.id)}
                        />

                    ))}
                </svg>

                <div className="list-wrapper">
                    <ul className="region-list">
                        {hotspots.map((spot) => (
                            <li
                                key={spot.id}
                                ref={(el) => (itemRefs.current[spot.id] = el)}
                                className={`region-item ${activeId === spot.id ? 'highlight expanded' : ''}`}
                                onClick={() => handleClick(spot.id)}
                            >
                                <div className="list-item-header">
                                    {spot.name}
                                    {activeId === spot.id}
                                </div>

                                <div className={`spot-info ${activeId === spot.id ? 'visible' : ''}`}>
                                    <p><strong className="number">{spot.pipeline}</strong> Global tree cover loss</p>
                                    <p><strong className="number">{spot.projects}</strong> Global Natural Forest</p>
                                    <p><strong className="number">{spot.committed}</strong> Global Loss per Year</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default WorldMap;
