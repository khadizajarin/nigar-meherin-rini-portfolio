import { useState } from "react";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";

const photos = [
  { src: "/placeholder.svg", alt: "Workshop session", caption: "Workshop at University of Chittagong", size: "tall" },
  { src: "/placeholder.svg", alt: "News reporting", caption: "Field reporting for Somoy Television", size: "normal" },
  { src: "/placeholder.svg", alt: "Talk show recording", caption: "Talk show anchor session", size: "wide" },
  { src: "/placeholder.svg", alt: "Award ceremony", caption: "Receiving recognition", size: "normal" },
  { src: "/placeholder.svg", alt: "Team collaboration", caption: "Working with the news team", size: "tall" },
  { src: "/placeholder.svg", alt: "Event coverage", caption: "Covering special events", size: "normal" },
  { src: "/placeholder.svg", alt: "Interview session", caption: "Conducting an interview", size: "wide" },
  { src: "/placeholder.svg", alt: "Studio recording", caption: "Recording at the studio", size: "normal" },
  { src: "/placeholder.svg", alt: "Press conference", caption: "Attending press conference", size: "tall" },
  { src: "/placeholder.svg", alt: "Field assignment", caption: "On-location assignment", size: "normal" },
  { src: "/placeholder.svg", alt: "Workshop facilitation", caption: "Facilitating a workshop", size: "normal" },
  { src: "/placeholder.svg", alt: "Documentary shoot", caption: "Documentary filming", size: "wide" },
  { src: "/placeholder.svg", alt: "News desk", caption: "At the news desk", size: "tall" },
  { src: "/placeholder.svg", alt: "Campus event", caption: "University campus event", size: "normal" },
  { src: "/placeholder.svg", alt: "Media training", caption: "Media training session", size: "normal" },
  { src: "/placeholder.svg", alt: "Graduation ceremony", caption: "Academic milestone", size: "wide" },
  { src: "/placeholder.svg", alt: "Research presentation", caption: "Presenting research work", size: "normal" },
  { src: "/placeholder.svg", alt: "Travel feature", caption: "Travel feature shoot", size: "tall" },
  { src: "/placeholder.svg", alt: "Community story", caption: "Community storytelling", size: "normal" },
  { src: "/placeholder.svg", alt: "Behind the scenes", caption: "Behind the scenes", size: "normal" },
];

const INITIAL_VISIBLE = 6;

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, INITIAL_VISIBLE);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "tall":
        return "row-span-2";
      case "wide":
        return "col-span-2";
      default:
        return "";
    }
  };

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Captured moments from my journey as a journalist and media professional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {visiblePhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-portfolio-sm hover:shadow-portfolio-lg transition-all duration-300 ${getSizeClasses(photo.size)}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-portfolio-sm hover:shadow-portfolio-lg"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>View All Photos</span>
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="max-w-4xl max-h-[80vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-medium">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
