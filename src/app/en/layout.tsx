import "../globals.css";

import { useLocale } from "next-intl";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/*
export async function generateMetadata({ params: { locale } }) {
  console.log("Vai mostrar locale");
  console.log(locale);
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}
*/
/*
export const metadata: Metadata = {
  category: `${metadataConfig.pt.category}`,
  title: {
    template: `%s | ${metadataConfig.pt.title}`,
    default: `${metadataConfig.pt.title}`,
  },
  description: `${metadataConfig.pt.description}`,
  applicationName: `${metadataConfig.pt.title}`,
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
    title: `${metadataConfig.pt.title}`,
    description: `${metadataConfig.pt.description}`,
    url: "https://nutrisuemisoler.com",
    siteName: `${metadataConfig.pt.title}`,
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
    title: `${metadataConfig.pt.title}`,
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
      me: [`${process.env.DEVELOPERS_EMAIL}`, `${process.env.DEVELOPERS_SITE}`],
    },
  },
};
*/

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  console.log(locale);

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    //notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
