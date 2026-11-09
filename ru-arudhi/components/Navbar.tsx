"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Active Membership", href: "/active-membership" },
    { label: "Socials", href: "/socials" },
    { label: "Let's Chat!", href: "/forms" },
    { label: "Upcoming Events", href: "/upcoming-events" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#F5A46E] bg-[#FFF5F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-[#2A0D0D] sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          RU ARUDHI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-[#2A0D0D] transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-[#2A0D0D] transition hover:bg-[#F5A46E]/15 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-[#2A0D0D] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />

          <span
            className={`h-0.5 w-6 bg-[#2A0D0D] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />

          <span
            className={`h-0.5 w-6 bg-[#2A0D0D] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#F5A46E]/30 bg-[#FFF5F0] transition-all duration-300 md:hidden ${menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
          }`}
      >
        <div className="flex flex-col px-5 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#F5A46E]/20 py-4 text-base font-medium text-[#2A0D0D] transition-all last:border-b-0 hover:pl-2 hover:text-[#F5A46E]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}