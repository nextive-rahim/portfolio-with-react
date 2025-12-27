
import React, { useState, useEffect } from 'react';
import { resumeData } from './data';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Download, 
  User, Cpu, Briefcase, Layout, MessageSquare, 
  ExternalLink, Smartphone, Apple, Play, ChevronRight,
  Zap, Rocket, Moon, Sun, Send, Globe, GraduationCap, 
  Calendar, ArrowDown, Menu, X, Heart, Server, Database, 
  Cloud, GitBranch, Palette, CreditCard, Bell, Shield, Settings
} from 'lucide-react';

// --- Animated Reveal Wrapper ---
const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div 
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

// --- Navbar Section ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${
        isScrolled ? 'glass shadow-xl py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black text-gradient tracking-tighter">
          AR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 animate-scale-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 py-3 bg-blue-600 text-white rounded-xl font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-44 overflow-hidden relative bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden no-print">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-600/10 rounded-full animate-float opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-600/5 rounded-full animate-float stagger-3 opacity-20" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] no-print"
        style={{
          backgroundImage: `linear-gradient(hsl(217, 91%, 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217, 91%, 60%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Fixed Spacing */}
          <div className="mb-10 animate-fade-in opacity-0">
            <div className="relative inline-block">
              {/* Outer Glow Circle */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(37,99,235,0.3)] mx-auto z-10">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=AbdulRahim&backgroundColor=2563eb" 
                  alt="Abdul Rahim" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Verified Badge */}
              <div className="absolute -bottom-2 right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl z-20 animate-bounce">
                <span className="text-lg font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in opacity-0 stagger-1">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-glow" />
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">Active & Available</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 stagger-2 tracking-tighter leading-none">
            <span className="text-slate-900 dark:text-white">Abdul</span>{' '}
            <span className="text-gradient">Rahim</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-6 animate-slide-up opacity-0 stagger-1">
            <span className="text-blue-600 font-black uppercase tracking-tight">Flutter Developer</span> & 
            <span className="text-cyan-500 font-black uppercase tracking-tight"> Backend Engineer</span>
          </p>

          {/* Description */}
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 stagger-2 leading-relaxed">
            4+ years building high-performance mobile apps with Flutter. 
            Delivered <span className="text-slate-900 dark:text-white font-black">30+ Android</span> & 
            <span className="text-slate-900 dark:text-white font-black"> 8+ iOS apps</span> to production.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up opacity-0 stagger-3">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform">4+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform">38+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Apps</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform">5+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Backend</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up opacity-0 stagger-4">
            <a 
              href="#projects" 
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:-translate-y-1 transition-all"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 glass text-slate-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:-translate-y-1 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up opacity-0 stagger-5">
            {[
              { icon: <Mail size={20} />, href: `mailto:${resumeData.email}`, label: 'Email' },
              { icon: <Linkedin size={20} />, href: `https://${resumeData.linkedin}`, label: 'LinkedIn' },
              { icon: <Github size={20} />, href: `https://${resumeData.github}`, label: 'GitHub' },
              { icon: <Phone size={20} />, href: `tel:${resumeData.phone}`, label: 'Phone' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600/50 transition-all duration-300"
                aria-label={social.label}
              >
                {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, { className: "text-slate-500 hover:text-blue-600" })}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => (
  <section id="about" className="py-24 relative scroll-mt-20">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase">01. ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white tracking-tight">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Experienced <span className="text-blue-600 font-bold">Senior Flutter developer</span> with 4+ years of professional mobile app development, 
                alongside 1+ year backend experience using <span className="text-cyan-500 font-bold">Node.js, Express.js, NestJS & MongoDB</span>.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Proven experience as a <span className="text-slate-900 dark:text-white font-bold uppercase tracking-tight">Team Lead</span>, handling project architecture, 
                code reviews, API integration, backend development, and leading cross-functional teams.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                Dedicated to building smooth, optimized, and user-friendly applications with minimal loading time, 
                stable performance, and clean, maintainable code.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold">
                  <MapPin size={18} className="text-blue-600" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold">
                  <Briefcase size={18} className="text-blue-600" />
                  <span>Team Lead – Flutter & Backend</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold">
                  <GraduationCap size={18} className="text-blue-600" />
                  <span>B.Sc in CSE – MIST (2021)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-[2rem] p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="text-7xl font-black text-gradient mb-4">4+</div>
                  <div className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">Years Experience</div>
                  <div className="text-slate-500 font-medium mb-6">Building production-grade mobile applications</div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="text-3xl font-black text-blue-600">30+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Android Apps</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-cyan-500">8+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">iOS Apps</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full animate-glow" />
                  <span className="text-xs font-black uppercase text-slate-900 dark:text-white">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

// --- Skills Section ---
const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'blue',
      skills: ['Flutter / Dart', 'Android & iOS', 'GetX, Provider, Riverpod, Bloc', 'Clean Architecture', 'Offline-first Apps', 'In-app Purchases'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'cyan',
      skills: ['Node.js & Express.js', 'NestJS', 'REST & GraphQL APIs', 'JWT & OAuth Auth', 'Middleware Design', 'CRON Jobs'],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'blue',
      skills: ['MongoDB', 'PostgreSQL & MySQL', 'Firebase Suite', 'Firestore', 'Cloud Functions', 'Cloud Storage'],
    },
    {
      title: 'Performance',
      icon: Zap,
      color: 'cyan',
      skills: ['Advanced Caching', 'Lazy Loading', 'Memory Management', 'App Size Optimization', 'API Optimization', 'Widget Optimization'],
    },
  ];

  const techStack = [
    { name: 'Flutter', icon: Smartphone },
    { name: 'Node.js', icon: Server },
    { name: 'Firebase', icon: Cloud },
    { name: 'MongoDB', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'UI/UX', icon: Palette },
    { name: 'Web', icon: Globe },
    { name: 'Payments', icon: CreditCard },
    { name: 'Push Notifications', icon: Bell },
    { name: 'Security', icon: Shield },
    { name: 'DevOps', icon: Settings },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-100/30 dark:bg-slate-900/10 scroll-mt-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase">02. SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white uppercase tracking-tighter">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`glass rounded-[2rem] p-8 hover:border-blue-600/50 transition-all duration-300 group animate-slide-up opacity-0 stagger-${index + 1}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${category.color === 'blue' ? 'bg-blue-600/10 text-blue-600' : 'bg-cyan-600/10 text-cyan-600'}`}>
                    <category.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group">
                      <span className={`w-2 h-2 rounded-full ${category.color === 'blue' ? 'bg-blue-600' : 'bg-cyan-600'} group-hover:scale-125 transition-transform`} />
                      <span className="text-sm font-bold uppercase tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Marquee */}
          <div className="relative overflow-hidden py-10">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />
            
            <div className="flex gap-10 animate-scroll">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex items-center gap-4 px-8 py-4 glass rounded-2xl whitespace-nowrap group hover:bg-blue-600 transition-all">
                  <tech.icon size={22} className="text-blue-600 group-hover:text-white" />
                  <span className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] group-hover:text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- Experience Section ---
const ExperienceSection = () => (
  <section id="experience" className="py-24 relative scroll-mt-20">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-mono text-sm tracking-wider uppercase">03. EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white uppercase tracking-tighter">
            Work <span className="text-gradient">History</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />
          {resumeData.experience.map((exp, index) => {
            const isCurrent = exp.period.toLowerCase().includes('present');
            return (
              <div key={index} className={`relative mb-12 last:mb-0 animate-slide-up opacity-0 stagger-${index + 1}`}>
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-xl -translate-x-1/2 mt-2 z-10 border-4 border-slate-50 dark:border-slate-950">
                    {isCurrent && <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-50" />}
                  </div>
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-[2rem] p-8 hover:border-blue-600/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">{exp.role}</h3>
                          <p className="text-blue-600 font-black uppercase text-xs tracking-widest mt-2">{exp.company}</p>
                        </div>
                        {isCurrent && <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-blue-600/10 text-blue-600 rounded-full border border-blue-600/20">Current</span>}
                      </div>
                      <div className="flex items-center gap-4 mb-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-blue-600" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.bullets.slice(0, 4).map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

// --- Projects Section ---
const ProjectsSection = () => {
  const projects = [
    { title: 'BCS Doctor', description: 'Full caching-based architecture with first-time login management system and offline-mode with automatic sync.', tags: ['Flutter', 'Caching', 'Offline-First'], featured: true },
    { title: 'Physics Study BD', description: 'Premium design with UI animations, optimized for students and exam preparation.', tags: ['Flutter', 'Animations', 'Education'], featured: true },
    { title: 'Bongo Baba (E-commerce)', description: 'Complete e-commerce solution with product catalog, cart, checkout flow, payment gateway integration, and order tracking.', tags: ['Flutter', 'E-commerce', 'Payments'], featured: true },
    { title: 'Chat App', description: 'Real-time messaging with WebSocket, offline chat, local storage, message caching, and push notifications.', tags: ['Flutter', 'WebSocket', 'Real-time'], featured: false },
    { title: 'SMS to Mail', description: 'Collects device SMS in background and sends messages to email via SMTP. Background service optimized for battery usage.', tags: ['Flutter', 'Background Services', 'SMTP'], featured: false },
    { title: 'Google Location App', description: 'Real-time location tracking with geofencing, route monitoring, push notifications and alerts.', tags: ['Flutter', 'Location', 'Geofencing'], featured: false },
  ];

  const iosApps = ['Science Platform', 'Karigori Pathsala', 'Shikkha Squared', 'eTestPaper', 'MasterClass'];

  return (
    <section id="projects" className="py-24 relative bg-slate-100/30 dark:bg-slate-900/10 scroll-mt-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase">04. PROJECTS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white uppercase tracking-tighter">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
              A selection of projects I've built and shipped to production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass rounded-[2rem] p-8 group hover:border-blue-600/30 transition-all duration-500 animate-slide-up opacity-0 stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Smartphone size={28} />
                  </div>
                  {project.featured && <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-cyan-600/10 text-cyan-500 rounded-full border border-cyan-500/20">Featured</span>}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors tracking-tighter uppercase leading-none">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-[9px] font-black uppercase tracking-widest bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* iOS Apps Section */}
          <div className="glass rounded-[3rem] p-10 mb-16 border border-blue-600/10">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 rounded-2xl bg-cyan-600/10 text-cyan-600">
                <Apple size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Published iOS Apps</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mt-2 uppercase tracking-widest">Available on the App Store</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {iosApps.map((app) => (
                <div key={app} className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group">
                  <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-black text-xs uppercase tracking-tight text-slate-700 dark:text-slate-300 group-hover:text-blue-600">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '30+', label: 'Android Apps' },
              { value: '8+', label: 'iOS Apps' },
              { value: '5+', label: 'Backend Projects' },
              { value: '40-60%', label: 'Performance Boost' },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center p-8 glass rounded-[2rem] border border-blue-600/5 hover:border-blue-600/20 transition-all animate-scale-in opacity-0 stagger-${index + 1}`}>
                <div className="text-4xl font-black text-gradient leading-none">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => (
  <section id="contact" className="py-24 relative scroll-mt-20">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-mono text-sm tracking-wider uppercase">05. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white uppercase tracking-tighter">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
            I'm currently open to new opportunities and high-impact projects. Let's build the future together.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: <Mail size={28} />, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
              { icon: <Phone size={28} />, label: 'Phone', value: `+880 ${resumeData.phone}`, href: `tel:${resumeData.phone}` },
              { icon: <MapPin size={28} />, label: 'Location', value: 'Dhaka, Bangladesh', href: '#' }
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-[2rem] p-8 hover:border-blue-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">{item.label}</h3>
                    {item.href !== '#' ? (
                      <a href={item.href} className="text-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors font-black tracking-tight">{item.value}</a>
                    ) : (
                      <p className="text-xl text-slate-500 dark:text-slate-400 font-black tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-4 pt-4">
              <a href={`https://${resumeData.linkedin}`} target="_blank" className="flex-1 glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all group">
                <Linkedin size={26} className="group-hover:scale-110 transition-transform" />
                <span className="font-black text-[10px] uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href={`https://${resumeData.github}`} target="_blank" className="flex-1 glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all group">
                <Github size={26} className="group-hover:scale-110 transition-transform" />
                <span className="font-black text-[10px] uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </div>
          <div className="glass rounded-[3rem] p-12 flex flex-col justify-center relative overflow-hidden w-full border border-blue-600/10 dark:bg-slate-900/40">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center md:text-left space-y-8">
              <div className="w-20 h-20 rounded-[1.8rem] bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto md:mx-0 shadow-2xl shadow-blue-500/20">
                <Send size={32} className="text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">Ready to start <br />a project?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">I'm always excited to work on new challenges. Let's discuss your vision.</p>
              </div>
              <div className="space-y-4 pt-4">
                <a href={`mailto:${resumeData.email}`} className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all">
                  <Mail size={20} /> Send Email
                </a>
                <a href={`https://wa.me/8801718663032`} target="_blank" className="flex items-center justify-center gap-3 w-full py-5 glass text-slate-900 dark:text-white border border-blue-600/20 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:-translate-y-1 transition-all">
                  <Phone size={20} /> WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

// --- Footer Section ---
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 no-print">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <span className="text-3xl font-black text-gradient tracking-tighter">AR<span className="text-blue-600">.</span></span>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© {currentYear} Abdul Rahim. Developed with Passion.</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <span>Built with</span>
            <Heart size={16} className="text-blue-600 fill-blue-600 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-8">
            <a href={`mailto:${resumeData.email}`} className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={22} /></a>
            <a href={`https://${resumeData.linkedin}`} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={22} /></a>
            <a href={`https://${resumeData.github}`} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={22} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-700 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Theme Toggle Button Floating */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full glass shadow-2xl z-50 flex items-center justify-center text-slate-600 dark:text-blue-400 border border-blue-600/20 no-print hover:scale-110 transition-transform active:scale-95"
      >
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button>
    </div>
  );
};

export default App;
