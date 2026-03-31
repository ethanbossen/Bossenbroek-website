"use client";

import {
  IconBrandGithub,
  IconBrandDiscord,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/ethanbossen",
    label: "GitHub",
  },
  {
    icon: IconBrandDiscord,
    href: "https://discord.com/users/frath.42",
    label: "Discord",
  },
  {
    icon: IconMail,
    href: "mailto:ethan.bossenbroek@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-warm-text text-cream py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-serif text-2xl mb-3">Ethan Bossenbroek</p>
          <p className="text-cream-dark/60 leading-relaxed">
            Software engineer in Michigan. Always happy to talk guitars or code.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end md:justify-center">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream-dark/60 hover:text-cream"
            >
              <Icon size={18} stroke={1.5} />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-cream/10">
        <p className="text-xs text-cream-dark/30">
          &copy; {new Date().getFullYear()} Ethan Bossenbroek
        </p>
      </div>
    </footer>
  );
}
