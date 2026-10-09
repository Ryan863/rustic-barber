import { MapPin, Navigation, Clock, Phone, CheckCircle2 } from "lucide-react";

export function Location() {
  const addressQuery = "R. Santa Catarina, 11 - Sala B, Térreo - Centro, Herval d'Oeste - SC, 89610-000";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    addressQuery
  )}`;

  const schedule = [
    { day: "Segunda-feira", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Terça-feira", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Quarta-feira", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Quinta-feira", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Sexta-feira", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Sábado", hours: "08:30 – 20:30", note: "Horário Estendido" },
    { day: "Domingo", hours: "Fechado", note: "Descanso da Equipe" },
  ];

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-3">
            Localização &amp; Horários
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-neutral-100 tracking-tight leading-tight">
            Fácil acesso no coração de Herval d&apos;Oeste.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Estrutura no piso térreo planejada para sua comodidade, com atendimento estendido
            até às 20:30 para atender sua rotina com flexibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#141416] border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0 border border-[#c5a880]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                    Endereço
                  </span>
                  <h3 className="text-white font-semibold text-base mt-1">
                    Rustic Barber | Herval d&apos;Oeste
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1 leading-relaxed">
                    R. Santa Catarina, 11 - Sala B, Térreo
                    <br />
                    Centro, Herval d&apos;Oeste - SC, 89610-000
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Acesso térreo sem escadas</span>
                  </div>
                </div>
              </div>

              {/* GPS Navigation Button */}
              <div className="mt-6 pt-5 border-t border-neutral-800">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#c5a880] hover:bg-[#d4b58a] text-[#09090b] font-semibold text-sm transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar (Rota Google Maps / Waze)</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#141416] border border-neutral-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Horários de Atendimento
                  </h4>
                  <p className="text-neutral-400 text-xs">
                    Com horário marcado para pontualidade total
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-[#0c0a09]/60 text-xs"
                  >
                    <span className="text-neutral-300 font-medium">{item.day}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          item.hours === "Fechado"
                            ? "text-neutral-500 font-medium"
                            : "text-neutral-100 font-semibold"
                        }
                      >
                        {item.hours}
                      </span>
                      {item.hours !== "Fechado" && (
                        <span className="hidden sm:inline text-[10px] text-[#c5a880] bg-[#c5a880]/10 px-1.5 py-0.5 rounded">
                          até 20:30
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Strip */}
            <div className="p-5 rounded-2xl bg-[#141416] border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c5a880]" />
                <div>
                  <span className="text-xs text-neutral-400 block">WhatsApp Oficial</span>
                  <span className="text-sm font-semibold text-white">(49) 98894-1691</span>
                </div>
              </div>
              <a
                href="https://wa.me/5549988941691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-[#c5a880] hover:text-[#09090b] text-neutral-200 transition-colors"
              >
                Conversar
              </a>
            </div>
          </div>

          {/* Interactive Map (Right) */}
          <div className="lg:col-span-7 h-full min-h-[460px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative bg-neutral-900">
            <iframe
              title="Localização Rustic Barber Herval d'Oeste"
              src="https://maps.google.com/maps?q=R.+Santa+Catarina,+11+-+Sala+B,+Centro,+Herval+d%27Oeste+-+SC,+89610-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[460px] border-0 filter grayscale-[60%] invert-[90%] hue-rotate-180 contrast-[1.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 z-10 p-3 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-neutral-800 shadow-lg pointer-events-none">
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                Rustic Barber · Centro
              </p>
              <p className="text-[11px] text-neutral-400">Herval d&apos;Oeste - SC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
