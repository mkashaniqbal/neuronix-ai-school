'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animation timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '.value-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    // Floating animation for cards
    gsap.to('.value-card', {
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section
      id="value-proposition"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Turnkey <span className="gradient-text-light">SaaS Solution</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Neuronix delivers a complete EdTech ecosystem designed for immediate market entry
            and sustainable revenue generation in Pakistan's rapidly growing education sector.
          </p>
        </div>

        {/* Value propositions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Revenue Model */}
          <div className="value-card glass-card p-8 rounded-3xl hover:glass transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Multiple Revenue Streams</h3>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                Student subscriptions: $10-25/month
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                School licensing: $500-2000/month
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                Teacher revenue sharing: 10-20%
              </li>
            </ul>
          </div>

          {/* Scalability */}
          <div className="value-card glass-card p-8 rounded-3xl hover:glass transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Proven Scalability</h3>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                Cloud-native architecture
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                Auto-scaling infrastructure
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                Multi-tenant architecture
              </li>
            </ul>
          </div>

          {/* Market Opportunity */}
          <div className="value-card glass-card p-8 rounded-3xl hover:glass transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Market Leadership</h3>
            <ul className="text-white/80 space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                First-mover advantage in AI tutoring
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                Localized for Pakistani curriculum
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                Low competition in target segment
              </li>
            </ul>
          </div>
        </div>

        {/* Investment metrics */}
        <div className="glass-card rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment Opportunity
            </h3>
            <p className="text-xl text-white/80">
              Comprehensive financial projections demonstrate strong ROI potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$150K</div>
              <div className="text-white/70">Initial Investment</div>
              <div className="text-sm text-white/50 mt-1">Platform development & launch</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.5M</div>
              <div className="text-white/70">Year 3 Revenue</div>
              <div className="text-sm text-white/50 mt-1">Conservative estimate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-white/70">Net Margin</div>
              <div className="text-sm text-white/50 mt-1">Industry-leading profitability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">18mo</div>
              <div className="text-white/70">Break-even</div>
              <div className="text-sm text-white/50 mt-1">Rapid path to profitability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}