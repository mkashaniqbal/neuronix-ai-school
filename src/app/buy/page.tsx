'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function BuyPage() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page entrance animation
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, []);

  const handleAcquireClick = () => {
    window.open('https://acquire.com', '_blank');
  };

  const handleContactClick = () => {
    window.open('mailto:investments@neuronix.ai?subject=Neuronix%20Platform%20Purchase%20Inquiry&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20purchasing%20the%20Neuronix%20platform%20for%20$1,500.%20Please%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThank%20you!', '_blank');
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-t from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container-custom py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white text-2xl font-bold">Neuronix</span>
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              ← Back to Home
            </Link>
          </nav>
        </header>

        {/* Main Banner Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div ref={bannerRef} className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
                NEURONIX
              </h1>
              <div className="text-2xl md:text-3xl text-gray-300 font-light mb-2">
                Complete AI-Powered EdTech Platform
              </div>
              <div className="text-xl text-gray-400">
                Ready for immediate deployment • Full source code included
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-12">
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl px-8 py-6 mb-6">
                <div className="text-6xl md:text-7xl font-black text-white mb-2">
                  $1,500
                </div>
                <div className="text-gray-300 text-lg">
                  One-time purchase • Lifetime ownership
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Complete Source Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Commercial License</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>No Recurring Fees</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={handleAcquireClick}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 text-xl font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">View on Acquire.com</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleContactClick}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-12 py-4 text-xl font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300"
              >
                Contact Seller
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
              <button
                onClick={handleDemoClick}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Schedule Demo
              </button>

              <span className="hidden sm:block">•</span>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>investments@neuronix.ai</span>
              </div>
            </div>

            {/* Value Highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">50M+</div>
                <div className="text-gray-400">Target Students</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$2.5B</div>
                <div className="text-gray-400">Market Size</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-gray-400">Growth Potential</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container-custom py-8 border-t border-white/10 mt-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Neuronix EdTech Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Pakistan's Premier AI EdTech Platform</span>
              <span>•</span>
              <span>Ready for Immediate Deployment</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}