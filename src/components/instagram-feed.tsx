import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/rusticbarber_/";

  const feedItems = [
    {
      image: "/images/hero.jpg",
      tag: "#cortedecabelo",
    },
    {
      image: "/images/barboterapia.jpg",
      tag: "#barboterapia",
    },
    {
      image: "/images/visagismo.jpg",
      tag: "#visagismo",
    },
    {
      image: "/images/kids.jpg",
      tag: "#kidsrustic",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#09090b] border-t border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#121214] border border-neutral-800 p-8 sm:p-12">
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
                <div className="w-full h-full rounded-[14px] bg-[#121214] flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    @rusticbarber_
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                    Oficial
                  </span>
                </div>
                <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                  Acompanhe transformações, cortes diários e o estilo do #teamrustic
                </p>
              </div>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-800 hover:border-[#c5a880] text-neutral-100 text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md self-start md:self-auto"
            >
              <span>Ver Perfil no Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
            </a>
          </div>

          {/* Editorial Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {feedItems.map((item, index) => (
              <a
                key={index}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-48 sm:h-64 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 block"
              >
                <Image
                  src={item.image}
                  alt="Postagem Instagram Rustic Barber"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-medium text-neutral-200">
                    {item.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
