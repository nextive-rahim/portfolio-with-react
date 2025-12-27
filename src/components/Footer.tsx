import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gradient">AR</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Abdul Rahim. All rights reserved.
            </span>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>using React & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:rahimsr983@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/abdul-rahim-6b09292a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/developer-rahim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
