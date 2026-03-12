"use client";

import { Portfolio } from "@/lib/services/portfolios-service";
import { motion } from "framer-motion";

export default function CreativeSplitTemplate({ portfolio }: { portfolio: Portfolio }) {
  const profile = portfolio.profile || {} as any;
  const { projects } = portfolio;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Left side: Bio & Info */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen p-8 md:p-16 flex flex-col justify-center bg-zinc-950 border-r border-white/10 pt-24 md:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#f59e0b] font-bold tracking-widest uppercase mb-4 text-sm">Creative Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9]">
            {profile.name || "Sarah Chen"}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-lg mb-12 font-medium leading-relaxed">
            {profile.bio || "Crafting bold visual identities and digital experiences that tell a story."}
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#f59e0b]"></span>
              <span className="text-lg font-semibold">{profile.title || "Visual Designer"}</span>
            </div>
            {profile.email && (
              <p className="text-zinc-500 hover:text-white transition cursor-pointer">{profile.email}</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Right side: Featured Work */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen p-8 md:p-16 bg-black overflow-y-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="space-y-24"
        >
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold italic">Featured Works</h2>
            <span className="text-zinc-600 font-mono">01 — 03</span>
          </div>

          {(projects || [1, 2, 3]).slice(0, 3).map((project: any, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-[#f59e0b]/50 transition duration-500">
                {project.thumbnail ? (
                  <img src={project.thumbnail} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt="" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-800 text-6xl font-black">
                    {idx + 1}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#f59e0b]/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#f59e0b] transition duration-300">{project.title || "Project Title"}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">{project.technologies?.join(" / ") || "UI/UX DESIGN"}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

