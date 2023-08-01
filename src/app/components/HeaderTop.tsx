"use client";

import { capitalizeSentence } from "@/utils/utils";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

interface HeaderTopProps {
  siteURL: string;
  dictionaire: {
    [key: string]: string;
  };
}

function HeaderTop({ siteURL, dictionaire }: HeaderTopProps) {
  return (
    <section className="flex justify-stretch mt-2 ml-2 p-2 flex-1 text-sm font-semibold">
      <div className="flex-1 flex justify-start items-center gap-3">
        <a
          href={`tel:${dictionaire.phoneNumber}`}
          title={`${capitalizeSentence(
            dictionaire.callPrefix
          )} ${capitalizeSentence(dictionaire.professionalName)}`}
          className="flex flex-row items-center gap-1 hover:text-primary-700"
        >
          <Phone size={32} weight="light" />
          <span className="hidden md:inline">{dictionaire.phoneNumber}</span>
        </a>
        <a
          href={`mailto:${dictionaire.emailAccount}?subject=${dictionaire.emailSubject}&body=${dictionaire.emailBody}`}
          title={`${capitalizeSentence(
            dictionaire.emailPrefix
          )} ${capitalizeSentence(dictionaire.professionalName)}`}
          className="flex flex-row items-center gap-1 hover:text-primary-700"
        >
          <EnvelopeSimple size={32} weight="light" />
          <span className="hidden md:inline">{dictionaire.emailAccount}</span>
        </a>
      </div>
      <div className="flex justify-end items-center gap-3 mr-2">
        <Link href={siteURL + "/pt"} prefetch>
          <Image
            src="/portuguese.png"
            className="link-effect"
            alt={capitalizeSentence(dictionaire.portugueseLanguage)}
            title={capitalizeSentence(dictionaire.portugueseLanguage)}
            width={32}
            height={32}
          />
        </Link>

        <Link href={siteURL + "/en"} prefetch>
          <Image
            src="/english.png"
            className="link-effect"
            alt={capitalizeSentence(dictionaire.englishLanguage)}
            title={capitalizeSentence(dictionaire.englishLanguage)}
            width={32}
            height={32}
          />
        </Link>
      </div>
    </section>
  );
}

export default HeaderTop;
