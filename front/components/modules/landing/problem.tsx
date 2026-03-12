"use client";

import { m } from "framer-motion";
import Container from "@/components/custom/container";
import { useReducedMotion } from "@/hooks/useAccessibility";

export default function Problem() {
  const prefersReducedMotion = useReducedMotion();

  const animation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.6 },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-destructive/10 text-destructive border border-destructive/20">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Why building a portfolio <span className="text-transparent bg-gradient-to-r from-destructive to-orange-500 bg-clip-text">feels overwhelming</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            Most developers delay their portfolio because it takes too much
            time and effort to get it right.
          </p>
        </m.div>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <ProblemCard
            title="Writing strong descriptions is hard"
            description="Turning your projects into clear, professional case studies takes hours — and most people don’t know what recruiters want to read."
          />
          <ProblemCard
            title="Designing a clean layout takes time"
            description="Good design isn’t easy. Spacing, typography, and structure matter more than you think."
          />
          <ProblemCard
            title="Deploying and hosting is confusing"
            description="Domains, hosting, performance, SEO — it’s overwhelming if you just want something professional online quickly."
          />
        </div>
      </Container>
    </section>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-10 rounded-3xl border border-destructive/10 bg-background/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,0,0,0.08)] hover:border-destructive/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-destructive transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}
