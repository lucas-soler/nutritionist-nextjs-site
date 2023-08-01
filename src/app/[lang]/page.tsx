import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";

import Image from "next/image";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
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

  const professionalFullNameWithTitle =
    dictionaire.professionalTitle +
    " " +
    dictionaire.professionalName +
    " " +
    dictionaire.professionalSurname;

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col gap-2">
        <section className="flex flex-1 bg-white text-sm font-semibold">
          {dictionaire.phoneNumber} {process.env.EMAIL}
        </section>
        <nav className="flex flex-1 flex-row items-center">
          <a
            className="basis-2/12 flex justify-center items-center"
            href={process.env.FULL_URL}
          >
            <Image
              className="flex-1"
              src="/logo.png"
              alt={
                capitalizeSentence(
                  dictionaire.basicPrefixAlternativeImageText
                ) +
                " " +
                capitalizePersonName(professionalFullNameWithTitle)
              }
              title={capitalizePersonName(professionalFullNameWithTitle)}
              width={150}
              height={150}
            />
          </a>
          <h1 className="basis-4/12 flex flex-col">
            <span className="text-center">Suemi Shimizu Soler</span>
            <span className="text-center">
              Nutricionista funcional - {dictionaire.crnNumber}
            </span>
          </h1>
          <Menu menu={dictionaire.mainMenu} />
        </nav>
      </header>

      <main>
        <section
          id="welcome"
          className="flex flex-col justify-center items-center"
        >
          <h2>Bem-vindo ao Site do Nutricionista</h2>
          <p>Algumas inhtmlFormações introdutórias e chamadas para ação.</p>
          <iframe
            src="https://player.vimeo.com/video/384944723?autoplay=1&muted=1&h=61f97c9b28&title=0&byline=0&portrait=0"
            width="640"
            height="360"
            allow="autoplay; picture-in-picture"
          ></iframe>
        </section>
        <section id="about">
          <h2>Sobre o Nutricionista</h2>
          <p>
            InhtmlFormações sobre a htmlFormação e experiência do nutricionista,
            sua abordagem e filosofia de trabalho.
          </p>

          <figure>
            <Image
              src="/the-nutritionist-suemi.jpg"
              alt={
                capitalizeSentence(
                  dictionaire.basicPrefixAlternativeImageText
                ) +
                " " +
                capitalizePersonName(professionalFullNameWithTitle)
              }
              title={capitalizePersonName(professionalFullNameWithTitle)}
              width={369}
              height={324}
            />

            <figcaption>
              {capitalizePersonName(professionalFullNameWithTitle)}
            </figcaption>
          </figure>
        </section>
        <section id="services">
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li className="flex-1">Plano alimentar personalizado</li>
            <li className="flex-1">Acompanhamento nutricional</li>
            <li className="flex-1">Orientação para dietas específicas</li>
            <li className="flex-1">Educação alimentar</li>
            <li className="flex-1">Entre outros</li>
          </ul>
        </section>
        <section id="testimonials">
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li className="flex-1">Plano alimentar personalizado</li>
            <li className="flex-1">Acompanhamento nutricional</li>
            <li className="flex-1">Orientação para dietas específicas</li>
            <li className="flex-1">Educação alimentar</li>
            <li className="flex-1">Entre outros</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Entre em Contato</h2>
          <p>
            Deixe seus dados abaixo para que possamos entrar em contato com
            você:
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
