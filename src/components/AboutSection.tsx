import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto ${isVisible ? 'animate-slide-up opacity-0' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">01. ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced <span className="text-primary font-medium">Flutter developer</span> with 4+ years of professional mobile app development, 
                alongside 1+ year backend experience using <span className="text-accent font-medium">Node.js, Express.js, NestJS & MongoDB</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proven experience as a <span className="text-foreground font-medium">Team Lead</span>, handling project architecture, 
                code reviews, API integration, backend development, and leading cross-functional teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to building smooth, optimized, and user-friendly applications with minimal loading time, 
                stable performance, and clean, maintainable code.
              </p>

              {/* Quick Info */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase size={18} className="text-primary" />
                  <span>Team Lead – Flutter & Backend</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap size={18} className="text-primary" />
                  <span>B.Sc in CSE – MIST (2021)</span>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-gradient mb-4">4+</div>
                  <div className="text-xl font-medium text-foreground mb-2">Years of Experience</div>
                  <div className="text-muted-foreground mb-6">Building production-grade mobile applications</div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold text-accent">30+</div>
                      <div className="text-sm text-muted-foreground">Android Apps</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">8+</div>
                      <div className="text-sm text-muted-foreground">iOS Apps</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full animate-glow" />
                  <span className="text-sm font-medium text-foreground">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
