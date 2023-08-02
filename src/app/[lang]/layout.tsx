import "../globals.css";

import { Archivo_Black, Josefin_Sans, Montserrat } from "next/font/google";

import { capitalizePersonName } from "@/utils/utils";
import { Metadata } from "next";
import { ReactNode } from "react";
import { getDictionary } from "./dictionaries";
import { PageProps } from "./page";

type Props = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export async function generateMetadata({ params: { lang } }: PageProps) {
  const dictionaire = await getDictionary(lang);

  const metadata: Metadata = {
    manifest: "/manifest.json",
    category: `${dictionaire.category}`,
    title: {
      template: capitalizePersonName(`%s | ${dictionaire.title}`),
      default: capitalizePersonName(`${dictionaire.title}`),
    },
    description: `${dictionaire.description}`,
    applicationName: capitalizePersonName(`${dictionaire.title}`),
    authors: [
      {
        name: capitalizePersonName(`${process.env.DEVELOPERS_NAME}`),
        url: `${process.env.DEVELOPERS_SITE}`,
      },
    ],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": `${process.env.EN_DOMAIN}`,
      },
    },
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    colorScheme: "light",
    creator: capitalizePersonName(`${process.env.DEVELOPERS_NAME}`),
    publisher: capitalizePersonName(`${process.env.DEVELOPERS_NAME}`),
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: capitalizePersonName(`${dictionaire.title}`),
      description: `${dictionaire.description}`,
      url: "https://nutrisuemisoler.com",
      siteName: capitalizePersonName(`${dictionaire.title}`),
      images: [
        {
          url: `${process.env.FULL_URL}/the-nutritionist-suemi.jpg`,
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.FULL_URL}/the-nutritionist-suemi.jpg`,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "app",
      title: capitalizePersonName(`${dictionaire.title}`),
      description: "",
      creator: "@nextjs",
      images: {
        url: `${process.env.FULL_URL}/the-nutritionist-suemi.jpg`,
        alt: "Nutricionista Suemi Soler",
      },
      app: {
        name: "twitter_app",
        id: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
          googleplay: "twitter_app://googleplay",
        },
        url: {
          iphone: "https://iphone_url",
          ipad: "https://ipad_url",
        },
      },
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    verification: {
      google: "google",
      yahoo: "yahoo",
      other: {
        me: [
          `${process.env.DEVELOPERS_EMAIL}`,
          `${process.env.DEVELOPERS_SITE}`,
        ],
      },
    },
  };

  return metadata;
}

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default function Root({ children, params }: Props) {
  return (
    <html
      lang={params.lang}
      className={`${archivoBlack.variable} ${montserrat.variable} ${josefinSans.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
