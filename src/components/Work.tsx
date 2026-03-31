"use client";

import { motion } from "framer-motion";

const featured = {
  title: "Roadrunner Retro",
  role: "Software Engineer",
  description:
    "Roadrunner collects retroreflectivity data on pavement markings — the measurements that tell DOTs whether road lines are visible enough at night to meet federal safety standards. I built the marketing site and am building a portal for state DOTs to explore their survey data through interactive maps, charts, and compliance reports.",
  tags: ["Next.js", "TypeScript", "Firebase", "MapLibre GL", "PostgreSQL"],
  link: "https://us-roadrunner.com",
};

const projects = [
  {
    title: "Quality Roots",
    role: "Freelance Frontend Developer",
    description:
      "Helped rebuild a Michigan dispensary chain\u2019s site in Next.js — product browsing, cart, checkout, delivery, deals, and account management with server-side caching throughout.",
    tags: ["Next.js", "React", "HeroUI", "Tailwind CSS"],
    link: "https://getqualityroots.com",
  },
  {
    title: "BoutMaker",
    role: "Developer",
    description:
      "Helps wrestling coaches auto-generate match pairings and tournament brackets. Roster imports, weight-class matching, and batch PDF generation.",
    tags: ["Web App", "AI", "PDF Generation"],
    link: "https://boutmaker.com",
  },
  {
    title: "GearTree",
    role: "Personal Project",
    description:
      "A database app for cataloging guitar gear collections. Track guitars, amps, and everything else.",
    tags: ["Express", "Node.js"],
    link: "https://geartree-project.fly.dev",
  },
];

const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)" },
};

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Featured: Roadrunner */}
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={clipReveal}
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-text mb-2">
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-accent"
              >
                {featured.title}
                <span className="text-warm-muted text-2xl ml-3">&#8599;</span>
              </a>
            </h2>
          </motion.div>
          <p className="text-xs uppercase tracking-[0.15em] text-warm-accent mt-3 mb-6">
            {featured.role}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <p className="text-warm-muted leading-relaxed text-lg">
              {featured.description}
            </p>
            <p className="text-sm text-warm-muted">
              {featured.tags.join(" · ")}
            </p>
          </div>
        </div>

        {/* Other projects */}
        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-t border-surface py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 items-baseline"
            >
              <div>
                <h3 className="font-serif text-2xl text-warm-text">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-warm-accent"
                    >
                      {project.title}
                      <span className="text-warm-muted text-base ml-2">
                        &#8599;
                      </span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-warm-accent mt-1">
                  {project.role}
                </p>
              </div>

              <p className="text-warm-muted leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-warm-muted whitespace-nowrap">
                {project.tags.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
