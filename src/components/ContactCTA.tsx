'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    investment_range: '',
    timeline: '',
    message: '',
  });

  const investmentRanges = [
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M+',
  ];

  const timelines = [
    'Immediate (0-30 days)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Form animation
    gsap.fromTo(
      '.contact-form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Contact info animation
    gsap.fromTo(
      '.contact-info',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Floating elements
    gsap.to('.contact-float', {
      y: -15,
      duration: 4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.7,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="gradient-text-light">Acquire?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Complete AI-powered EdTech platform available for immediate purchase at $1,500.
            Full source code, commercial license, and lifetime ownership included.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/buy" className="btn-primary text-xl px-12 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              Buy Complete Platform - $1,500
            </Link>
            <button className="btn-glass text-xl px-12 py-4 rounded-2xl font-semibold">
              Schedule Demo Call
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Investment Opportunity
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Neuronix represents a unique opportunity to enter Pakistan's rapidly growing
                EdTech market with a proven AI-powered platform. Our comprehensive solution
                addresses critical educational gaps while generating sustainable revenue streams.
              </p>
            </div>

            {/* Investment highlights */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-6">Why Invest Now?</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">First-mover advantage</div>
                    <div className="text-white/70">Dominate Pakistan&apos;s AI EdTech market</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Scalable SaaS model</div>
                    <div className="text-white/70">Multiple revenue streams, high margins</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Massive market potential</div>
                    <div className="text-white/70">50M+ students, $2.5B market size</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Regional expansion ready</div>
                    <div className="text-white/70">South Asia & Middle East opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="contact-float glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>investments@neuronix.ai</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+92 300 123 4567</span>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="contact-float absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl" />
            <div className="contact-float absolute bottom-20 right-10 w-16 h-16 bg-purple-400/10 rounded-full blur-lg" />
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Investment Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Role/Position
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="CEO, Investor, Partner, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Investment Range
                    </label>
                    <select
                      name="investment_range"
                      value={formData.investment_range}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select range</option>
                      {investmentRanges.map((range) => (
                        <option key={range} value={range} className="bg-gray-800">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Investment Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} className="bg-gray-800">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder="Tell us about your investment interests and any questions you have about Neuronix..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-bold rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Investment Inquiry
                </button>

                <div className="text-center text-white/60 text-sm">
                  We typically respond to investment inquiries within 24 hours
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-custom mt-20 pt-12 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-white text-2xl font-bold">Neuronix</span>
          </div>
          <p className="text-white/60 mb-4">
            Transforming education through artificial intelligence
          </p>
          <div className="text-white/40 text-sm">
            © 2024 Neuronix EdTech Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}