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
  metadataBase: new URL('https://serenity-site-lovat.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Serenity — химчистка в Астане',
    description: 'Профессиональный уход за вещами с вниманием к качеству и деталям. Чистка одежды, обуви, штор, одеял. 3 пункта приёма в Астане.',
    url: 'https://serenity-site-lovat.vercel.app',
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
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DryCleaningOrLaundry',
  name: 'Serenity',
  description: 'Современная химчистка в Астане с аккуратным сервисом, понятной консультацией и бережным подходом к изделиям.',
  url: 'https://serenity-site-lovat.vercel.app',
  telephone: '+77769262888',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Туран 22/1',
      addressLocality: 'Астана',
      addressCountry: 'KZ',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Кайым Мухамедханова 4а',
      addressLocality: 'Астана',
      addressCountry: 'KZ',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Алихан Бокейхан 16/3',
      addressLocality: 'Астана',
      addressCountry: 'KZ',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
      description: 'Туран 22/1',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '19:00',
      description: 'Кайым Мухамедханова 4а / Алихан Бокейхан 16/3',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Астана',
  },
  serviceType: [
    'Химчистка одежды',
    'Химчистка обуви',
    'Чистка штор',
    'Чистка одеял и подушек',
    'Химчистка верхней одежды',
  ],
  priceRange: '₸₸',
  currenciesAccepted: 'KZT',
  paymentAccepted: 'Cash, Card',
  availableLanguage: ['Russian', 'English', 'Kazakh'],
  sameAs: [
    'https://www.instagram.com/serenity.clean',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
