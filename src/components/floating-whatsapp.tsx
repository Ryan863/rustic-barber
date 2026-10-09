"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phone = "5549988941691";
  const defaultMessage =
    "Olá! Vim pelo site da Rustic Barber e gostaria de agendar um horário.";
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Atendimento WhatsApp Rustic Barber"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 print:hidden"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-95"
      >
        {/* Pulsing Attention Radar */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2] shrink-0" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
