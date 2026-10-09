import Image from "next/image";
import { Scissors, Sparkles, Heart, Award, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
  icon: typeof Scissors;
  tag: string;
}

const services: ServiceItem[] = [
  {
    id: "corte-visagismo",
    title: "Corte Masculino & Visagismo",
    subtitle: "Precisão Anatômica Sob Medida",
    description:
      "Alinhamento técnico personalizado para valorizar os traços do seu rosto, perfil e estilo de vida. Finalização impecável com produtos de alta performance.",
    highlight: "Consultoria estética + lavagem especial + styling com fixadores premium.",
    image: "/images/visagismo.jpg",
    icon: Scissors,
    tag: "Assinatura Rustic",
  },
  {
    id: "barboterapia",
    title: "Barboterapia & Acabamento",
    subtitle: "O Ritual Clássico da Navalha",
    description:
      "Toalha quente aromática, hidratação profunda com óleos essenciais, massagem facial relaxante e lâmina tradicional para um barbear sem irritações.",
    highlight: "Esfoliação suave, toalha quente revigorante e bálsamo calmante pós-barba.",
    image: "/images/barboterapia.jpg",
    icon: Sparkles,
    tag: "Experiência Sensorial",
  },
  {
    id: "kids-teen",
    title: "Atendimento Kids & Teen",
    subtitle: "Paciência, Técnica e Cuidado Especial",
    description:
      "Ambiente seguro, empático e descontraído para crianças e adolescentes. Corte moderno com a calma e o respeito que seu filho merece.",
    highlight: "Reconhecimento comprovado pelos pais: destaque para a excelência do profissional Felipe.",
    image: "/images/kids.jpg",
    icon: Heart,
    tag: "Destaque da Equipe",
  },
  {
    id: "combos-premium",
    title: "Combos de Cuidado Completo",
    subtitle: "Cabelo, Barba & Relaxamento",
    description:
      "A combinação perfeita para quem valoriza seu tempo e sua imagem. Cuidado integral com corte detalhado, barba completa e alinhamento de sobrancelhas.",
    highlight: "Experiência completa com pontualidade e o padrão #teamrustic.",
    image: "/images/ambiente.jpg",
    icon: Award,
    tag: "Mais Procurado",
  },
];

export function Services() {
  const getWhatsAppLink = (serviceName: string) => {
    return `https://wa.me/5549988941691?text=${encodeURIComponent(
      `Olá! Gostaria de agendar o serviço de ${serviceName} na Rustic Barber.`
    )}`;
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-neutral-800">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-3">
              Serviços &amp; Experiência
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-neutral-100 tracking-tight leading-tight">
              O padrão de cuidado que a sua presença exige.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md font-light leading-relaxed">
            Cada detalhe é executado com técnicas de alto padrão, equipamentos esterilizados
            e cosméticos de primeira linha para a sua melhor versão.
          </p>
        </div>

        {/* Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#121214] border border-neutral-800/90 hover:border-[#c5a880]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image Header with Soft Vignette */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] text-xs font-medium uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c5a880] font-medium">
                      {item.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-neutral-100 mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#18181b]/80 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2.5">
                      <span className="text-[#c5a880] font-bold text-sm leading-none mt-0.5">✦</span>
                      <span>{item.highlight}</span>
                    </div>
                  </div>

                  {/* Direct Card Action */}
                  <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      Atendimento com horário marcado
                    </span>
                    <a
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c5a880] hover:text-[#d4b58a] uppercase tracking-wider group-hover:translate-x-1 transition-all"
                    >
                      <span>Reservar</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
