'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Hero animation sequence
    timeline
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

    // Floating animation for background elements
    gsap.to('.hero-float', {
      y: -20,
      duration: 4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="hero-float absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="hero-float absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg" />
        <div className="hero-float absolute bottom-40 left-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl" />
        <div className="hero-float absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-400/10 rounded-full blur-xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-tight"
          >
            Transform Education
            <br />
            <span className="gradient-text-light text-glow">With AI Power</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <strong>Neuronix</strong> is a revolutionary AI-powered EdTech platform targeting Pakistan's growing education market.
            A complete SaaS solution generating sustainable revenue through innovative AI tutoring,
            teacher earnings, and comprehensive student management systems.
          </p>

          {/* Key metrics */}
          <div className="glass-card rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50M+</div>
                <div className="text-white/70 text-sm md:text-base">Students in Target Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.5B</div>
                <div className="text-white/70 text-sm md:text-base">Pakistan EdTech Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-white/70 text-sm md:text-base">Revenue Growth Potential</div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/buy" className="btn-primary text-lg px-12 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-center">
              Buy Now - $1,500
            </Link>
            <button className="btn-glass text-lg px-12 py-4 rounded-2xl font-semibold">
              View Demo
            </button>
          </div>

          {/* Value indicators */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Scalable SaaS Model</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>AI-Powered Technology</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Proven Market Demand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}