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

export async function generateMetadata({ params: { lang } }: PageProps) {
  const dictionaire = await getDictionary(lang);

  const metadata: Metadata = {
    category: `${dictionaire.category}`,
    title: {
      template: `%s | ${dictionaire.title}`,
      default: `${dictionaire.title}`,
    },
    description: `${dictionaire.description}`,
    applicationName: `${dictionaire.title}`,
    authors: [
      {
        name: `${process.env.DEVELOPERS_NAME}`,
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
    creator: `${process.env.DEVELOPERS_NAME}`,
    publisher: `${process.env.DEVELOPERS_NAME}`,
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
      title: `${dictionaire.title}`,
      description: `${dictionaire.description}`,
      url: "https://nutrisuemisoler.com",
      siteName: `${dictionaire.title}`,
      images: [
        {
          url: `${process.env.FULL_URL}/suemi.jpg`,
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.FULL_URL}/suemi.jpg`,
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
      title: `${dictionaire.title}`,
      description: "",
      creator: "@nextjs",
      images: {
        url: `${process.env.FULL_URL}/suemi.jpg`,
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
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}