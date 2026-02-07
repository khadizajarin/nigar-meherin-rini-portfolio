/* eslint-disable @typescript-eslint/no-explicit-any */
import { Video, Newspaper, Mic, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects, Project } from "@/services/projects.firestore";

const iconMap: Record<string, any> = {
  Video,
  Newspaper,
  Mic,
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    load();
  }, []);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Academic Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || Video;

            return (
              <div
                key={project.id}
                className="group bg-card rounded-2xl p-6 shadow-portfolio-sm hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>

                    <p className="text-primary font-medium text-sm mb-1">
                      {project.organization}
                    </p>

                    <p className="text-muted-foreground text-xs mb-3">
                      {project.period}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
