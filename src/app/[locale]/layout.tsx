import { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import { ReactNode } from "react";
import { PageProps } from "./page";

type Props = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

export async function generateMetadata({ params: { locale } }: PageProps) {
  const translator = await getTranslator(locale);

  const metadata: Metadata = {
    category: `${translator("metaData.category")}`,
    title: {
      template: `%s | ${translator("metaData.title")}`,
      default: `${translator("metaData.title")}`,
    },
    description: `${translator("metaData.description")}`,
    applicationName: `${translator("metaData.title")}`,
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
      title: `${translator("metaData.title")}`,
      description: `${translator("metaData.description")}`,
      url: "https://nutrisuemisoler.com",
      siteName: `${translator("metaData.title")}`,
      images: [
        {
          url: "https://lh3.googleusercontent.com/p/AF1QipNZPXyAo3ECOW4fNjD8gTrh50dY0r0XFEMjO6Rg=s680-w680-h510",
          width: 800,
          height: 600,
        },
        {
          url: "https://lh3.googleusercontent.com/p/AF1QipNZPXyAo3ECOW4fNjD8gTrh50dY0r0XFEMjO6Rg=s680-w680-h510",
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
      title: `${translator("metaData.title")}`,
      description: "",
      creator: "@nextjs",
      images: {
        url: "https://lh3.googleusercontent.com/p/AF1QipNZPXyAo3ECOW4fNjD8gTrh50dY0r0XFEMjO6Rg=s680-w680-h510",
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
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
