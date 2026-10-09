import { Star, CheckCircle, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  tag?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Higor Lima",
    role: "Cliente Frequente · Avaliação Google",
    text: "Excelente atendimento, local aconchegante e horário de atendimento diferenciado. Os profissionais são qualificados, habilidosos e educados...",
    rating: 5,
    date: "Avaliação Verificada",
    tag: "Horário Diferenciado",
  },
  {
    name: "Laudecir Gross",
    role: "Cliente · Avaliação Google",
    text: "Ambiente top, ótimo atendimento e profissionais super qualificados.",
    rating: 5,
    date: "Avaliação Verificada",
    tag: "Equipe Qualificada",
  },
  {
    name: "Pai de Cliente Kids",
    role: "Atendimento Infantil · Avaliação Google",
    text: "Trabalho de excelência com crianças o Felipe é Top!",
    rating: 5,
    date: "Avaliação Verificada",
    tag: "Especialista Kids",
  },
  {
    name: "Vini",
    role: "Cliente · Avaliação Google",
    text: "Muito boa, atendimento ótimo, somos bem acolhidos ali, trabalho bem feito, ou seja, perfeito!",
    rating: 5,
    date: "Avaliação Verificada",
    tag: "Acolhimento & Precisão",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Score Card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-3">
              Prova Social &amp; Reputação
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-neutral-100 tracking-tight leading-tight">
              A confiança de mais de 210 clientes satisfeitos.
            </h2>
          </div>

          {/* Google Score Summary Pill */}
          <div className="mt-6 md:mt-0 p-4 rounded-2xl bg-[#141416] border border-neutral-800 flex items-center gap-4">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-neutral-800">
              <span className="text-3xl font-bold text-white tracking-tight">4.9</span>
              <div className="flex text-[#c5a880] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Avaliações</span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Mais de 210 avaliações registradas
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-neutral-800/80 hover:border-[#c5a880]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-neutral-800 group-hover:text-[#c5a880]/20 transition-colors">
                <Quote className="w-8 h-8 stroke-1" />
              </div>

              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#c5a880]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>
                  {item.tag && (
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#1c1917] border border-[#c5a880]/30 text-[#c5a880]">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.role}</p>
                </div>
                <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
