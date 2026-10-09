export function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Rustic Barber | Herval d'Oeste",
    "image": "https://rusticbarber.com.br/images/hero.jpg",
    "telephone": "+55-49-98894-1691",
    "url": "https://rusticbarber.com.br",
    "priceRange": "$$",
    "description":
      "Barbearia & Presença · Cuidado · Estilo · Confiança. Cortes masculinos com visagismo, barboterapia tradicional, atendimento kids com excelência e horário estendido até 20:30 no Centro de Herval d'Oeste.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Santa Catarina, 11 - Sala B, Térreo",
      "addressLocality": "Herval d'Oeste",
      "addressRegion": "SC",
      "postalCode": "89610-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.1818,
      "longitude": -51.4975
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:30",
        "closes": "20:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": ["https://www.instagram.com/rusticbarber_/"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
