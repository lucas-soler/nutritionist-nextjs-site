import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";

import Image from "next/image";

import Footer from "../components/Footer";
import HeaderTop from "../components/HeaderTop";
import Menu from "../components/Menu";
import ServicesList from "../components/ServicesList";
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
        <HeaderTop
          menu={dictionaire.mainMenu}
          dictionaire={dictionaire}
          siteURL={`${process.env.FULL_URL}`}
        />
        <nav className="gap-5 lg:gap-0 justify-between lg:justify-center p-2 flex flex-1 flex-row items-center">
          <a
            className="basis-3/5 lg:basis-2/12 flex justify-center items-center"
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
          <h1 className="hidden lg:flex lg:basis-3/12 flex-col justify-center">
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
            fullPhoneNumber={dictionaire.fullPhoneNumber}
            initialMessageText={dictionaire.initialMessageText}
          />
        </nav>
      </header>

      <main className="flex flex-col px-1 gap-2 lg:gap-5">
        <section
          id="welcome"
          className="flex-1 lg:py-72 mt-2 flex justify-center items-center aspect-w-16 aspect-h-9"
        >
          <iframe
            src="https://player.vimeo.com/video/103239608?autoplay=1&muted=1&h=61f97c9b28&title=0&byline=0&portrait=0"
            allow="autoplay; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section
          id="services"
          className="flex-1 flex flex-col justify-center items-center p-2 gap-4"
        >
          <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3">
            {capitalizeSentence(dictionaire.mainMenu.services)}
          </h2>
          <div className="flex-1 flex w-full xl:w-3/4 2xl:w-2/3 flex-col lg:flex-row gap-14">
            <ServicesList
              services={dictionaire.servicesContent.split("\n")}
              fullPhoneNumber={dictionaire.fullPhoneNumber}
              servicesMessageText={dictionaire.servicesMessageText}
            />
            <figure className="flex-1 flex flex-col gap-4">
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
                className="m-auto"
              />

              <figcaption className="text-center font-bold">
                {capitalizePersonName(professionalFullNameWithTitle)}
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          id="about"
          className="flex-1 flex flex-col justify-center items-center"
        >
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li className="flex-1">Plano alimentar personalizado</li>
            <li className="flex-1">Acompanhamento nutricional</li>
            <li className="flex-1">Orientação para dietas específicas</li>
            <li className="flex-1">Educação alimentar</li>
            <li className="flex-1">Entre outros</li>
          </ul>
        </section>
        <section
          id="testimonials"
          className="flex-1 flex flex-col justify-center items-center"
        >
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li className="flex-1">Plano alimentar personalizado</li>
            <li className="flex-1">Acompanhamento nutricional</li>
            <li className="flex-1">Orientação para dietas específicas</li>
            <li className="flex-1">Educação alimentar</li>
            <li className="flex-1">Entre outros</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
