'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-white text-2xl font-bold">Neuronix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('value-proposition')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Platform Value
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('growth')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Market Potential
            </button>
            <Link
              href="/buy"
              className="btn-primary px-6 py-3 rounded-xl font-semibold text-center"
            >
              Buy Now - $1,500
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 glass-card rounded-xl mt-4 p-6">
            <button
              onClick={() => scrollToSection('value-proposition')}
              className="block text-white/80 hover:text-white transition-colors w-full text-left"
            >
              Platform Value
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block text-white/80 hover:text-white transition-colors w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block text-white/80 hover:text-white transition-colors w-full text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block text-white/80 hover:text-white transition-colors w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('growth')}
              className="block text-white/80 hover:text-white transition-colors w-full text-left"
            >
              Market Potential
            </button>
            <Link
              href="/buy"
              className="btn-primary w-full px-6 py-3 rounded-xl font-semibold mt-4 text-center"
            >
              Buy Now - $1,500
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}