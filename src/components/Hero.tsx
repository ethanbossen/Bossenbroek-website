"use client";

import dynamic from "next/dynamic";

const StringsScene = dynamic(() => import("./StringsScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <StringsScene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-warm-muted mb-4">
          Software Engineer / Guitarist / Pedal Hoarder
        </p>

        <h1 className="font-serif text-5xl sm:text-7xl text-warm-text mb-6">
          Ethan Bossenbroek
        </h1>

        <p className="text-lg text-warm-muted max-w-md leading-relaxed">
          Building software at Roadrunner. Playing guitar too loud. Collecting
          everything in between.
        </p>
      </div>
    </section>
  );
}
