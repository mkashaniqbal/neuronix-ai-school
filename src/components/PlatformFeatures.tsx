'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'ai-tutor',
      title: 'AI-Powered Tutoring System',
      description: 'Advanced artificial intelligence provides personalized learning experiences adapted to Pakistani curriculum standards.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        '24/7 personalized AI tutoring',
        'Adaptive learning algorithms',
        'Multi-language support (Urdu/English)',
        'Real-time performance tracking',
      ],
      revenue: '$15-30 per student/month',
    },
    {
      id: 'teacher-earnings',
      title: 'Teacher Revenue Platform',
      description: 'Comprehensive system enabling educators to monetize their expertise through structured teaching programs.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      benefits: [
        'Course creation & monetization',
        'Automated payment processing',
        'Performance analytics dashboard',
        'Student engagement tracking',
      ],
      revenue: '20-30% revenue sharing',
    },
    {
      id: 'student-dashboard',
      title: 'Comprehensive Student Portal',
      description: 'Feature-rich dashboard providing students with complete learning management and progress tracking.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2V3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
        </svg>
      ),
      benefits: [
        'Interactive learning modules',
        'Progress tracking & analytics',
        'Assignment management',
        'Peer collaboration tools',
      ],
      revenue: 'Core platform engagement',
    },
    {
      id: 'live-sessions',
      title: 'Interactive Live Classes',
      description: 'High-quality video conferencing system designed specifically for educational interactions.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      benefits: [
        'HD video/audio quality',
        'Interactive whiteboard',
        'Screen sharing capabilities',
        'Session recording & replay',
      ],
      revenue: 'Premium feature tier',
    },
    {
      id: 'admin-panel',
      title: 'School Management System',
      description: 'Enterprise-grade administrative tools for educational institutions and school management.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      benefits: [
        'Student & teacher management',
        'Financial reporting & analytics',
        'Curriculum planning tools',
        'Parent communication portal',
      ],
      revenue: '$500-2000 per school/month',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Feature cards animation
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Auto-rotate active feature
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Platform <span className="gradient-text-light">Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Five integrated modules creating a comprehensive EdTech ecosystem
            with multiple revenue streams and exceptional user experience.
          </p>
        </div>

        {/* Features navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFeature === index
                  ? 'btn-primary scale-105'
                  : 'btn-glass hover:scale-105'
              }`}
            >
              {feature.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active feature display */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                  {features[activeFeature].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {features[activeFeature].title}
                  </h3>
                  <div className="text-green-400 font-semibold mt-1">
                    {features[activeFeature].revenue}
                  </div>
                </div>
              </div>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {features[activeFeature].description}
              </p>
              <div className="space-y-4">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Feature visualization */}
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center text-white">
                    {features[activeFeature].icon}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-lg floating" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-400/20 rounded-lg floating" />
                <div className="absolute top-1/2 left-4 w-6 h-6 bg-blue-400/20 rounded-full floating" />
              </div>
            </div>
          </div>
        </div>

        {/* All features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card glass-card p-6 rounded-2xl hover:glass transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{feature.title}</h4>
              </div>
              <p className="text-white/70 mb-3">{feature.description}</p>
              <div className="text-green-400 font-semibold text-sm">
                {feature.revenue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}