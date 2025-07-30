// RedGlowCircle.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RedGlowCircle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(circleRef.current, {
            attr: { filter: 'url(#glow)' },
            duration: 0.6,
            ease: 'power1.inOut',
        }).to(circleRef.current, {
            attr: { filter: 'none' },
            duration: 0.6,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <svg width="300" height="300">
            <defs>
                <filter id="glow" x="-150%" y="-150%" width="400%" height="400%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feFlood floodColor="white" floodOpacity="10" result="glowColor" />
                    <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Fondo negro opcional */}
            <rect width="100%" height="100%" fill="black" />

            <circle
                ref={circleRef}
                cx="150"
                cy="150"
                r="10"
                fill="green"
            />
        </svg>
    );
};

export default RedGlowCircle;
