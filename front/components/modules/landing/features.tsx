"use client";

import { m } from "framer-motion";
import Container from "@/components/custom/container";
import { useReducedMotion } from "@/hooks/useAccessibility";
import { Sparkles, LayoutDashboard, Rocket, BarChart3 } from "lucide-react";

export default function Features() {
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
    <section className="relative py-24 bg-gradient-to-b from-muted/20 to-background">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Everything you need to <span className="text-transparent bg-gradient-to-r from-primary to-purple-500 bg-clip-text">launch fast</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            Build, optimize, and publish your portfolio in minutes, without a single line of code.
          </p>
        </m.div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="AI-powered content generation"
            description="Turn rough project notes into professional, recruiter-ready descriptions instantly."
          />
          <FeatureCard
            icon={<LayoutDashboard className="w-6 h-6" />}
            title="Structured experience & skills"
            description="Organize your background in a clean, easy-to-read format."
          />
          <FeatureCard
            icon={<Rocket className="w-6 h-6" />}
            title="One-click publishing"
            description="Go live instantly without worrying about hosting or deployment."
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Built-in portfolio analytics"
            description="Track visits and engagement to understand how your portfolio performs."
          />
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-10 rounded-3xl border border-primary/10 bg-background/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple-600 group-hover:text-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>

        <p className="text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}
