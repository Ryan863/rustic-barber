import Image from "next/image";
import { Clock, ShieldCheck, Armchair, Coffee, Sparkles } from "lucide-react";

export function Experience() {
  const highlights = [
    {
      icon: Clock,
      title: "Horário Estendido até 20:30",
      description:
        "Atendimento até as 20h30 de segunda a sábado. O horário ideal para cuidar do visual após o seu expediente de trabalho, sem correria.",
    },
    {
      icon: Armchair,
      title: "Espaço Térreo & Moderno",
      description:
        "Localizado no piso térreo da Rua Santa Catarina, proporcionando total acessibilidade, conforto e facilidade de entrada.",
    },
    {
      icon: Sparkles,
      title: "Ambiente Climatizado & Confortável",
      description:
        "Design rústico refinado, climatização contínua e som ambiente pensado para o seu bem-estar e relaxamento.",
    },
    {
      icon: Coffee,
      title: "Experiência & Hospitalidade",
      description:
        "Mais do que uma barbearia, um ponto de encontro. Café de qualidade, bebidas e a acolhida genuína do #teamrustic.",
    },
  ];

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#0c0a09] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <div className="relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src="/images/ambiente.jpg"
                  alt="Espaço Rustic Barber - Conforto e Modernidade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-[#c5a880]/40 shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#c5a880]/15 flex items-center justify-center shrink-0 border border-[#c5a880]/30">
                    <Clock className="w-6 h-6 text-[#c5a880]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-bold block">
                      Diferencial Exclusivo
                    </span>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      Atendimento até às 20:30
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      De Segunda a Sábado com horário marcado
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#c5a880] text-[#09090b]">
                  Flexibilidade Total
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-3">
              Ambiente &amp; Estilo de Vida
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-neutral-100 tracking-tight leading-tight">
              Um refúgio urbano pensado para o homem contemporâneo.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Desenvolvemos a Rustic Barber para ser uma pausa de alta qualidade na sua rotina.
              Do cheiro do café ao som ambiente e à precisão de cada navalhada, tudo foi estruturado
              para entregar a melhor experiência de barbearia do Meio-Oeste catarinense.
            </p>

            {/* Feature List Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-[#141416] border border-neutral-800/80 hover:border-[#c5a880]/40 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#c5a880]/10 flex items-center justify-center mb-3.5 text-[#c5a880]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-neutral-100 font-semibold text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
