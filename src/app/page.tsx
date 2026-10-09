import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Reviews } from "@/components/reviews";
import { Location } from "@/components/location";
import { InstagramFeed } from "@/components/instagram-feed";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SchemaOrg } from "@/components/schema-org";

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Experience />
        <Reviews />
        <Location />
        <InstagramFeed />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
