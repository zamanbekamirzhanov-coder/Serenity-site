import './globals.css';

export const metadata = {
  title: 'Serenity — химчистка в Астане',
  description: 'Современная химчистка в Астане с аккуратным сервисом, понятной консультацией и бережным подходом к изделиям.',
  openGraph: {
    title: 'Serenity — химчистка в Астане',
    description: 'Профессиональный уход за вещами с вниманием к качеству и деталям.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
