/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { getTeaching } from "@/services/teaching.firestore";

const Teaching = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getTeaching().then(setData);
  }, []);

  if (!data.length) return null;

  const item = data[0];

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
                  <span className="text-gold-light text-sm uppercase">
                    {item.role} • {item.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-2">{item.supervisor}</p>
                </div>

                <ul className="list-disc list-inside space-y-2">
                  {item.points?.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
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
