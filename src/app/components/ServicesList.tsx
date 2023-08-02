"use client";

import { capitalizeSentence } from "@/utils/utils";

interface ServicesListProps {
  services: string[];
  fullPhoneNumber: string;
  servicesMessageText: string;
}

function ServicesList({
  services,
  fullPhoneNumber,
  servicesMessageText,
}: ServicesListProps) {
  const handleClick = (serviceName: string) => {
    window.open(
      `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
        capitalizeSentence(servicesMessageText) +
          " " +
          serviceName.toUpperCase()
      )}`,
      "_blank"
    );
  };

  return (
    <section className="flex-1 flex flex-col gap-2">
      {services.map((service: string, index: number) => {
        let elementStyle;
        switch (index) {
          case 0:
            elementStyle = `flex flex-1 bg-salmon justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75`;
            break;
          case 1:
            elementStyle = `flex flex-1 bg-purple justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75`;
            break;
          case 2:
            elementStyle = `flex flex-1 bg-moss justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75`;
            break;
          case 3:
            elementStyle = `flex flex-1 bg-brown justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75`;
            break;
          case 4:
            elementStyle = `flex flex-1 bg-orange justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75`;
            break;
        }
        return (
          <p
            key={`services-service-${index}`}
            className={elementStyle}
            onClick={() => handleClick(service)}
          >
            {capitalizeSentence(service)}
          </p>
        );
      })}
    </section>
  );
}

export default ServicesList;
