import { GraduationCap, Calendar, MapPin } from "lucide-react";

import { useEducation } from "@/hooks/useEducation";


const About = () => {
  const { education, loading } = useEducation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-body text-sm tracking-widest uppercase">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Passionate About
                <span className="block text-primary">Storytelling</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
             I am Nigar Meherin Rini, born and raised in Khagrachari, a hill district of Bangladesh where access to quality education and opportunities can be limited. Growing up in this environment shaped my resilience and motivated me to pursue higher education beyond my hometown.

            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
            I studied Communication and Journalism at the University of Chittagong, where I developed a strong interest in storytelling, media practice, and research. My academic journey helped me build a foundation in communication theory, media production, and analytical thinking.

            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Professionally, I worked as a Mojo Stringer at The Business Standard, where I gained hands-on experience in mobile journalism and digital reporting. Later, I worked for nearly two years as a Campus Correspondent at Somoy Television, covering campus and social issues, producing reports, and strengthening my field journalism and storytelling skills.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Alongside my professional work, I served as a Teaching Assistant, which enhanced my academic engagement and mentoring abilities. I was also the Secretary of the Chittagong University Content Creators’ Club, where I trained more than 30 members in content creation, script writing, and storytelling. In addition, I have conducted several workshops on script writing and story development, reflecting my commitment to knowledge sharing and collaborative learning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I aspire to contribute to ethical storytelling, research-driven communication, and meaningful media practices that promote informed dialogue and social awareness.
            </p>


            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Chittagong, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Born June 22, 2001</span>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["Bengali (Native)", "English (Fluent)", "Hindi (Fluent)", "Urdu (Fluent)"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-body"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 pb-8 last:pb-0 border-l-2 border-muted hover:border-primary transition-colors group"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-muted group-hover:bg-primary transition-colors" />

                  <div className="bg-card rounded-xl p-6 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-primary font-body bg-accent px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>

                    {edu.field && (
                      <p className="text-primary font-medium mb-1">
                        {edu.field}
                      </p>
                    )}

                    <p className="text-muted-foreground">{edu.institution}</p>

                    {edu.grade && (
                      <p className="text-sm text-muted-foreground mt-2 font-medium">
                        {edu.grade}
                      </p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
