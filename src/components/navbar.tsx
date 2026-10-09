"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Scissors } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "A Barbearia", href: "#experiencia" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ];

  const waUrl = "https://wa.me/5549988941691?text=Ol%C3%A1%2C%20Rustic%20Barber!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-neutral-100 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#18181b] border border-[#c5a880]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#c5a880] group-hover:bg-[#c5a880]/10">
              <Scissors className="w-4 h-4 text-[#c5a880] transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-wider uppercase text-neutral-100 group-hover:text-white transition-colors">
                Rustic Barber
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-medium -mt-0.5">
                Herval d&apos;Oeste · SC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-300 hover:text-[#c5a880] transition-colors duration-200 tracking-wide text-[13px] font-medium uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-[#c5a880]/60 bg-[#c5a880]/10 hover:bg-[#c5a880] text-neutral-100 hover:text-[#09090b] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-neutral-800/80 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-[#c5a880] text-base font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-800">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#c5a880] text-[#09090b] text-sm font-bold uppercase tracking-wider shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
