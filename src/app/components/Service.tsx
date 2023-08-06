import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import WhatsAppButton from "./WhatsAppButton";

import Aesthetics from "../../../public/aesthetics.png";
import FoodIntolerence from "../../../public/food-intolerence.png";
import LifeQuality from "../../../public/life-quality.png";
import NutritionalReeducation from "../../../public/nutritional-reeducation.png";
import WeightLoss from "../../../public/weight-loss.png";

export interface ServiceObject {
  code: number;
  id: string;
  name: string;
  description: string;
  scheduleText: string;
}

interface ServiceProps {
  orientation: "right" | "left";
  service: ServiceObject;
  servicesMessageText: string;
  fullPhoneNumber: string;
}

function Service({
  orientation,
  service,
  servicesMessageText,
  fullPhoneNumber,
}: ServiceProps) {
  let image: StaticImageData = NutritionalReeducation;

  switch (service.code) {
    case 0:
      image = NutritionalReeducation;
      break;
    case 1:
      image = WeightLoss;
      break;
    case 2:
      image = FoodIntolerence;
      break;
    case 3:
      image = Aesthetics;
      break;
    case 4:
      image = LifeQuality;
      break;
  }

  return (
    <section
      id={service.id}
      className="flex-1 flex flex-col justify-center items-center p-2 gap-8 scroll-mt-56 2xl:scroll-mt-64"
    >
      <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3 text-left">
        {capitalizeSentence(service.name)}
      </h2>

      <div className="flex-1 flex w-full xl:w-3/4 2xl:w-2/3 flex-col lg:flex-row gap-4 lg:gap-16">
        <figure className="lg:hidden flex-1 flex flex-col gap-4">
          <Image
            src={image}
            alt={service.name}
            title={service.name}
            className="m-auto"
          />
          <figcaption className="text-center font-bold">
            {capitalizePersonName(service.name)}
          </figcaption>
        </figure>
        {orientation === "right" ? (
          <ServiceImage serviceID={service.id} serviceName={service.name} />
        ) : (
          ""
        )}
        <section className="flex-1 flex justify-between flex-col gap-6">
          <p>
            {capitalizeSentence(service.name)}
            <br />
            {capitalizeSentence(service.name)}
            <br />
            {capitalizeSentence(service.name)}
            <br />
            {capitalizeSentence(service.name)}
            <br />
            {capitalizeSentence(service.name)}
            <br />
          </p>
          <WhatsAppButton
            text={capitalizeSentence(service.scheduleText)}
            fullPhoneNumber={fullPhoneNumber}
            initialMessageText={`${servicesMessageText} ${capitalizeSentence(
              service.name
            )}`}
            backgroundColor="green"
            hasIcon={false}
          />
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
        className="m-auto"
      />
    </figure>
  );
}

export default Service;
