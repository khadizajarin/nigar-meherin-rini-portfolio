"use client";

import { useEffect, useState } from "react";
import { getExperiences } from "@/services/experience.firestore";
import type { Experience } from "@/services/experience.admin"; // type is the same
import { iconMap, IconKey } from "@/utils/iconMap";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (err) {
        console.error("Failed to fetch experiences:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        Loading experience...
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => {
            // Safely map icon string to component, default to Briefcase
            const Icon = iconMap[exp.icon?.toLowerCase().trim() as IconKey] || Briefcase;

            return (
              <div key={exp.id} className="flex gap-6 items-start">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                    exp.current
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card text-primary shadow"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow hover:shadow-md transition">
                  <div className="flex justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {exp.current && (
                        <span className="mr-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
