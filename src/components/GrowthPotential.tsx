'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GrowthPotential() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const growthAreas = [
    {
      id: 'ai-enhancement',
      title: 'AI Technology Roadmap',
      subtitle: 'Advanced AI capabilities driving market differentiation',
      content: {
        overview: 'Continuous AI advancement positions Neuronix as the most sophisticated EdTech platform in South Asia.',
        keyDevelopments: [
          'Natural Language Processing for Urdu and regional languages',
          'Computer Vision for automated assignment checking',
          'Predictive analytics for student performance optimization',
          'Voice-based AI tutoring with conversational capabilities',
          'Adaptive learning algorithms with emotional intelligence',
        ],
        marketImpact: 'These AI enhancements will create significant competitive moats and justify premium pricing models.',
        timeline: '12-24 months for full implementation',
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 'market-expansion',
      title: 'Geographic Market Opportunity',
      subtitle: 'Massive untapped market potential across South Asia',
      content: {
        overview: 'Pakistan represents just the starting point for a multi-billion dollar regional EdTech expansion strategy.',
        keyDevelopments: [
          'Bangladesh market entry: 165M population, $180B GDP',
          'India market penetration: Premium tier positioning',
          'Afghanistan educational reconstruction programs',
          'Middle East expansion targeting Pakistani expatriate communities',
          'Southeast Asia partnerships with educational institutions',
        ],
        marketImpact: 'Regional expansion could increase addressable market by 15x within 5 years.',
        timeline: '18-36 months for initial regional presence',
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 'global-edtech',
      title: 'Global EdTech Market Trends',
      subtitle: 'Riding the worldwide education technology revolution',
      content: {
        overview: 'Global EdTech market projected to reach $377B by 2028, with AI-powered solutions commanding premium valuations.',
        keyDevelopments: [
          'Personalized learning becoming standard expectation',
          'Government digital education initiatives worldwide',
          'Corporate training market integration opportunities',
          'International standardization and certification programs',
          'Cross-platform integration with global education systems',
        ],
        marketImpact: 'Global trends strongly favor AI-first EdTech platforms with proven scalability.',
        timeline: '24-48 months to establish global market presence',
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const marketMetrics = [
    { label: 'Global EdTech Market', value: '$377B', sublabel: 'By 2028' },
    { label: 'CAGR Growth Rate', value: '16.3%', sublabel: '2023-2028' },
    { label: 'AI EdTech Segment', value: '$25B', sublabel: 'Market size 2028' },
    { label: 'Pakistan Education Budget', value: '$8.1B', sublabel: 'Annual spending' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate metrics cards
    gsap.fromTo(
      '.metric-card',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate growth areas
    gsap.fromTo(
      '.growth-content',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.growth-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Auto-rotate tabs
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % growthAreas.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [growthAreas.length]);

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Growth <span className="gradient-text-light">Potential</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Neuronix is strategically positioned to capitalize on explosive growth
            in AI-powered education technology across multiple markets and verticals.
          </p>
        </div>

        {/* Market metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {marketMetrics.map((metric, index) => (
            <div key={index} className="metric-card glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-white/80 font-semibold mb-1">{metric.label}</div>
              <div className="text-white/60 text-sm">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Growth areas tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {growthAreas.map((area, index) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'btn-primary scale-105'
                  : 'btn-glass hover:scale-105'
              }`}
            >
              {area.title.split(' ')[0]} {area.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Active growth area content */}
        <div className="growth-content glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                  {growthAreas[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {growthAreas[activeTab].title}
                  </h3>
                  <p className="text-purple-400 text-lg font-semibold">
                    {growthAreas[activeTab].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {growthAreas[activeTab].content.overview}
              </p>

              <div className="flex items-center gap-4 text-white/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{growthAreas[activeTab].content.timeline}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Key Developments</h4>
                <div className="space-y-3">
                  {growthAreas[activeTab].content.keyDevelopments.map((development, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80">{development}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h5 className="text-lg font-bold text-white mb-3">Market Impact</h5>
                <p className="text-white/80 leading-relaxed">
                  {growthAreas[activeTab].content.marketImpact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scalability projection */}
        <div className="glass-card rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5-Year Scalability Projection
            </h3>
            <p className="text-xl text-white/80">
              Conservative growth estimates based on market penetration analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">250K+</div>
              <div className="text-xl text-white mb-2">Active Users</div>
              <div className="text-white/60">Year 3 projection</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">$12M</div>
              <div className="text-xl text-white mb-2">Annual Revenue</div>
              <div className="text-white/60">Year 5 conservative</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">85%</div>
              <div className="text-xl text-white mb-2">Market Share</div>
              <div className="text-white/60">Pakistan AI EdTech</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-3">50x</div>
              <div className="text-xl text-white mb-2">ROI Multiple</div>
              <div className="text-white/60">Investment return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}