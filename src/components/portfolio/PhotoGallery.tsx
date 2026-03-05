

import { useEffect, useState } from "react";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";
import { getGallery, GalleryItem } from "@/services/gallery.firestore";

const INITIAL_VISIBLE = 6;

const PhotoGallery = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getGallery();
      setItems(data);
      console.log("Gallery items loaded:", data);
    };
    load();
  }, []);

  const visible = showAll ? items : items.slice(0, INITIAL_VISIBLE);

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
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Photo <span className="text-primary">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {visible.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${getSizeClasses(item.size)}`}
            >
              <img
                src={item.imageUrl}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > INITIAL_VISIBLE && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Photos <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.imageUrl}
              alt={selected.caption}
              className="max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;