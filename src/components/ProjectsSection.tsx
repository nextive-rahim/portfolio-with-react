import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Smartphone, Apple } from 'lucide-react';

const projects = [
  {
    title: 'BCS Doctor',
    description: 'Full caching-based architecture with first-time login management system and offline-mode with automatic sync.',
    tags: ['Flutter', 'Caching', 'Offline-First'],
    featured: true,
    link: 'https://play.google.com/store/apps/details?id=com.nextive.bcsdoctor&hl=en',
  },
  {
    title: 'Physics Study BD',
    description: 'Premium design with UI animations, optimized for students and exam preparation.',
    tags: ['Flutter', 'Animations', 'Education'],
    featured: true,
    link: 'https://play.google.com/store/apps/details?id=com.nextive.physicsstudy.bd&hl=en',
  },
  {
    title: 'Bongo Baba (E-commerce)',
    description: 'Complete e-commerce solution with product catalog, cart, checkout flow, payment gateway integration, and order tracking.',
    tags: ['Flutter', 'E-commerce', 'Payments'],
    featured: true,
    link: 'https://bongobaba.en.softonic.com/android',
  },
  {
    title: 'Chat App',
    description: 'Real-time messaging with WebSocket, offline chat, local storage, message caching, and push notifications.',
    tags: ['Flutter', 'WebSocket', 'Real-time'],
    featured: false,
  },
  {
    title: 'SMS to Mail',
    description: 'Collects device SMS in background and sends messages to email via SMTP. Background service optimized for battery usage.',
    tags: ['Flutter', 'Background Services', 'SMTP'],
    featured: false,
  },
  {
    title: 'Google Location App',
    description: 'Real-time location tracking with geofencing, route monitoring, push notifications and alerts.',
    tags: ['Flutter', 'Location', 'Geofencing'],
    featured: false,
  },
];

const iosApps = [
  { name: 'Science Platform', link: 'https://apps.apple.com/us/app/science-platform/id6748245666' },
  { name: 'Karigori Pathsala', link: 'https://apps.apple.com/us/app/karigori-pathsala/id6754215048' },
  { name: 'Shikkha Squared', link: 'https://apps.apple.com/us/app/shikkha-squared/id6751794182' },
  { name: 'eTestPaper', link: 'https://apps.apple.com/us/app/etestpaper/id6749287735' },
  { name: 'MasterClass', link: 'https://apps.apple.com/us/app/master-class-bank-job/id6753141252' },
  { name: "Nayeem's English Care", link: 'https://apps.apple.com/us/app/nayeems-english-care/id6748595972' },
  { name: 'Board Books', link: 'https://apps.apple.com/us/app/board-books/id6751452947' },
  { name: 'Admission Assistant', link: 'https://apps.apple.com/us/app/admission-assistant/id6749927738' },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">04. PROJECTS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects I've built and shipped to production
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 ${
                  project.featured ? 'md:col-span-1' : ''
                } ${isVisible ? `animate-slide-up opacity-0 stagger-${Math.min(index + 1, 6)}` : 'opacity-0'}`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Smartphone size={24} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        Featured
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        aria-label={`View ${project.title} on store`}
                      >
                        <ExternalLink size={16} className="text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* iOS Apps Section */}
          <div className={`glass rounded-2xl p-8 ${isVisible ? 'animate-slide-up opacity-0 stagger-6' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Apple size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Published iOS Apps</h3>
                <p className="text-muted-foreground text-sm">Available on the App Store</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {iosApps.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                >
                  <span className="w-2 h-2 bg-accent rounded-full group-hover:bg-primary transition-colors" />
                  <span className="font-medium">{app.name}</span>
                  <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '30+', label: 'Android Apps' },
              { value: '8+', label: 'iOS Apps' },
              { value: '5+', label: 'Backend Projects' },
              { value: '40-60%', label: 'Performance Boost' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 glass rounded-xl ${
                  isVisible ? `animate-scale-in opacity-0 stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
