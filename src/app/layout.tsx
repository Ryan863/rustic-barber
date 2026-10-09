import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rusticbarber.com.br"),
  title: "Rustic Barber | Barbearia Premium em Herval d'Oeste - SC",
  description:
    "Barbearia & Presença · Cuidado · Estilo · Confiança. Cortes masculinos com visagismo, barboterapia tradicional, atendimento kids com excelência e horário estendido até 20:30 no Centro de Herval d'Oeste.",
  keywords: [
    "Rustic Barber",
    "Barbearia Herval d'Oeste",
    "Barbearia Joaçaba",
    "Corte masculino Herval d'Oeste",
    "Barboterapia",
    "Corte infantil masculino Felipe",
    "Visagismo de barba",
    "Barbearia horário estendido",
  ],
  authors: [{ name: "Rustic Barber" }],
  openGraph: {
    title: "Rustic Barber | Barbearia & Presença em Herval d'Oeste",
    description:
      "Mais que um corte. Presença, estilo e confiança. Atendimento estendido até 20:30 no Centro de Herval d'Oeste.",
    url: "https://rusticbarber.com.br",
    siteName: "Rustic Barber",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rustic Barber - Ambiente & Cortes Masculinos Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustic Barber | Barbearia Premium",
    description: "Cuidado masculino de alto padrão e atendimento diferenciado em Herval d'Oeste.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased bg-[#09090b] text-neutral-100`}
    >
      <body className="font-sans min-h-screen bg-[#09090b] text-neutral-100 flex flex-col selection:bg-[#c5a880]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
