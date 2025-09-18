'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BackgroundElements() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;

      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 20000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 2000);

    // Initial burst of particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/20 to-blue-900/30 animate-pulse" />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="particles fixed inset-0 z-[-1]" />

      {/* Large decorative elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="parallax-slow absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="parallax-fast absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="parallax-slow absolute -bottom-40 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </>
  );
}