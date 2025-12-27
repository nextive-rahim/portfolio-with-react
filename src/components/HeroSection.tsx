import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/react.svg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-float opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-float stagger-3 opacity-20" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in opacity-0">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(175_80%_50%/0.3)] mx-auto">
                <img
                  src={profileImage}
                  alt="Abdul Rahim - Flutter Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xs">✓</span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in opacity-0 stagger-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow" />
            <span className="text-sm text-muted-foreground">
              Flutter Senior Developer & Backend Engineer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 stagger-2">
            <span className="text-foreground">Abdul</span>{" "}
            <span className="text-gradient">Rahim</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up opacity-0 stagger-1">
            <span className="text-primary font-semibold">
              Flutter Developer
            </span>{" "}
            &
            <span className="text-accent font-semibold"> Backend Engineer</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 stagger-2">
            4+ years building high-performance mobile apps with Flutter.
            Delivered{" "}
            <span className="text-foreground font-medium">30+ Android</span> &
            <span className="text-foreground font-medium"> 8+ iOS apps</span> to
            production.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up opacity-0 stagger-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                4+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                38+
              </div>
              <div className="text-sm text-muted-foreground">
                Apps Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                5+
              </div>
              <div className="text-sm text-muted-foreground">
                Backend Projects
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up opacity-0 stagger-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up opacity-0 stagger-5">
            <a
              href="mailto:rahimsr983@gmail.com"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail
                size={20}
                className="text-muted-foreground hover:text-primary"
              />
            </a>
            <a
              href="https://linkedin.com/in/abdul-rahim-6b09292a0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-muted-foreground hover:text-primary"
              />
            </a>
            <a
              href="https://github.com/developer-rahim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github
                size={20}
                className="text-muted-foreground hover:text-primary"
              />
            </a>
            <a
              href="tel:01718663032"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone
                size={20}
                className="text-muted-foreground hover:text-primary"
              />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
