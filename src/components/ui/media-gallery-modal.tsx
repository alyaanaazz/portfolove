"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

type MediaGallery = {
  title: string;
  media: string[];
};

type MediaGalleryModalProps = {
  gallery: MediaGallery | null;
  onClose: () => void;
};

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export function MediaGalleryModal({ gallery, onClose }: MediaGalleryModalProps) {
  const [index, setIndex] = useState(0);

  if (!gallery || gallery.media.length === 0) return null;

  const safeIndex = Math.min(index, gallery.media.length - 1);
  const activeMedia = gallery.media[safeIndex];
  const hasMany = gallery.media.length > 1;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-zinc-950/80 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={gallery.title}
    >
      <div className="relative w-full max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">{gallery.title}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Close gallery"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-black">
          {isVideo(activeMedia) ? (
            <video src={activeMedia} controls autoPlay className="h-full w-full object-contain" />
          ) : (
            <Image src={activeMedia} alt={`${gallery.title} media ${safeIndex + 1}`} fill sizes="100vw" className="object-contain" />
          )}
        </div>
        {hasMany && (
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setIndex((value) => (value === 0 ? gallery.media.length - 1 : value - 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Previous media"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {gallery.media.map((media, mediaIndex) => (
                <button
                  key={media}
                  type="button"
                  onClick={() => setIndex(mediaIndex)}
                  className={`h-2.5 rounded-full transition ${
                    mediaIndex === safeIndex ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Open media ${mediaIndex + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((value) => (value === gallery.media.length - 1 ? 0 : value + 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Next media"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
