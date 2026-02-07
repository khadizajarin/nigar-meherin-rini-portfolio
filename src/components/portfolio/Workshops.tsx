import { Award, BookOpen } from "lucide-react";
import { getWorkshops } from "../../services/workshops.firestore";
import { useEffect, useState } from "react";

// const participatedWorkshops = [
//   {
//     title: "Youth Champions of the Environment - 2025",
//     date: "November 2025",
//   },
//   {
//     title: "AGILE – Women Media Leaders of Tomorrow",
//     description: "Made a documentary on women journalists",
//     date: "October 2025",
//   },
//   {
//     title: "Basic Journalism Course",
//     organization: "Press Institute Bangladesh (PIB)",
//     date: "February 2024",
//   },
//   {
//     title: "Knowledge Sharing Session on Fact Checking",
//     date: "June 2023",
//   },
//   {
//     title: "Constructive Journalism Workshop",
//     organization: "DW AKADEMIE",
//     date: "2022",
//   },
//   {
//     title: "One Minute Junior Short Film Festival",
//     organization: "UNICEF",
//     date: "2016",
//   },
// ];

// const conductedWorkshops = [
//    {
//     title: "Co-Trainer: Mobile Journalism (MoJo) Workshops",
//     organization:
//       "Supervised by Rajib Nandy, Associate Professor, Communication and Journalism, CU",
//     description:
//       "Co-facilitated hands-on training on mobile journalism tools and storytelling; supported curriculum design, training delivery, participant mentoring, and practical sessions on mobile-based reporting, video production, and digital storytelling.",
//     date: "2023–2025",
//   },
//   {
//     title: "Mobile Journalism Workshop",
//     organization: "Future Media Institute of Kolkata",
//     date: "August 2025",
//   },
//   {
//     title: "Media Relations & News Handling",
//     organization: "The Aura",
//     date: "June 2025",
//   },
//   {
//     title: "Script Writing Workshop",
//     organization: "SZHM Trust",
//     date: "May 2025",
//   },
//   {
//     title: "How to Make a Multimedia Report",
//     organization: "CU Content Creator's Club",
//     date: "March 2025",
//   },
//   {
//     title: "Mass Communication - Script Writing",
//     date: "February 2025",
//   },
//   {
//     title: "Workshop Session at Chittagong Press Club",
//     date: "April 2024",
//   },
// ];



const Workshops = () => {
  const [attended, setAttended] = useState([]);
  const [conducted, setConducted] = useState([]);

  useEffect(() => {
    const load = async () => {
      const attendedData = await getWorkshops("attended");
      const conductedData = await getWorkshops("conducted");

      setAttended(attendedData);
      setConducted(conductedData);
    };

    load();
  }, []);
  return (
    <section id="workshops" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Learning & Teaching
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Workshops & <span className="text-primary">Training</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Participated */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Workshops Attended
              </h3>
            </div>

            <div className="space-y-4">
              {attended.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300 border-l-4 border-transparent hover:border-primary"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-1">
                        {workshop.title}
                      </h4>
                      {workshop.description && (
                        <p className="text-sm text-muted-foreground mb-1">
                          {workshop.description}
                        </p>
                      )}
                      {workshop.organization && (
                        <p className="text-sm text-primary">{workshop.organization}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                      {workshop.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conducted */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Workshops Conducted
              </h3>
            </div>

            <div className="space-y-4">
             {conducted.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300 border-l-4 border-transparent hover:border-secondary"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-1">
                        {workshop.title}
                      </h4>

                      {workshop.description && (
                        <p className="text-sm text-muted-foreground mb-1">
                          {workshop.description}
                        </p>
                      )}

                      {workshop.organization && (
                        <p className="text-sm text-primary">{workshop.organization}</p>
                      )}
                    </div>

                    <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                      {workshop.date}
                    </span>
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

export default Workshops;
