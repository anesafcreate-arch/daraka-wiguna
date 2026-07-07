"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/lib/site-data";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryItems.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="text-left"
          >
            <article className="soft-panel brand-grid-card group h-full rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(7,17,31,0.12)]">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-72"
                />
              </div>
            </article>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,17,31,0.88)] p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Tutup gallery"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].alt}
            className="max-h-[85vh] max-w-[92vw] rounded-[24px] object-contain shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
