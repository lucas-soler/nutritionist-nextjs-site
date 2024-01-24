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
      <header className="top-0 z-40 flex flex-col">
        <HeaderTop
          menu={dictionaire.mainMenu}
          dictionaire={dictionaire}
          siteURL={`${process.env.FULL_URL}`}
        />
        <nav className="gap-5 lg:gap-0 justify-between p-2 flex flex-1 flex-row items-center self-center w-full xl:w-3/4 2xl:w-2/3">
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
            text={
              capitalizeSentence(dictionaire.scheduleOn) +
              " " +
              capitalizeSentence(dictionaire.scheduleApp)
            }
            fullPhoneNumber={dictionaire.fullPhoneNumber}
            initialMessageText={dictionaire.initialMessageText}
            backgroundColor="green"
          />
        </nav>
      </header>

      <main className="flex flex-col gap-6 lg:gap-16">
        <section
          id="welcome"
          className="flex flex-1 lg:py-64 mt-8 justify-center items-center aspect-w-3 aspect-h-2 bg-primary-700"
        >
          <iframe
            src="https://player.vimeo.com/video/103239608?autoplay=1&muted=1&h=61f97c9b28&title=0&byline=0&portrait=0"
            allow="autoplay; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section
          id="services"
          className="flex-1 flex flex-col justify-center items-center px-2 gap-4 scroll-mt-56 2xl:scroll-mt-64"
        >
          <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3">
            {capitalizeSentence(dictionaire.mainMenu.services)}
          </h2>
          <div className="flex-1 flex w-full xl:w-3/4 2xl:w-2/3 flex-col lg:flex-row gap-14">
            <ServicesList services={dictionaire.services} />
            <figure className="flex-1 flex flex-col gap-4">
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
                className="m-auto"
                height={300}
                quality={100}
              />
              <figcaption className="text-center font-bold">
                {capitalizePersonName(professionalFullNameWithTitle)}
              </figcaption>
              <WhatsAppButton
                text={capitalizeSentence(dictionaire.scheduleText)}
                fullPhoneNumber={dictionaire.fullPhoneNumber}
                initialMessageText={dictionaire.initialMessageText}
                backgroundColor="green"
                hasIcon={false}
              />
            </figure>
          </div>
        </section>
        <section
          id="about"
          className="flex-1 flex flex-col justify-center items-center scroll-mt-56 2xl:scroll-mt-64 px-2 gap-4 bg-primary-700"
        >
          <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3 text-left">
            {capitalizeSentence(dictionaire.mainMenu.about)}
          </h2>
          <p className="flex-1 flex w-full xl:w-3/4 2xl:w-2/3 flex-col lg:flex-row gap-1 lg:gap-4">
            {aboutSentences.map((phrase) => {
              return (
                <>
                  <span className="xl:w-1/3 xl:gap-4">{phrase}</span>
                  <br />
                </>
              );
            })}
            .
          </p>
        </section>
        <section
          id="testimonials"
          className="flex-1 flex flex-col justify-center items-center scroll-mt-56 2xl:scroll-mt-64 gap-6 lg:gap-10"
        >
          <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3 text-left">
            {capitalizeSentence(dictionaire.mainMenu.testimonials)}
          </h2>
          <Testimonials testimonials={dictionaire.testimonials} />
        </section>
        {dictionaire.services.map((service: ServiceObject, index: number) => {
          const orientation = index % 2 === 0 ? "right" : "left";

          return (
            <Service
              orientation={orientation}
              key={service.id}
              service={service}
              servicesMessageText={dictionaire.servicesMessageText}
              fullPhoneNumber={dictionaire.fullPhoneNumber}
            />
          );
        })}
      </main>
      <Footer dictionaire={dictionaire} />
      <BackButton />
    </>
  );
}
