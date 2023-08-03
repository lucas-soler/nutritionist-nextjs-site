"use client";

import { capitalizeSentence } from "@/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { ServiceObject } from "./Service";

interface ServicesListProps {
  services: ServiceObject[];
}

function ServicesList({ services }: ServicesListProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex-1 flex flex-col gap-2">
      {services.map((service: ServiceObject, index: number) => {
        let elementStyle;
        switch (index) {
          case 0:
            elementStyle = `flex flex-1 bg-salmon justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r from-salmon-600 to-salmon-400`;
            break;
          case 1:
            elementStyle = `flex flex-1 bg-purple justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r from-purple-600 to-purple-400`;
            break;
          case 2:
            elementStyle = `flex flex-1 bg-moss justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r from-moss-600 to-moss-400`;
            break;
          case 3:
            elementStyle = `flex flex-1 bg-brown justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r from-brown-600 to-brown-400`;
            break;
          case 4:
            elementStyle = `flex flex-1 bg-orange justify-center items-center rounded-lg font-bold text-white p-5 lg:p-7 hover:cursor-pointer hover:opacity-75 bg-gradient-to-r from-orange-600 to-orange-400`;
            break;
        }
        return (
          <p
            key={`services-service-${index}`}
            className={elementStyle}
            onClick={() => setIsNavOpen(true)}
          >
            <Link href={`#${service.id}`}>
              {capitalizeSentence(service.name)}
            </Link>
          </p>
        );
      })}
    </section>
  );
}

export default ServicesList;
