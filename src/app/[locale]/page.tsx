import { useTranslations } from "next-intl";
import Header from "../components/Header";

export type PageProps = {
  params: {
    locale: string;
  };
};

export type ComponentProps = {
  locale: string;
};

export default function Index({ params: { locale } }: PageProps) {
  const translator = useTranslations();

  return <Header locale={locale} />;
}
