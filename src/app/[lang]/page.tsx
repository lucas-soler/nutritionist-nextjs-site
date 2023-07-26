import Header from "../components/Header";

export type PageProps = {
  params: {
    lang: string;
  };
};

export type ComponentProps = {
  lang: string;
};

export default function Home({ params: { lang } }: PageProps) {
  console.log("Passing through home to test the static generation");
  return <Header params={{ lang }} />;
}
