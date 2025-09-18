'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'education-minister',
      name: 'Dr. Sarah Ahmad',
      role: 'Former Director of Education',
      organization: 'Punjab Education Department',
      image: '/api/placeholder/100/100',
      content: 'Neuronix represents exactly the kind of innovative solution Pakistan\'s education sector needs. The AI-powered personalization addresses our most critical challenge - providing quality education at scale.',
      rating: 5,
      focus: 'Government Validation',
    },
    {
      id: 'investor-feedback',
      name: 'Ahmed Hassan',
      role: 'Managing Partner',
      organization: 'Karachi Tech Ventures',
      image: '/api/placeholder/100/100',
      content: 'We\'ve been looking for EdTech opportunities in Pakistan for years. Neuronix\'s comprehensive approach and proven AI technology make it the most compelling investment proposition we\'ve seen.',
      rating: 5,
      focus: 'Investment Potential',
    },
    {
      id: 'teacher-testimonial',
      name: 'Fatima Khan',
      role: 'Mathematics Teacher',
      organization: 'Lahore Grammar School',
      image: '/api/placeholder/100/100',
      content: 'The teacher earnings platform has transformed how I monetize my expertise. I\'ve increased my monthly income by 300% while reaching students I could never teach in traditional settings.',
      rating: 5,
      focus: 'Teacher Success',
    },
    {
      id: 'student-parent',
      name: 'Mohammad Ali',
      role: 'Parent & IT Professional',
      organization: 'Islamabad',
      image: '/api/placeholder/100/100',
      content: 'My daughter\'s performance improved dramatically with Neuronix\'s AI tutor. The personalized learning approach identified her weak areas and helped her excel in O-levels.',
      rating: 5,
      focus: 'Student Outcomes',
    },
    {
      id: 'school-admin',
      name: 'Principal Amna Tariq',
      role: 'School Principal',
      organization: 'Beacon House School System',
      image: '/api/placeholder/100/100',
      content: 'Implementing Neuronix across our campuses has streamlined operations and improved learning outcomes. The administrative tools and analytics have been game-changing.',
      rating: 5,
      focus: 'Institutional Impact',
    },
    {
      id: 'tech-expert',
      name: 'Dr. Usman Sheikh',
      role: 'AI Research Director',
      organization: 'LUMS Technology Innovation',
      image: '/api/placeholder/100/100',
      content: 'The AI algorithms powering Neuronix are genuinely sophisticated. This isn\'t just another EdTech platform - it\'s a technological breakthrough with real commercial potential.',
      rating: 5,
      focus: 'Technical Excellence',
    },
  ];

  const statistics = [
    { label: 'User Satisfaction', value: '96%', description: 'Extremely satisfied users' },
    { label: 'Learning Improvement', value: '+85%', description: 'Average grade improvement' },
    { label: 'Teacher Income Increase', value: '+250%', description: 'Revenue growth for educators' },
    { label: 'School Efficiency', value: '+40%', description: 'Administrative time savings' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Testimonial cards animation
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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

    // Statistics animation
    gsap.fromTo(
      '.stat-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text-light">Industry Leaders</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Leading educators, administrators, and technology experts validate
            Neuronix's potential to revolutionize Pakistan's education landscape.
          </p>
        </div>

        {/* Statistics */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-item glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Featured testimonial */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/80">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-blue-400 font-semibold">
                    {testimonials[activeTestimonial].organization}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-sm text-white/60 mb-2">Focus Area</div>
                <div className="text-lg font-bold text-white">
                  {testimonials[activeTestimonial].focus}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card glass-card p-6 rounded-2xl hover:glass transform transition-all duration-300 hover:scale-105 cursor-pointer ${
                activeTestimonial === index ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-start gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                  <div className="text-blue-400 text-sm font-medium">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Endorsed by Leading Organizations
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/80 font-semibold">Punjab Education Department</div>
              <div className="text-white/80 font-semibold">LUMS Technology Innovation</div>
              <div className="text-white/80 font-semibold">Beacon House School System</div>
              <div className="text-white/80 font-semibold">Karachi Tech Ventures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}