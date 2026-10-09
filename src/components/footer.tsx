import { Scissors, MessageCircle, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#070708] border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#18181b] border border-[#c5a880]/40 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-[#c5a880]" />
              </div>
              <span className="font-editorial text-xl font-bold tracking-wider uppercase text-white">
                Rustic Barber
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Barbearia &amp; Presença · Cuidado · Estilo · Confiança. Experiência de alto
              padrão no centro de Herval d&apos;Oeste.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rusticbarber_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="Instagram Rustic Barber"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5549988941691"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp Rustic Barber"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#servicos" className="hover:text-[#c5a880] transition-colors">
                  Serviços &amp; Visagismo
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#c5a880] transition-colors">
                  O Espaço &amp; Lifestyle
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#c5a880] transition-colors">
                  Avaliações de Clientes (4.9★)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#c5a880] transition-colors">
                  Localização &amp; Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Schedule */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-4">
              Unidade Herval d&apos;Oeste
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  R. Santa Catarina, 11 - Sala B, Térreo
                  <br />
                  Centro, Herval d&apos;Oeste - SC
                </span>
              </div>
              <p className="text-neutral-500">
                Segunda a Sábado com horário estendido até 20:30.
              </p>
            </div>
          </div>

          {/* Direct Booking */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-4">
              Agendamentos
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              Garanta seu horário com antecedência e evite esperas.
            </p>
            <a
              href="https://wa.me/5549988941691"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] hover:text-[#d4b58a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(49) 98894-1691</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {currentYear} Rustic Barber. Todos os direitos reservados.</p>
          <p className="text-neutral-400">
            Herval d&apos;Oeste · Santa Catarina · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
