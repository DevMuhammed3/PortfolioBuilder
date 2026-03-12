"use client";

import React from "react";
import { Portfolio } from "@/lib/services/portfolios-service";

export default function BentoDeveloperTemplate({ portfolio }: { portfolio: Portfolio }) {
  const profile = portfolio.profile || {} as any;
  const { skills, projects } = portfolio;

  return (
    <div className="min-h-screen bg-[#0f0f11] text-zinc-100 p-4 md:p-8 pt-20 md:pt-32 font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Header grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6">
          <div className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#10b981] mb-2">{profile.name || "Alex Chen"}</h1>
              <h2 className="text-xl md:text-3xl text-zinc-400 font-semibold">{profile.title || "Senior Full-Stack Developer"}</h2>
            </div>
            <p className="text-zinc-500 mt-8 max-w-xl text-lg">{profile.bio || "Building scalable architectures and resilient web applications."}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-[#10b981]">
              {profile.profilePhoto ? (
                <img src={profile.profilePhoto} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500 text-3xl font-bold">{profile.name?.charAt(0) || "A"}</div>
              )}
            </div>
            <a href="#contact" className="w-full py-3 bg-[#10b981] text-black font-bold rounded-xl hover:bg-[#059669] transition">Contact Me</a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* Skills module */}
          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#10b981] mr-3"></span> Core Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {(skills || ["JavaScript", "Python", "React", "Docker", "AWS", "TypeScript"]).map((skill, idx) => (
                <span key={idx} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm border border-zinc-700">
                  {typeof skill === 'string' ? skill : skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Projects module */}
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#10b981] mr-3"></span> Featured Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(projects || [{ title: "Quantum App", description: "Large scale app" }, { title: "Logis API", description: "Microservices backend" }]).slice(0, 4).map((project: any, idx) => (
                <div key={idx} className="p-5 bg-black rounded-2xl border border-zinc-800 group hover:border-[#10b981]/50 transition duration-300">
                  <h4 className="text-lg font-bold text-white group-hover:text-[#10b981] transition">{project.title}</h4>
                  <p className="text-sm text-zinc-500 mt-2 line-clamp-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
