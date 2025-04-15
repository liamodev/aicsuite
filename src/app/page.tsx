"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  
  const domains = [
    {
      name: "csuitestrategyai.com",
      description: "Perfect for AI strategy consulting services targeting C-Suite executives",
      features: ["Premium .com extension", "Clear branding", "Memorable & professional"]
    },
    {
      name: "ceostrategyai.com",
      description: "Directly targets CEO decision makers for AI strategy implementation",
      features: ["CEO-focused branding", "Premium .com extension", "Concise & impactful"]
    },
    {
      name: "csuitestrategy.ai",
      description: "Ultra-premium .ai extension specifically for C-Suite strategy services",
      features: ["Cutting-edge .ai extension", "C-Suite targeting", "Modern & innovative"]
    },
    {
      name: "ceostrategy.ai",
      description: "The ultimate CEO-focused domain with premium .ai extension",
      features: ["Shortest & most valuable", "Premium .ai extension", "Direct CEO targeting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#eef1ff] dark:from-[#0a0a14] dark:to-[#0f1029] text-[#171717] dark:text-[#f5f5f7]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
          Premium Domains
        </div>
        <a
          href="https://www.linkedin.com/in/liam-obrien/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-[#0a0a14] dark:bg-[#f5f5f7] text-[#f5f5f7] dark:text-[#0a0a14] font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Exclusive Package of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">Premium AI Strategy</span> Domains
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-[#4b5563] dark:text-[#a1a1aa]">
          A rare opportunity to acquire four highly valuable domain names specifically targeted for AI strategy consulting services to C-Suite executives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/liam-obrien/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Inquire About This Package
          </a>
          <button
            onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-[#3b82f6] text-[#3b82f6] font-medium hover:bg-[#3b82f6]/5 transition-colors"
          >
            View Domains
          </button>
        </div>
      </section>

      {/* Domain Showcase */}
      <section id="domains" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Domain Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => (
            <div
              key={domain.name}
              className="bg-white dark:bg-[#111122] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e7eb] dark:border-[#1f2937]"
              onMouseEnter={() => setIsHovered(domain.name)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isHovered === domain.name ? 'text-[#3b82f6]' : ''} transition-colors duration-300`}>
                {domain.name}
              </h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa] mb-6">
                {domain.description}
              </p>
              <ul className="space-y-2">
                {domain.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-[#3b82f6]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-20 bg-white dark:bg-[#111122] rounded-3xl my-20 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why These Domains Are Valuable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Targeting</h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa]">
                Directly targets C-Suite executives and CEOs, the key decision makers for enterprise AI strategy implementation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Extensions</h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa]">
                Includes both traditional .com domains and cutting-edge .ai extensions, providing maximum flexibility and brand protection.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Investment Value</h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa]">
                As AI continues to transform business strategy, these domains will only increase in value over time.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Market Positioning</h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa]">
                Instantly positions your business as a specialized, premium provider of AI strategy services to top executives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Package Price: $10,000</h2>
          <p className="text-lg md:text-xl mb-10 text-[#4b5563] dark:text-[#a1a1aa]">
            This exclusive package includes all four premium domains, providing complete market coverage and brand protection.
          </p>
          <a
            href="https://www.linkedin.com/in/liam-obrien/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Contact to Purchase
          </a>
          <p className="mt-6 text-sm text-[#6b7280] dark:text-[#9ca3af]">
            Serious inquiries only. Contact via LinkedIn for fastest response.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-[#e5e7eb] dark:border-[#1f2937] text-center text-[#6b7280] dark:text-[#9ca3af] text-sm">
        <p>© {new Date().getFullYear()} Premium Domain Package. All rights reserved.</p>
        <p className="mt-2">
          Contact: <a href="https://www.linkedin.com/in/liam-obrien/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">Liam O'Brien</a>
        </p>
      </footer>
    </div>
  );
}
