import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import FoodIntolerence from "../../../public/food-intolerance.jpg";
import IntestinalModulation from "../../../public/intestinal-modulation.jpg";
import WeightLoss from "../../../public/weight-loss.jpg";
import WhatsAppButton from "./WhatsAppButton";

import AutoImmuneDisease from "../../../public/autoimmune-diseases.jpg";
import Hypertrophy from "../../../public/hypertrophy.jpg";
import NutritionalReeducation from "../../../public/nutritional-education.jpg";

import Aesthetics from "../../../public/aesthetics.jpg";
import LifeQuality from "../../../public/life-quality.jpg";

export interface ServiceObject {
  code: number;
  id: string;
  name: string;
  description1: string;
  description2: string;
  scheduleText: string;
}

interface ServiceProps {
  orientation: "right" | "left";
  hasBackground?: boolean;
  service: ServiceObject;
  servicesMessageText: string;
  fullPhoneNumber: string;
}

function Service({
  orientation,
  hasBackground = false,
  service,
  servicesMessageText,
  fullPhoneNumber,
}: ServiceProps) {
  let image: StaticImageData = NutritionalReeducation;

  switch (service.code) {
    case 0:
      image = IntestinalModulation;
      break;
    case 1:
      image = WeightLoss;
      break;
    case 2:
      image = FoodIntolerence;
      break;
    case 3:
      image = AutoImmuneDisease;
      break;
    case 4:
      image = Hypertrophy;
      break;
    case 5:
      image = Aesthetics;
      break;
    case 6:
      image = LifeQuality;
      break;
    case 7:
      image = NutritionalReeducation;
      break;
  }

  return (
    <section
      id={service.id}
      className={
        hasBackground
          ? "flex-1 flex flex-col justify-center items-center p-8 gap-8 text-white bg-gradient-to-t from-primary-700 to-primary-600"
          : "flex-1 flex flex-col justify-center items-center p-8 gap-8 "
      }
    >
      <div className="flex-1 flex w-full lg:w-4/5 flex-col lg:flex-row gap-14">
        <figure className="lg:hidden flex-1 flex flex-col gap-4">
          <Image
            src={image}
            alt={service.name}
            title={service.name}
            className="m-auto rounded-4xl"
            quality={100}
          />
          <figcaption className="hidden text-center font-bold">
            {capitalizePersonName(service.name)}
          </figcaption>
        </figure>
        {orientation === "right" ? (
          <ServiceImage serviceID={service.id} serviceName={service.name} />
        ) : (
          ""
        )}
        <section className="flex-1 flex justify-between flex-col gap-6">
          <h2 className="flex-1 text-4xl md:text-5xl text-center font-semibold first-letter:uppercase">
            {service.name}
          </h2>

          <p className="text-justify">
            {capitalizeSentence(service.description1)}
          </p>
          <p className="text-justify">
            {capitalizeSentence(service.description2)}
          </p>
          <WhatsAppButton
            text={service.scheduleText}
            fullPhoneNumber={fullPhoneNumber}
            initialMessageText={`${servicesMessageText} ${capitalizeSentence(
              service.name
            )}`}
            backgroundColor={hasBackground ? "white" : "green"}
            hasIcon={false}
          />
          <br />
        </section>
        {orientation === "left" ? (
          <ServiceImage serviceID={service.id} serviceName={service.name} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

interface ServiceImageProps {
  serviceID: string;
  serviceName: string;
}

function ServiceImage({ serviceID, serviceName }: ServiceImageProps) {
  return (
    <figure className="hidden lg:flex flex-1 flex-col gap-4">
      <Image
        src={`/${serviceID}.jpg`}
        alt={serviceName}
        title={serviceName}
        width={626}
        height={425}
        className="m-auto rounded-4xl"
        quality={100}
        priority={true}
      />
    </figure>
  );
}

export default Service;
