import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";

import Image from "next/image";
import LogoEN from "../../../public/logo-en.png";
import Logo from "../../../public/logo.png";

import TheNutritionistImage from "../../../public/the-nutritionist-suemi.png";

import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import HeaderTop from "../components/HeaderTop";
import Menu from "../components/Menu";
import Service, { ServiceObject } from "../components/Service";
import ServicesList from "../components/ServicesList";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";
import { getDictionary } from "./dictionaries";

export type PageProps = {
  params: {
    lang: "en" | "pt";
  };
};

export type ComponentProps = {
  lang: "en" | "pt";
};

export default async function Home({ params: { lang } }: PageProps) {
  const dictionaire = await getDictionary(lang);

  const professionalFullNameWithTitle =
    dictionaire.professionalTitle +
    " " +
    dictionaire.professionalName +
    " " +
    dictionaire.professionalSurname;

  const aboutCapitalized = capitalizeSentence(dictionaire.aboutContent);
  const aboutSentences = aboutCapitalized.split("|");

  const logo = lang === "en" ? LogoEN : Logo;

  return (
    <>
      <header className="top-0 gap-6 z-40 flex flex-col lg:bg-gradient-to-t lg:from-primary-700 lg:pb-14">
        <HeaderTop
          menu={dictionaire.mainMenu}
          dictionaire={dictionaire}
          siteURL={`${process.env.FULL_URL}`}
          professionalFullNameWithTitle={professionalFullNameWithTitle}
        />
        <section className="hidden lg:flex gap-5 mt-4 lg:gap-0 justify-between p-2 flex-1 flex-row items-center self-center w-full xl:w-11/12 2xl:w-9/12">
          <a className="flex w-1/5" href={process.env.FULL_URL}>
            <Image
              src={logo}
              alt={
                capitalizeSentence(
                  dictionaire.basicPrefixAlternativeImageText
                ) +
                " " +
                capitalizePersonName(professionalFullNameWithTitle)
              }
              width={230}
              title={capitalizePersonName(professionalFullNameWithTitle)}
              quality={100}
            />
          </a>

          <Menu menu={dictionaire.mainMenu} />
          <WhatsAppButton
            text={capitalizeSentence(dictionaire.scheduleConsultation)}
            fullPhoneNumber={dictionaire.fullPhoneNumber}
            initialMessageText={dictionaire.initialMessageText}
            backgroundColor="green"
          />
        </section>
        <section className="flex flex-1 lg:py-64 justify-center items-center aspect-w-3 aspect-h-2">
          <iframe
            src="https://player.vimeo.com/video/103239608?autoplay=1&muted=1&h=61f97c9b28&title=0&byline=0&portrait=0"
            allow="autoplay; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </header>
      <main className="flex flex-col gap-8 mt-6 lg:gap-20 lg:mt-16">
        <section
          id="services"
          className="flex-1 flex mt-1 flex-col justify-center items-center px-4 gap-4"
        >
          <h2 className="flex-1 w-full lg:w-4/5">
            {capitalizeSentence(dictionaire.mainMenu.services)}
          </h2>
          <div className="flex-1 flex w-full lg:w-4/5 flex-col lg:flex-row gap-2 lg:gap-16">
            <ServicesList services={dictionaire.services.slice(0, 4)} />
            <ServicesList services={dictionaire.services.slice(4)} />
          </div>
        </section>
        <section
          id="worldwide"
          className="flex-1 flex flex-col justify-center items-center px-4 gap-4 p-8 text-white bg-gradient-to-t from-primary-700 to-primary-600"
        >
          <h2 className="flex-1 w-full lg:w-4/5 text-center">
            {capitalizeSentence(dictionaire.mainMenu.worldwide)}
          </h2>
          <div className="flex-1 flex w-full lg:w-4/5 flex-col lg:flex-row gap-14">
            <figure className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={TheNutritionistImage}
                alt={
                  capitalizeSentence(
                    dictionaire.basicPrefixAlternativeImageText
                  ) +
                  " " +
                  capitalizePersonName(professionalFullNameWithTitle)
                }
                title={capitalizePersonName(professionalFullNameWithTitle)}
                height={300}
                quality={100}
              />
              <figcaption className="text-center font-bold">
                {capitalizePersonName(professionalFullNameWithTitle)}
              </figcaption>
            </figure>
            <section className="flex flex-col flex-1 gap-8 text-justify justify-center">
              <p>{capitalizeSentence(dictionaire.worldwideContent1)}</p>
              <p>{capitalizeSentence(dictionaire.worldwideContent2)}</p>
              <p>{capitalizeSentence(dictionaire.worldwideContent3)}</p>
            </section>
          </div>
        </section>

        <section
          id="testimonials"
          className="flex-1 flex flex-col p-4 justify-center items-center gap-6 lg:gap-10"
        >
          <h2 className="flex-1 w-full lg:w-4/5 text-left">
            {capitalizeSentence(dictionaire.mainMenu.testimonials)}
          </h2>
          <Testimonials testimonials={dictionaire.testimonials} />
        </section>

        {dictionaire.services.map((service: ServiceObject, index: number) => {
          let orientation: "right" | "left" = "left";
          let hasBackground = false;

          if (index % 2 === 0) {
            orientation = "right";
            hasBackground = true;
          }

          return (
            <Service
              orientation={orientation}
              hasBackground={hasBackground}
              key={service.id}
              service={service}
              servicesMessageText={dictionaire.servicesMessageText}
              fullPhoneNumber={dictionaire.fullPhoneNumber}
            />
          );
        })}
        <section
          id="about"
          className="flex-1 flex flex-col p-8 justify-center items-center gap-4 text-white bg-gradient-to-t from-primary-700 to-primary-600"
        >
          <h2 className="flex-1 w-full text-left">
            {capitalizeSentence(dictionaire.mainMenu.about)}
          </h2>
          <article className="flex-1 flex w-full flex-col lg:flex-row gap-8 2xl:text-justify mb-3">
            {aboutSentences.map((phrase, index) => (
              <p className="xl:w-1/3 xl:gap-4" key={index}>
                {phrase}
              </p>
            ))}
          </article>
        </section>
      </main>
      <Footer dictionaire={dictionaire} />
      <BackButton />
    </>
  );
}
