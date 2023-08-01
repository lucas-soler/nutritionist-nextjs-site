import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";

import Image from "next/image";

import Link from "next/link";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import WhatsAppButton from "../components/WhatsAppButton";
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
      <header className="sticky top-0 z-50 flex flex-col">
        <section className="flex justify-stretch mt-2 ml-2 p-2 flex-1 text-sm font-semibold">
          <div className="flex-1 flex justify-start gap-3">
            <a
              href={`tel:${dictionaire.phoneNumber}`}
              title={`${capitalizeSentence(
                dictionaire.callPrefix
              )} ${capitalizeSentence(dictionaire.professionalName)}`}
              className="hover:text-primary-700"
            >
              {dictionaire.phoneNumber}
            </a>
            <a
              href={`mailto:${process.env.EMAIL}?subject=${dictionaire.emailSubject}&body=${dictionaire.emailBody}`}
              title={`${capitalizeSentence(
                dictionaire.emailPrefix
              )} ${capitalizeSentence(dictionaire.professionalName)}`}
              className="hover:text-primary-700"
            >
              {process.env.EMAIL}
            </a>
          </div>
          <div className="flex-1 flex justify-end items-center gap-3 mr-2">
            <Link href={process.env.FULL_URL + "/pt"} prefetch>
              <Image
                src="/portuguese.png"
                alt={capitalizeSentence(dictionaire.portugueseLanguage)}
                title={capitalizeSentence(dictionaire.portugueseLanguage)}
                width={32}
                height={32}
              />
            </Link>

            <Link href={process.env.FULL_URL + "/en"} prefetch>
              <Image
                src="/english.png"
                alt={capitalizeSentence(dictionaire.englishLanguage)}
                title={capitalizeSentence(dictionaire.englishLanguage)}
                width={32}
                height={32}
              />
            </Link>
          </div>
        </section>
        <nav className="p-5 flex flex-1 flex-row items-center">
          <a
            className="basis-2/12 flex justify-end items-center"
            href={process.env.FULL_URL}
          >
            <Image
              src="/logo.png"
              alt={
                capitalizeSentence(
                  dictionaire.basicPrefixAlternativeImageText
                ) +
                " " +
                capitalizePersonName(professionalFullNameWithTitle)
              }
              title={capitalizePersonName(professionalFullNameWithTitle)}
              width={250}
              height={250}
            />
          </a>
          <h1 className="basis-3/12 flex flex-col justify-center">
            <span className="text-center">Suemi Shimizu Soler</span>
            <span className="text-center">
              Nutricionista funcional - CRN {dictionaire.crnNumber}
            </span>
          </h1>
          <Menu menu={dictionaire.mainMenu} />
          <WhatsAppButton
            text={
              capitalizeSentence(dictionaire.scheduleOn) +
              " " +
              capitalizeSentence(dictionaire.scheduleApp)
            }
          />
        </nav>
      </header>

      <main>
        <br />
        <br />
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
