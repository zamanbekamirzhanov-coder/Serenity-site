import './globals.css';

export const metadata = {
  title: 'Serenity — химчистка в Астане | Чистка одежды, обуви, штор',
  description: 'Профессиональная химчистка в Астане. Бережная чистка курток, пальто, обуви, штор, одеял и подушек. 3 пункта приёма. Напишите в WhatsApp для консультации.',
  keywords: 'химчистка Астана, чистка одежды Астана, химчистка обуви Астана, чистка курток, чистка штор, Serenity, химчистка Serenity, химтазалау Астана, dry cleaning Astana',
  authors: [{ name: 'Serenity' }],
  creator: 'Serenity',
  publisher: 'Serenity',
  formatDetection: {
    telephone: true,
    email: false,
  },
  metadataBase: new URL('https://serenity.kz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Serenity — химчистка в Астане',
    description: 'Профессиональный уход за вещами с вниманием к качеству и деталям. Чистка одежды, обуви, штор, одеял. 3 пункта приёма в Астане.',
    url: 'https://serenity.kz',
    siteName: 'Serenity',
    locale: 'ru_KZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serenity — химчистка в Астане',
    description: 'Профессиональный уход за вещами с вниманием к качеству и деталям.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured data (JSON-LD) for Google
// Каждый пункт приёма — отдельный объект с координатами, телефоном и графиком.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'DryCleaningOrLaundry',
      '@id': 'https://serenity.kz/#turan',
      name: 'Serenity — химчистка в Астане (Туран 22/1)',
      description:
        'Химчистка полного цикла в Астане: чистка курток, пальто, обуви, штор, одеял и подушек. Собственное производство, аккуратный сервис.',
      url: 'https://serenity.kz',
      telephone: '+77769262888',
      priceRange: '₸₸',
      currenciesAccepted: 'KZT',
      paymentAccepted: 'Cash, Card',
      availableLanguage: ['Russian', 'English', 'Kazakh'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'проспект Туран, 22/1',
        addressLocality: 'Астана',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.1405366,
        longitude: 71.4108074,
      },
      areaServed: {
        '@type': 'City',
        name: 'Астана',
      },
      serviceType: [
        'Химчистка одежды',
        'Химчистка верхней одежды',
        'Химчистка обуви',
        'Чистка штор и тюля',
        'Чистка одеял и подушек',
        'Стирка и химчистка для бизнеса',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/serenity.clean',
        'https://go.2gis.com/5GxTc',
      ],
    },
    {
      '@type': 'DryCleaningOrLaundry',
      '@id': 'https://serenity.kz/#mukhamedkhanova',
      name: 'Serenity — пункт приёма (Кайым Мухамедханова 4а)',
      url: 'https://serenity.kz',
      telephone: '+77714167908',
      priceRange: '₸₸',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'улица Кайым Мухамедханова, 4а, магазин Mitris',
        addressLocality: 'Астана',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.1373931,
        longitude: 71.401668,
      },
      areaServed: {
        '@type': 'City',
        name: 'Астана',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      sameAs: ['https://go.2gis.com/w8GVG'],
    },
    {
      '@type': 'DryCleaningOrLaundry',
      '@id': 'https://serenity.kz/#bokeikhan',
      name: 'Serenity — пункт приёма (Алихан Бокейхан 16/3)',
      url: 'https://serenity.kz',
      telephone: '+77779262888',
      priceRange: '₸₸',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'улица Алихан Бокейхан, 16/3',
        addressLocality: 'Астана',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.10784,
        longitude: 71.4350259,
      },
      areaServed: {
        '@type': 'City',
        name: 'Астана',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      sameAs: ['https://go.2gis.com/IbsFZ'],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="CEw00ooELvSW9t-8CEgTW1fLBgrQ-iRzg88Heh3BQOk" />
        <meta name="google-site-verification" content="YDgaXtqZNqeTyvzgWBO23mWfDkz_5KEdM7LE5pxss60" />
        <meta name="yandex-verification" content="0848063dc8933457" />
        <meta name="theme-color" content="#2D5A3D" />
        <meta name="geo.region" content="KZ-AST" />
        <meta name="geo.placename" content="Astana" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
