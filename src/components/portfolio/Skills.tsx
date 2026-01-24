import { 
  Mic2, 
  Music, 
  FileText, 
  Sparkles, 
  Film, 
  Car,
  FileSpreadsheet,
  Presentation,
  Table,
  Palette,
  Video,
  ImageIcon
} from "lucide-react";

const skills = [
  { name: "Anchoring", icon: Mic2 },
  { name: "Singing", icon: Music },
  { name: "Script Writing", icon: FileText },
  { name: "Dancing", icon: Sparkles },
  { name: "Story Directing", icon: Film },
  { name: "Driving", icon: Car },
];

const tools = [
  { name: "Microsoft Word", icon: FileSpreadsheet },
  { name: "Microsoft PowerPoint", icon: Presentation },
  { name: "Microsoft Excel", icon: Table },
  { name: "Adobe Illustrator", icon: Palette },
  { name: "Adobe Premiere Pro", icon: Video },
  { name: "Adobe Photoshop", icon: ImageIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            My Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-primary">Tools</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Creative Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 text-center shadow-portfolio-sm hover:shadow-portfolio-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <skill.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="font-body font-medium text-foreground">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Software & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 text-center shadow-portfolio-sm hover:shadow-portfolio-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <tool.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="font-body font-medium text-foreground text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
