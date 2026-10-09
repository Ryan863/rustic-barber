import Image from "next/image";
import { MessageCircle, Star, Clock, ChevronDown } from "lucide-react";

export function Hero() {
  const waUrl =
    "https://wa.me/5549988941691?text=Ol%C3%A1%2C%20Rustic%20Barber!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Editorial Image with Organic Masking */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Rustic Barber Herval d'Oeste - Barbearia Premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mask-hero-image filter brightness-[0.45] contrast-[1.08] scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Editorial Gradients & Subtle Grain Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/40 to-[#09090b]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(9,9,11,0.85)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#18181b]/70 backdrop-blur-md mb-8 animate-fade-in shadow-lg shadow-black/50">
          <span className="flex h-2 w-2 rounded-full bg-[#c5a880] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            Barbearia &amp; Presença · Herval d&apos;Oeste
          </span>
        </div>

        {/* Primary Heading */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-100 leading-[1.08] max-w-4xl mx-auto">
          Mais que um corte.{" "}
          <span className="italic block mt-1 bg-gradient-to-r from-neutral-100 via-[#e2cca6] to-[#c5a880] bg-clip-text text-transparent">
            Presença, estilo e confiança.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mx-auto">
          Cuidado masculino de alto padrão e atendimento diferenciado no centro de
          Herval d&apos;Oeste.
        </p>

        {/* Single Exclusive Action CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#c5a880] hover:bg-[#d4b58a] text-[#09090b] font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_10px_35px_rgba(197,168,128,0.25)] hover:shadow-[0_15px_45px_rgba(197,168,128,0.4)] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-[#09090b] transition-transform duration-300 group-hover:scale-110" />
            <span>Agendar Horário no WhatsApp</span>
          </a>
        </div>

        {/* Subtle Social Proof & Schedule Strip */}
        <div className="mt-12 pt-8 border-t border-neutral-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="flex text-[#c5a880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-none" />
              ))}
            </div>
            <span className="text-neutral-200 font-medium">Nota 4,9 no Google</span>
            <span className="text-neutral-500 hidden sm:inline">(+210 avaliações)</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700" />

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c5a880]" />
            <span className="text-neutral-200">Horário estendido até 20:30</span>
            <span className="text-neutral-500">(Segunda a Sábado)</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#servicos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-[#c5a880] transition-colors duration-200 group focus:outline-none"
        aria-label="Rolar para os serviços"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100">
          Explore o espaço
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a880]" />
      </a>
    </section>
  );
}
