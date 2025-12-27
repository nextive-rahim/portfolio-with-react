import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Team Lead – Flutter & Backend',
    company: 'Nextive Solution, Kawran Bazar, Dhaka',
    period: '2023 – Present',
    duration: '2 Years',
    current: true,
    responsibilities: [
      'Led a team of Flutter & backend developers, managing development lifecycle end-to-end',
      'Designed and implemented scalable mobile architectures using Flutter + Node.js/NestJS',
      'Conducted code review sessions and enforced clean coding practices',
      'Built high-performing apps using offline-first architecture and advanced caching',
      'Integrated complex APIs, including payment systems and background services',
      'Managed Play Store & App Store submission processes',
      'Implemented CI/CD deployment pipelines for smoother updates',
    ],
  },
  {
    title: 'Mid-Level Flutter Developer',
    company: 'Excel IT, Moghbazar, Dhaka',
    period: '2021 – 2022',
    duration: '1 Year',
    current: false,
    responsibilities: [
      'Developed production-level Flutter apps for both Android and iOS',
      'Integrated REST APIs, Firebase, WebSockets, and local storage solutions',
      'Implemented offline syncing, background fetching, and advanced caching layers',
      'Optimized app load times, improving performance by 40–60% across major features',
      'Created reusable components, custom widgets, and animation-based user interfaces',
    ],
  },
  {
    title: 'Junior Flutter Developer',
    company: 'Large IT, Mohammadpur, Dhaka',
    period: '2020 – 2021',
    duration: '1 Year',
    current: false,
    responsibilities: [
      'Worked on UI screen development and pixel-perfect designs',
      'Wrote efficient Dart code and contributed to core features',
      'Implemented Firebase Auth, Cloud Messaging, and Firestore logic',
      'Improved app performance by reducing unnecessary rebuilds',
      'Assisted in version control & deployment tasks',
    ],
  },
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">03. EXPERIENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Work <span className="text-gradient">History</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 last:mb-0 ${
                  isVisible ? `animate-slide-up opacity-0 stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-glow -translate-x-1/2 mt-2">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-primary">•</span>
                        <span>{exp.duration}</span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.slice(0, 4).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
