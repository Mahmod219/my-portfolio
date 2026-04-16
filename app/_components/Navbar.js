"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hem", href: "#" },
    { name: "Projekt", href: "#projects" },
    { name: "Erfarenhet", href: "#experience" },
    { name: "Kontakt", href: "mailto:Mahmod219@gmail.com" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  px-6 ${
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-extrabold text-[#1e293b] tracking-tighter transition-colors group-hover:text-[#2ecc91]">
            MAHMOD<span className="text-[#2ecc91]">ALAYOUBI.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black text-slate-500 hover:text-[#2ecc91] transition-colors uppercase tracking-[0.15em]"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/Mahmod_Alayoubi_CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-[#1e293b] text-white rounded-xl text-sm font-bold hover:bg-[#2ecc91] hover:shadow-lg hover:shadow-[#2ecc91]/30 transition-all"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            CV
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-[#1e293b] hover:text-[#2ecc91] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Mahmod_Alayoubi_CV.pdf"
            download
            className="flex justify-center items-center gap-2 px-5 py-4 bg-[#2ecc91] text-white rounded-2xl font-bold text-lg"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Ladda ner CV
          </a>
        </div>
      )}
    </nav>
  );
}
