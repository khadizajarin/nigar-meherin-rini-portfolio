import { GraduationCap } from "lucide-react";

const Teaching = () => {
  return (
    <section id="teaching" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Academic Roles
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Teaching <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-portfolio-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-gold-light font-body text-sm tracking-widest uppercase">
                    Teaching Assistant • 2024
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
                    CAJ 408: Multimedia Production (Fourth Year Course)
                  </h3>
                  <p className="text-primary-foreground/80 mt-2">
                    Supervised by <strong>Rajib Nandy</strong>, Associate Professor, 
                    Department of Communication and Journalism, University of Chittagong
                  </p>
                </div>

                <ul className="list-disc list-inside space-y-2 text-primary-foreground/85">
                  <li>
                    Assisted in undergraduate teaching activities, including class facilitation
                    and tutorial support
                  </li>
                  <li>
                    Supported course coordination, student mentoring, and academic assessment processes
                  </li>
                  <li>
                    Reviewed student assignments and provided structured, constructive academic feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
