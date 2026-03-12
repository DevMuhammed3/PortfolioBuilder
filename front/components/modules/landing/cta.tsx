"use client";

import Container from "@/components/custom/container";
import { Button } from "@/components/ui/button";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/custom/loading-spinner";

export default function CTA() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  return (
    <section className="relative py-32 overflow-hidden">
      <Container>
        {/* Glow Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
          <div className="absolute w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full opacity-60 animate-pulse" />
          <div className="absolute w-[250px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full translate-x-1/3 opacity-60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Ready to build something <span className="text-transparent bg-gradient-to-r from-primary to-purple-500 bg-clip-text">amazing?</span>
              </h2>

              <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop overthinking your portfolio. Build it today, publish instantly, and focus on landing your dream job.
              </p>

              <div className="flex justify-center">
                {!isLoaded ? (
                  <LoadingSpinner size="lg" />
                ) : isSignedIn ? (
                  <Button
                    size="lg"
                    className="relative py-7 px-12 text-xl font-bold bg-white text-primary border-2 border-transparent hover:border-primary/50 shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group/btn bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:text-white"
                    onClick={() => router.push("/user/portfolios/new")}
                  >
                    <span className="relative z-10">Create New Portfolio</span>
                  </Button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <SignUpButton
                      mode="modal"
                      fallbackRedirectUrl="/user/portfolios/new"
                    >
                      <Button
                        size="lg"
                        className="relative py-7 px-12 text-xl font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden group/btn border-0"
                      >
                        <span className="relative z-10">Build My Portfolio</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                      </Button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
