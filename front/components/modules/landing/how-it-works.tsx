"use client";

import Container from "@/components/custom/container";
import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useAccessibility";

export default function HowItWorks() {
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
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            How it <span className="text-transparent bg-gradient-to-r from-primary to-purple-500 bg-clip-text">works</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            Three simple steps. From idea to live portfolio.
          </p>
        </m.div>

        {/* Line Connector */}
        <div className="relative mt-20">
          <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            <Step
              number="01"
              title="Add your information"
              description="Fill in your projects, experience, and skills using a structured, guided interface."
            />
            <Step
              number="02"
              title="Let AI enhance it"
              description="Instantly transform your rough inputs into professional, recruiter-ready content."
            />
            <Step
              number="03"
              title="Publish instantly"
              description="Go live with one click. No hosting setup. No deployment headaches."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-10 mt-8 rounded-3xl border border-primary/10 bg-background/60 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/30 transition-all duration-500 text-center">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-background border border-primary/20 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 z-10">
        <span className="text-3xl font-extrabold text-transparent bg-gradient-to-br from-primary to-purple-600 bg-clip-text">
          {number}
        </span>
      </div>

      <div className="relative pt-6">
        <h3 className="text-2xl font-bold mt-4 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">{description}</p>
      </div>
    </div>
  );
}
