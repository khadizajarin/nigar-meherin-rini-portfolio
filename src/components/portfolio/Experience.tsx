import { Briefcase, Tv, Users, Newspaper, PenTool } from "lucide-react";

const experiences = [
  {
    title: "Reporter",
    company: "Somoy Television",
    period: "May 2024 - December 2025",
    description: "Covering breaking news, conducting interviews, and producing compelling multimedia stories for one of Bangladesh's leading news channels.",
    icon: Tv,
  },
  {
    title: "Secretary",
    company: "Chittagong University Content Creators Club",
    period: "March 2024 - Present",
    description: "Leading content strategy and workshops for aspiring content creators at the university.",
    icon: Users,
    current: true,
  },
  {
    title: "Multimedia Contributor",
    company: "The Business Standard",
    period: "Feb 2023 - April 2024",
    description: "Created engaging multimedia reports and contributed to digital content initiatives.",
    icon: Newspaper,
  },
  {
    title: "Typist",
    company: "Halda Publication",
    period: "Sep 2022 - Sep 2023",
    description: "Managed typesetting and content preparation for various publications.",
    icon: PenTool,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center shrink-0
                    ${exp.current 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'bg-card text-primary shadow-portfolio-sm group-hover:shadow-portfolio-md'}
                    transition-all duration-300
                  `}>
                    <exp.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground font-body">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
