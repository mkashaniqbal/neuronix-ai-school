'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import PlatformFeatures from '@/components/PlatformFeatures';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import GrowthPotential from '@/components/GrowthPotential';
import ContactCTA from '@/components/ContactCTA';
import Navigation from '@/components/Navigation';
import BackgroundElements from '@/components/BackgroundElements';
import ThreeJSVisualization from '@/components/ThreeJSVisualization';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations after component mount
    gsap.fromTo(
      '.animate-fade-in',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.animate-fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Parallax effect for background elements
    gsap.to('.parallax-slow', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to('.parallax-fast', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    // Global smooth scroll
    const lenis = {
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    // Enhanced page transition animations
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-glass');
    buttons.forEach((button) => {
      const buttonElement = button as HTMLElement;

      buttonElement.addEventListener('mouseenter', () => {
        gsap.to(buttonElement, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      buttonElement.addEventListener('mouseleave', () => {
        gsap.to(buttonElement, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      buttonElement.addEventListener('mousemove', (e) => {
        const rect = buttonElement.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(buttonElement, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      buttonElement.addEventListener('mouseleave', () => {
        gsap.to(buttonElement, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      });
    });

    // Section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Text reveal animation
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach((heading) => {
      const text = heading.textContent;
      if (text) {
        heading.innerHTML = text
          .split('')
          .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.fromTo(
          heading.querySelectorAll('.char'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.05,
            stagger: 0.02,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundElements />
      <ThreeJSVisualization />
      <Navigation />

      <main>
        <HeroSection />
        <ValueProposition />
        <PlatformFeatures />
        <HowItWorks />
        <Testimonials />
        <GrowthPotential />
        <ContactCTA />
      </main>
    </div>
  );
}