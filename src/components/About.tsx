"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start">
        <div className="relative">
          <Image
            src="/photos/Guitar_with_amps.jpeg"
            alt="Guitar and amps"
            width={500}
            height={600}
            className="-rotate-2 shadow-lg rounded-sm"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-text mb-8">
            About
          </h2>

          <div className="space-y-5 text-warm-muted leading-relaxed text-lg">
            <p>
              I studied computer science at{" "}
              <a
                href="https://www.gvsu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-underline text-warm-text hover:text-warm-accent"
              >
                Grand Valley State University
              </a>{" "}
              and now build software full-time at Roadrunner — everything from
              marketing sites and client portals to internal data tools.
            </p>

            <p>
              Outside of work I play guitar, obsess over pedals, and collect
              vinyl. Heavy metal, rock, and everything loud. I also dig into
              video games and comic books when I get the chance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
