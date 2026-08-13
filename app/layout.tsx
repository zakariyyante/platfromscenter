import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "AW-18359108026";

export const metadata: Metadata = {
  title: "Platformscenter - Les Meilleurs Sites de Jeux en France",
  description: "Trouvez les meilleures plateformes de jeux en France. Critiques d'experts, bonus exclusifs et paiements rapides.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased felt-texture">
        {/* Google Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${GA_MEASUREMENT_ID}/CONVERSION_LABEL',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}
