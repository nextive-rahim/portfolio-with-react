import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  GitBranch,
  Palette,
  Globe,
  CreditCard,
  Bell,
  Shield,
  Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'primary',
    skills: [
      'Flutter / Dart',
      'Android & iOS',
      'GetX, Provider, Riverpod, Bloc',
      'Clean Architecture',
      'Offline-first Apps',
      'In-app Purchases',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'accent',
    skills: [
      'Node.js & Express.js',
      'NestJS',
      'REST & GraphQL APIs',
      'JWT & OAuth Auth',
      'Middleware Design',
      'CRON Jobs',
    ],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    color: 'primary',
    skills: [
      'MongoDB',
      'PostgreSQL & MySQL',
      'Firebase Suite',
      'Firestore',
      'Cloud Functions',
      'Cloud Storage',
    ],
  },
  {
    title: 'Performance',
    icon: Zap,
    color: 'accent',
    skills: [
      'Advanced Caching',
      'Lazy Loading',
      'Memory Management',
      'App Size Optimization',
      'API Optimization',
      'Widget Optimization',
    ],
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

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">02. SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`glass rounded-2xl p-6 hover:border-${category.color}/50 transition-all duration-300 group ${
                  isVisible ? `animate-slide-up opacity-0 stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <category.icon 
                      size={24} 
                      className={category.color === 'primary' ? 'text-primary' : 'text-accent'} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Marquee */}
          <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-8 animate-[scroll_30s_linear_infinite]">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 px-6 py-3 glass rounded-full whitespace-nowrap"
                >
                  <tech.icon size={18} className="text-primary" />
                  <span className="text-foreground font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
