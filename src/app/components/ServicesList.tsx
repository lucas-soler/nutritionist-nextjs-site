"use client";

import { ServiceObject } from "./Service";

interface ServicesListProps {
  services: ServiceObject[];
}

function ServicesList({ services }: ServicesListProps) {
  const handleClick = (serviceID: string) => {
    window.location.href = `#${serviceID}`;
  };

  return (
    <section className="flex-1 flex flex-col gap-2">
      {services.map((service: ServiceObject, index: number) => {
        let elementStyle = "";
        switch (index) {
          case 0:
            elementStyle += ` bg-salmon from-salmon-600 to-salmon-400`;
            break;
          case 1:
            elementStyle += ` bg-purple from-purple-600 to-purple-400`;
            break;
          case 2:
            elementStyle += ` bg-moss from-moss-600 to-moss-400`;
            break;
          case 3:
            elementStyle += ` bg-brown from-brown-600 to-brown-400`;
            break;
        }
        return (
          <p
            key={`services-service-${index}`}
            className="text-center first-letter:uppercase justify-center items-center align-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r bg-primary-700 from-primary-700 to-primary-600"
            onClick={() => handleClick(service.id)}
          >
            {service.name}
          </p>
        );
      })}
    </section>
  );
}

export default ServicesList;
