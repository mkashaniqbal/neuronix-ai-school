'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'onboarding',
      number: '01',
      title: 'Platform Setup & Onboarding',
      duration: '2-4 weeks',
      description: 'Complete technical infrastructure deployment with comprehensive training programs for all stakeholders.',
      details: [
        'Cloud infrastructure deployment on AWS/Azure',
        'Custom branding and localization setup',
        'Administrator training and certification',
        'Beta testing with select user groups',
        'Performance optimization and security audit',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 'acquisition',
      number: '02',
      title: 'User Acquisition Strategy',
      duration: '1-3 months',
      description: 'Systematic customer acquisition through targeted marketing and strategic partnerships in Pakistan.',
      details: [
        'Digital marketing campaigns (Facebook, Google, TikTok)',
        'Partnership agreements with schools and coaching centers',
        'Influencer collaborations with education sector leaders',
        'Free trial programs for early adopters',
        'Referral incentive programs for rapid growth',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
    },
    {
      id: 'monetization',
      number: '03',
      title: 'Revenue Stream Activation',
      duration: '3-6 months',
      description: 'Sequential activation of multiple revenue streams to maximize platform profitability and user engagement.',
      details: [
        'Student subscription plans launch ($10-25/month)',
        'Teacher monetization program rollout',
        'School licensing packages ($500-2000/month)',
        'Premium features and add-on services',
        'Corporate training programs for institutions',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 'scaling',
      number: '04',
      title: 'Market Expansion & Scaling',
      duration: '6-12 months',
      description: 'Geographic expansion and feature enhancement to capture maximum market share across Pakistan.',
      details: [
        'Expansion to additional cities and regions',
        'AI algorithm improvements and personalization',
        'Mobile app development and optimization',
        'Advanced analytics and reporting features',
        'Integration with government education initiatives',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Steps animation
    gsap.fromTo(
      '.step-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Progress line animation
    gsap.fromTo(
      '.progress-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Auto-advance steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Implementation <span className="gradient-text-light">Roadmap</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Systematic approach to launching and scaling Neuronix in Pakistan's education market
            with proven methodologies and timeline projections.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative mb-20">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 rounded-full">
            <div
              className="progress-line w-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full origin-top"
              style={{ height: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-card relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}
              >
                {/* Step number indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                      currentStep >= index
                        ? 'bg-gradient-to-br from-blue-400 to-purple-600 text-white scale-110'
                        : 'bg-white/10 text-white/60 backdrop-blur-sm'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div
                    className={`glass-card p-8 rounded-3xl transform transition-all duration-500 cursor-pointer ${
                      currentStep === index
                        ? 'glass scale-105'
                        : 'hover:glass hover:scale-105'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <div className="text-blue-400 font-semibold">{step.duration}</div>
                      </div>
                    </div>

                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="glass-card rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projected Success Metrics
            </h3>
            <p className="text-xl text-white/80">
              Conservative estimates based on market analysis and industry benchmarks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">25K+</div>
              <div className="text-xl text-white mb-2">Active Students</div>
              <div className="text-white/60">Year 1 target</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">500+</div>
              <div className="text-xl text-white mb-2">Partner Schools</div>
              <div className="text-white/60">Institutional relationships</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">1.2M</div>
              <div className="text-xl text-white mb-2">Annual Revenue</div>
              <div className="text-white/60">USD projection Year 2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}