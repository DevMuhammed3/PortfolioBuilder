"use client";

import { m } from "framer-motion";

export default function MinimalHero({ portfolio }: any) {
  const profile = portfolio.profile;

  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">

      {/* grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg,var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* spotlight */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* TEXT SIDE */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            {profile?.name}
          </h1>

          <p className="text-2xl text-zinc-400">
            {profile?.title}
          </p>

          <p className="text-zinc-400 max-w-lg leading-relaxed">
            {profile?.bio}
          </p>

          <div className="flex gap-4 pt-4">

            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border border-zinc-700 hover:border-white transition"
            >
              Contact
            </a>

          </div>
        </m.div>

        {/* VISUAL SIDE */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="relative w-full max-w-xl mx-auto">

            {/* main project image */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="project preview"
                className="w-full h-64 object-cover"
              />

              <div className="p-6 space-y-2">
                <p className="text-xs text-muted-foreground">
                  Currently building
                </p>

                <h3 className="text-lg font-semibold">
                  AI Portfolio Platform
                </h3>

                <p className="text-sm text-muted-foreground">
                  SaaS platform that generates developer portfolios automatically.
                </p>
              </div>

            </div>


            {/* floating skills */}
            <div className="absolute -left-10 top-10 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">

              <p className="text-xs text-muted-foreground mb-1">
                Stack
              </p>

              <div className="flex gap-2 text-xs font-medium">
                <span className="bg-muted px-2 py-1 rounded">Node.js</span>
                <span className="bg-muted px-2 py-1 rounded">Express.js</span>
                <span className="bg-muted px-2 py-1 rounded">SQL</span>
              </div>

            </div>

          </div>


        </m.div>

      </div >

    </section >
  );
}
