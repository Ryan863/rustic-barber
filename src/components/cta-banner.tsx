import { MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";

export function CtaBanner() {
  const waUrl =
    "https://wa.me/5549988941691?text=Ol%C3%A1%2C%20Rustic%20Barber!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20hoje.";

  return (
    <section className="py-24 sm:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-16 rounded-3xl bg-[#121214] border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Imediato</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-100 tracking-tight max-w-3xl mx-auto leading-tight">
            Pronto para elevar o seu padrão e a sua presença?
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Escolha o melhor horário para a sua rotina. Atendemos com pontualidade e dedicação
            no centro de Herval d&apos;Oeste até às 20:30.
          </p>

          {/* Large CTA Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#c5a880] hover:bg-[#d4b58a] text-[#09090b] font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_10px_35px_rgba(197,168,128,0.3)] hover:shadow-[0_15px_45px_rgba(197,168,128,0.5)] active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-[#09090b]" />
              <span>Agendar no WhatsApp · (49) 98894-1691</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-8 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a880]" />
              <span>Atendimento Estendido até 20:30</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              <span>Pontualidade e Sem Filas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
