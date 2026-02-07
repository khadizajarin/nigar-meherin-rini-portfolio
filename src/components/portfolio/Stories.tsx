/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { getStories } from "@/services/stories.firestore";

const Stories = () => {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    const data = await getStories();
    setStories(data);
  };

  return (
    <section id="stories" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Special <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of impactful multimedia stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-portfolio-sm hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-2 bg-gradient-hero" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-4">
                  {story.type}
                </span>

                <h3 className="font-display text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>

                {story.link ? (
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Story</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    Published Work
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
