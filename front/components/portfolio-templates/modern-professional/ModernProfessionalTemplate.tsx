"use client";

import { Portfolio } from "@/lib/services/portfolios-service";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ModernHeader from "./sections/ModernHeader";

interface Props {
  portfolio: Portfolio;
}

export default function ModernProfessionalTemplate({ portfolio }: Props) {
  return (
    <div className="bg-white text-gray-900">
      <ModernHeader portfolio={portfolio} />
      <Hero portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Skills portfolio={portfolio} />
      <Experience portfolio={portfolio} />
      <Projects portfolio={portfolio} />
      <Contact portfolio={portfolio} />
    </div>
  );
}
