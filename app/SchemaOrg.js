// Schema.org разметка для Google (LocalBusiness / DryCleaningOrLaundry)
// Куда вставить: см. ИНСТРУКЦИЯ.md

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DryCleaningOrLaundry",
        "@id": "https://serenity.kz/#turan",
        "name": "Serenity — химчистка в Астане (Туран 22/1)",
        "url": "https://serenity.kz",
        "telephone": "+77769262888",
        "priceRange": "₸₸",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "проспект Туран, 22/1",
          "addressLocality": "Астана",
          "addressCountry": "KZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.1405366,
          "longitude": 71.4108074
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://www.instagram.com/serenity.clean",
          "https://go.2gis.com/5GxTc"
        ]
      },
      {
        "@type": "DryCleaningOrLaundry",
        "@id": "https://serenity.kz/#mukhamedkhanova",
        "name": "Serenity — пункт приёма (Кайым Мухамедханова 4а)",
        "url": "https://serenity.kz",
        "telephone": "+77714167908",
        "priceRange": "₸₸",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "улица Кайым Мухамедханова, 4а, магазин Mitris",
          "addressLocality": "Астана",
          "addressCountry": "KZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.1373931,
          "longitude": 71.401668
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "DryCleaningOrLaundry",
        "@id": "https://serenity.kz/#bokeikhan",
        "name": "Serenity — пункт приёма (Алихан Бокейхан 16/3)",
        "url": "https://serenity.kz",
        "telephone": "+77779262888",
        "priceRange": "₸₸",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "улица Алихан Бокейхан, 16/3",
          "addressLocality": "Астана",
          "addressCountry": "KZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.107840,
          "longitude": 71.4350259
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
