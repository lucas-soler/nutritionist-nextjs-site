import Description from "../components/Description";
import Header from "../components/Header";
import { getDictionary } from "./dictionaries";

export type PageProps = {
  params: {
    lang: string;
  };
};

export type ComponentProps = {
  lang: string;
};

export default async function Home({ params: { lang } }: PageProps) {
  const dictionaire = await getDictionary(lang);

  return (
    <>
      <Header title={dictionaire.title} />
      <Description description={dictionaire.description} />
    </>
  );
}
