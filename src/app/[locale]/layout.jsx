import CookieBanner from "../../components/CookieBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale  } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.layout",
  });

  return {
    title: t("title"),
    description: t("description"),

    keywords: t("keywords"),

    authors: [
      {
        name: "Khakimov Sherzod",
      },
    ],

    creator: "Khakimov Sherzod",
    publisher: "VIDO FitLife",

    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "VIDO FitLife",
      images: [
        {
          url: "https://vido-fitlife.uz/og-image.png",
          width: 1536,
          height: 1024,
          alt: "VIDO FitLife",
        },
      ],

     

      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://vido-fitlife.uz/og-image.png"],
    },

    icons: {
      icon: [
        {
          url: "/favicon.ico",
        },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],

      apple: "/apple-touch-icon.png",

      other: [
        {
          rel: "manifest",
          url: "/site.webmanifest",
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vido-fitlife.uz/#website",
      url: "https://vido-fitlife.uz",
      name: "VIDO FitLife",
      description:
        "Articles about fitness, nutrition, healthy lifestyle, and wellness.",
      inLanguage: ["en", "ru", "uz"],
      publisher: {
        "@id": "https://vido-fitlife.uz/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://vido-fitlife.uz/#organization",
      name: "VIDO FitLife",
      url: "https://vido-fitlife.uz",
      logo: {
        "@type": "ImageObject",
        url: "https://vido-fitlife.uz/logo.png"
      }
    }
  ]
};

export default async function RootLayout({
  children,
  params,
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd)
  }}
/>
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main>{children}</main>

          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}