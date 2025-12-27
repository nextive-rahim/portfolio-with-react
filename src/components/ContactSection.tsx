import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">05. CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className={`space-y-6 ${isVisible ? 'animate-slide-up opacity-0 stagger-1' : 'opacity-0'}`}>
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a 
                        href="mailto:rahimsr983@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rahimsr983@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a 
                        href="tel:01718663032" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +880 1718663032
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://linkedin.com/in/abdul-rahim-6b09292a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Linkedin size={20} className="text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium text-muted-foreground group-hover:text-primary">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/developer-rahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Github size={20} className="text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium text-muted-foreground group-hover:text-primary">GitHub</span>
                  </a>
                </div>
              </div>

              {/* CTA Card */}
              <div className={`${isVisible ? 'animate-slide-left opacity-0 stagger-2' : 'opacity-0'}`}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Send size={28} className="text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Ready to start a project?
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      I'm always excited to work on new challenges. Let's discuss how I can help bring your ideas to life.
                    </p>
                    
                    <div className="space-y-4">
                      <Button variant="hero" size="lg" className="w-full" asChild>
                        <a href="mailto:rahimsr983@gmail.com">
                          <Mail size={18} />
                          Send Email
                        </a>
                      </Button>
                      <Button variant="glow" size="lg" className="w-full" asChild>
                        <a href="https://wa.me/8801718663032" target="_blank" rel="noopener noreferrer">
                          <Phone size={18} />
                          WhatsApp Me
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
