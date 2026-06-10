import React from "react";
import { ArrowUpRight, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function App() {
  const navLinks = ["Projects", "Studio", "Offerings", "Inquire"];

  const stats = [
    { value: "250+", label: "Brands Transformed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years in the Game" },
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden text-white font-inter bg-black">
      {/* Background Video Media Layer */}
      <div className="absolute inset-0 z-0 h-full w-full select-none pointer-events-none">
        <div className="absolute inset-0 bg-black/55 z-10 backdrop-brightness-[0.85]" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Global Interface Layout Container */}
      <div className="flex h-full flex-col justify-between px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between py-5 lg:py-7 w-full z-30">
          <span className="font-podium text-2xl sm:text-3xl font-bold tracking-wider uppercase">
            VANGUARD
          </span>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/80 tracking-widest uppercase transition-colors duration-300 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-white/30 hover:border-white/60 bg-transparent text-white hover:bg-white/10 text-xs tracking-widest uppercase px-6 py-5 rounded-none transition-all duration-300 group"
            >
              Get In Touch
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile Screen Navigation Implementation via shadcn/ui Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex flex-col space-y-1.5 p-2 items-end group focus:outline-none cursor-pointer">
                  <div className="w-6 h-0.5 bg-white transition-all" />
                  <div className="w-6 h-0.5 bg-white transition-all" />
                  <div className="w-4 h-0.5 bg-white transition-all group-hover:w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={true}
                className="w-full sm:max-w-md bg-black/95 backdrop-blur-md border-none text-white flex flex-col justify-between p-8"
              >
                <div className="flex items-center justify-between w-full pt-4">
                  <span className="font-podium text-2xl font-bold tracking-wider uppercase">
                    VANGUARD
                  </span>
                </div>

                <div className="flex flex-col space-y-6 my-auto">
                  {navLinks.map((link, i) => (
                    <SheetClose asChild key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        style={{ animationDelay: `${i * 80 + 100}ms` }}
                        className="font-podium text-4xl sm:text-5xl uppercase tracking-wide opacity-0 animate-fade-up-fill text-white/80 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="w-full pb-8">
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="w-full border-white/30 bg-transparent text-white text-xs tracking-widest uppercase py-6 rounded-none opacity-0 animate-fade-up-fill [animation-delay:450ms]"
                    >
                      Get In Touch
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Central Component Hub */}
        <div className="flex flex-col justify-center flex-grow max-w-4xl z-10 select-none">
          
          {/* Subtag Frame */}
          <div className="flex items-center gap-3 mb-4 lg:mb-6 animate-fade-up-fill animation-delay-0">
            <Crown className="w-4 h-4 text-white/70 animate-pulse" />
            <span className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          {/* Master Display Heading */}
          <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)] flex flex-col animate-fade-up-fill animation-delay-200">
            <span className="hover:text-amber-500 transition-colors duration-500">Design.</span>
            <span className="hover:text-amber-500 transition-colors duration-500">Disrupt.</span>
            <span className="hover:text-amber-500 transition-colors duration-500">Conquer.</span>
          </h1>

          {/* Secondary Structural Description */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mt-6 lg:mt-8 animate-fade-up-fill animation-delay-400 font-light">
            We build fierce brand identities that don&apos;t just turn heads --{" "}
            <strong className="text-white font-bold">they lead.</strong>
          </p>

          {/* Interaction Row Segment */}
          <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-fill animation-delay-600">
            <Button className="bg-white text-black hover:bg-neutral-200 px-6 sm:px-8 py-6 text-xs font-semibold tracking-widest uppercase rounded-none transition-all duration-300 group cursor-pointer">
              See Our Work
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-6 py-1">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col text-[10px] tracking-widest uppercase text-white/60 leading-tight">
                <span className="font-semibold">Top-Rated</span>
                <span className="text-white/40">Brand Studio</span>
              </div>
            </div>
          </div>

          {/* Metrics Visualization Layout */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap gap-8 sm:gap-16 lg:gap-24 animate-fade-up-fill animation-delay-800">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-white/50 text-[10px] tracking-widest uppercase mt-1.5 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Footer Breathing Space */}
        <div className="py-4 text-[10px] text-white/30 tracking-wider uppercase font-light z-10 w-full flex justify-between items-center">
          <span>© {new Date().getFullYear()} Vanguard Collective. All Rights Reserved.</span>
          <span className="hidden sm:inline">Built for those who lead</span>
        </div>
      </div>
    </main>
  );
}

