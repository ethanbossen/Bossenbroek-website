"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-surface"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-lg text-warm-text">
          Ethan Bossenbroek
        </a>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-warm-muted hover:text-warm-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
