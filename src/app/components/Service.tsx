import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export interface ServiceObject {
  id: string;
  name: string;
  description: string;
  scheduleText: string;
}

interface ServiceProps {
  service: ServiceObject;
  servicesMessageText: string;
  fullPhoneNumber: string;
}

function Service({
  service,
  servicesMessageText,
  fullPhoneNumber,
}: ServiceProps) {
  return (
    <section
      id="nutritional-reeducation"
      className="flex-1 flex flex-col justify-center items-center p-2 gap-4"
    >
      <h2 className="flex-1 w-full xl:w-3/4 2xl:w-2/3">
        {capitalizeSentence("nutritional reeducation")}
      </h2>
      <div className="flex-1 flex w-full xl:w-3/4 2xl:w-2/3 flex-col lg:flex-row gap-4 lg:gap-16">
        <figure className="flex-1 flex flex-col gap-4">
          <Image
            src={`/${service.id}.jpg`}
            alt={service.name}
            title={service.name}
            width={626}
            height={425}
            className="m-auto"
          />
          <figcaption className="text-center font-bold">
            {capitalizePersonName(service.name)}
          </figcaption>
        </figure>
        <section className="flex-1 flex justify-between flex-col gap-2">
          <p>${capitalizeSentence(service.name)}</p>
          <WhatsAppButton
            text={capitalizeSentence(service.scheduleText)}
            fullPhoneNumber={fullPhoneNumber}
            initialMessageText={`${servicesMessageText} ${capitalizeSentence(
              service.name
            )}`}
            backgroundColor="green"
          />
        </section>
      </div>
    </section>
  );
}

export default Service;
