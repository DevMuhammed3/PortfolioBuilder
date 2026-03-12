"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/custom/container";
import { useReducedMotion } from "@/hooks/useAccessibility";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need coding skills to use this platform?",
    answer: "Not at all! Our AI-powered builder is designed for everyone. You just enter your details, and we format them into a professional portfolio."
  },
  {
    question: "Can I use my own custom domain?",
    answer: "Yes! While we provide a free subdomain (e.g., yourname.platform.com), you can easily connect your own custom domain in the settings."
  },
  {
    question: "How does the AI content generation work?",
    answer: "Our AI takes your rough notes about your projects, experience, and skills, and refines them into polished, recruiter-ready descriptions that highlight your impact."
  },
  {
    question: "Is there a free tier available?",
    answer: "Yes, you can create and publish your portfolio completely for free. We also offer premium features like custom domains and advanced analytics."
  },
  {
    question: "Can I track who visits my portfolio?",
    answer: "Absolutely. We provide built-in analytics that show you visitor counts, engagement metrics, and more."
  }
];

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const animation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      x: 1,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.6 },
    },
  };

  return (
    <section className="relative py-24 bg-background border-t">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Got questions? We've got answers. If you need more help, feel free to reach out.
          </p>
        </m.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <m.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: prefersReducedMotion ? 0 : index * 0.1 }
                  }
                }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-muted/50 border-primary/20" : "bg-background hover:bg-muted/30"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <div className={cn(
                    "ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground border-t border-border/50 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
