"use client";

import { Portfolio } from "@/lib/services/portfolios-service";

interface HeroProps {
  portfolio: Portfolio;
}

export default function Hero({ portfolio }: HeroProps) {
  const profile = portfolio.profile;
  const image = profile.avatar || (profile as any).profilePhoto;

  return (
    <section className="min-h-[90vh] flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <div className="h-1 w-16 bg-black mb-8" />

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-xl text-gray-600 font-medium">
            {profile.title}
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
            {profile.bio}
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:border-gray-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end">
          {image ? (
            <img
              src={image}
              alt={profile.name}
              className="w-72 h-72 object-cover rounded-full shadow-lg border border-gray-200"
            />
          ) : (
            <div className="w-72 h-72 rounded-full bg-gray-100 flex items-center justify-center text-6xl font-bold text-gray-400 shadow-sm">
              {profile.name?.charAt(0)}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
