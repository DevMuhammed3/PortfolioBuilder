"use client";

import React from "react";
import { Portfolio } from "@/lib/services/portfolios-service";

export default function GlassmorphicElegantTemplate({ portfolio }: { portfolio: Portfolio }) {
  const profile = portfolio.profile || {} as any;
  const { skills, projects } = portfolio;

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-800 font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-400/40 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/40 blur-[120px] mix-blend-multiply" />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/30 blur-[100px] mix-blend-multiply" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24 pt-24 md:pt-32">

        {/* Header Glass Card */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-600 mb-4">
              {profile.name || "Alex Chen"}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
              {profile.title || "Frontend Developer"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {profile.bio || "I build elegant, interactive, and high-performance frontend web experiences."}
            </p>
          </div>

          {profile.profilePhoto && (
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/80 shadow-xl shrink-0">
              <img src={profile.profilePhoto} alt={profile.name} className="w-full h-full object-cover" />
            </div>
          )}
        </header>

        {/* Projects Glass Cards */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-slate-800 px-4">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projects || [1, 2, 3]).slice(0, 3).map((project: any, idx) => (
              <div key={idx} className="flex flex-col rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-white/40 to-white/10 relative overflow-hidden flex items-center justify-center p-6">
                  <div className="w-full h-full bg-slate-200/50 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm flex items-center justify-center text-slate-400">Project Mockup</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold mb-3 text-slate-800">{project.title || "Project Title"}</h4>
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{project.description || "A beautiful web application built with modern technologies."}</p>
                  <button className="w-full py-3 rounded-xl bg-white/60 hover:bg-white text-blue-600 font-semibold transition border border-white/80 shadow-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
