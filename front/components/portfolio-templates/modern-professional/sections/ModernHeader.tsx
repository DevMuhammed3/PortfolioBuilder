"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface Props {
  portfolio: Portfolio;
}

export default function ModernHeader({ portfolio }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-semibold text-gray-900">
          {portfolio.profile.name}
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-500">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
