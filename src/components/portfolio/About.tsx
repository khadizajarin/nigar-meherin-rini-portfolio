import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Social Science",
    field: "Communication and Journalism",
    institution: "University of Chittagong",
    period: "February 2025 – Ongoing",
  },
  {
    degree: "Bachelor of Social Science",
    field: "Communication and Journalism",
    institution: "University of Chittagong",
    period: "2023",
    grade: "CGPA 3.44/4.00",
  },
  {
    degree: "HSC",
    institution: "Khagrachari Govt. College",
    period: "2019",
    grade: "GPA 4.75/5.00",
  },
  {
    degree: "SSC",
    institution: "Khagrachari Govt. High School",
    period: "2017",
    grade: "GPA 4.91/5.00",
  },
];

const About = () => {
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
              I am a dedicated journalist currently working as a Reporter at Somoy Television, 
              one of Bangladesh's leading news channels. With a strong academic background in 
              Communication and Journalism from the University of Chittagong, I bring both 
              theoretical knowledge and practical skills to every story I cover.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans multimedia reporting, anchoring, script writing, and content creation. 
              I'm passionate about uncovering stories that matter and presenting them in compelling 
              ways that resonate with audiences.
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
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 last:pb-0 border-l-2 border-muted hover:border-primary transition-colors group"
                >
                  {/* Timeline dot */}
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
                      <p className="text-primary font-medium mb-1">{edu.field}</p>
                    )}
                    <p className="text-muted-foreground">{edu.institution}</p>
                    {edu.grade && (
                      <p className="text-sm text-muted-foreground mt-2 font-medium">{edu.grade}</p>
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
