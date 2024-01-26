"use client";

import { capitalizePersonName, capitalizeSentence } from "@/utils/utils";
import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";

interface FooterProps {
  dictionaire: {
    [key: string]: string;
  };
}

function Footer({ dictionaire }: FooterProps) {
  const handleClick = () => {
    window.open(
      `https://wa.me/${dictionaire.fullPhoneNumber}?text=${encodeURIComponent(
        capitalizeSentence(dictionaire.initialMessageText)
      )}`,
      "_blank"
    );
  };

  return (
    <footer className="flex flex-col gap-6 sm:flex-row sm:gap-0 top-16 pb-4">
      <section className="flex flex-col flex-1 items-left">
        <h2>{capitalizeSentence(dictionaire.consultationHeader)}</h2>
        <article className="mt-3">
          <button onClick={handleClick} title={dictionaire.fullPhoneNumber}>
            <WhatsappLogo size={28} />
            <span>{dictionaire.whatsAppPhoneNumber}</span>
          </button>
        </article>
        <article>
          <a
            href={`mailto:${dictionaire.emailAccount}?subject=${dictionaire.emailSubject}&body=${dictionaire.emailBody}`}
            title={`${capitalizeSentence(
              dictionaire.emailPrefix
            )} ${capitalizeSentence(dictionaire.professionalName)}`}
          >
            <EnvelopeSimple size={28} />
            <span>{dictionaire.emailAccount}</span>
          </a>
        </article>
      </section>
      <section className="flex flex-1 flex-col items-start lg:flex-initial lg:items-center justify-between">
        <h1 className="flex flex-col lg:items-center">
          <span>Suemi Shimizu Soler</span>
          <span>
            {capitalizePersonName(dictionaire.speciality)} - CRN{" "}
            {dictionaire.crnNumber}
          </span>
        </h1>
        <span className="mt-6">
          © {new Date().getFullYear()} {dictionaire.rights}
        </span>{" "}
      </section>
    </footer>
  );
}

export default Footer;
