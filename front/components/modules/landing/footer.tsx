"use client";

import Container from "@/components/custom/container";
import { LocaleLink } from "@/components/custom/locale-link";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { ExternalLink } from "lucide-react";
import type { FooterLink } from "@/types/landing";

/**
 * Footer Component
 * Site footer with navigation links and legal pages
 * Enhanced with TypeScript types and accessibility
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { handleError } = useErrorHandler();

  const footerLinks: FooterLink[] = useMemo(() => {
    try {
      return [
        {
          id: "about",
          labelKey: "footer.about",
          href: "/about",
          ariaLabel: "Learn more about our company",
        },
        {
          id: "help",
          labelKey: "footer.help",
          href: "/help",
          ariaLabel: "Get help and support",
        },
        {
          id: "privacy",
          labelKey: "footer.privacy",
          href: "/privacy",
          ariaLabel: "Read our privacy policy",
        },
        {
          id: "patreon",
          labelKey: "footer.patreon",
          href: "https://www.patreon.com/c/sylvaincodes",
          external: true,
          ariaLabel: "Support us on Patreon (opens in new tab)",
        },
      ];
    } catch (error) {
      handleError(error as Error, "Footer", "FOOTER_CONFIG_ERROR");
      return [];
    }
  }, [handleError]);

  const renderFooterLink = (link: FooterLink) => {
    try {
      return (
        <li key={link.id}>
          <LocaleLink
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-muted-foreground/80 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
            aria-label={link.ariaLabel}
          >
            <FormattedMessage
              id={link.labelKey}
              defaultMessage={link.labelKey.split(".").pop() || "Link"}
            />
            {link.external && (
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" aria-hidden="true" />
            )}
          </LocaleLink>
        </li>
      );
    } catch (error) {
      handleError(error as Error, "Footer", "FOOTER_LINK_RENDER_ERROR");
      return null;
    }
  };

  return (
    <footer
      className="relative border-t bg-background/80 backdrop-blur-xl mt-24"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Decorative gradient blur */}
      <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden pointer-events-none flex justify-center">
        <div className="absolute top-0 w-[500px] h-[200px] bg-primary/5 rounded-[100%] blur-[100px] opacity-70" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl tracking-tight">PortfolioBuilder</span>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed max-w-sm">
              Create a breathtaking, professional portfolio in minutes. Powered by AI, designed for humans to showcase their best work.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.map(renderFooterLink)}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-6">
            <h3 className="font-semibold text-foreground mb-2">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground/80 text-sm">
              Get the latest updates, design tips, and portfolio inspiration right in your inbox.
            </p>
            <form className="relative flex max-w-md" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pr-12 bg-background/50 border-muted focus-visible:ring-primary h-12 rounded-xl"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-primary hover:bg-primary/90 text-white"
                type="submit"
                aria-label="Subscribe"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Portfolio Builder. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
