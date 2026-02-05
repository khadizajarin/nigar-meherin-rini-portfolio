import { FileSearch, Trophy } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Academic Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Research <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Research Assistant Role */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-portfolio-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center shrink-0">
                <FileSearch className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-gold-light font-body text-sm tracking-widest uppercase">
                    Research Assistant • 2022–2025
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
                    “From Classroom to Newsroom” Project
                  </h3>
                  <p className="text-primary-foreground/80 mt-2">
                    Supervised by <strong>Rajib Nandy</strong>, Associate Professor, 
                    Department of Communication and Journalism, University of Chittagong
                  </p>
                </div>

                <ul className="list-disc list-inside space-y-2 text-primary-foreground/85">
                  <li>
                    Assisted in academic and applied research bridging journalism education
                    with professional newsroom practices
                  </li>
                  <li>
                    Supported data collection, content analysis, and documentation of media workflows
                  </li>
                  <li>
                    Contributed to research coordination, fieldwork support, and preparation of
                    analytical reports and learning materials
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Monograph */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-portfolio-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center shrink-0">
                <FileSearch className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-gold-light font-body text-sm tracking-widest uppercase">
                    Academic Monograph • 2024
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
                    Impact of Facebook Influencers' Product Promotion on Viewers
                  </h3>
                  <p className="text-primary-foreground/80 mt-2">
                    A study on students of the University of Chittagong
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gold-light" />
                  </div>
                  <p className="text-primary-foreground/90">
                    Participated in <strong>Chattogram Research Festival 2023</strong>, 
                    Department of Communication and Journalism
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
