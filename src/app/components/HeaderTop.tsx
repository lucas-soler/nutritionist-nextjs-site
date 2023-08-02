"use client";

import { capitalizeSentence } from "@/utils/utils";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderTopProps {
  menu: { [key: string]: string };
  siteURL: string;
  dictionaire: {
    [key: string]: string;
  };
}

function HeaderTop({ menu, siteURL, dictionaire }: HeaderTopProps) {
  const menuProps: string[] = [];
  const menuItems: string[] = [];

  for (const menuItemPropName in menu) {
    menuProps.push(menuItemPropName);
    menuItems.push(menu[menuItemPropName]);
  }

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex justify-stretch mt-2 ml-2 p-2 flex-1 text-sm font-semibold">
      <div className="flex-1 flex justify-start items-center gap-3">
        <Link href={siteURL + "/pt"} prefetch>
          <Image
            src="/portuguese.svg"
            className="link-effect"
            alt={capitalizeSentence(dictionaire.portugueseLanguage)}
            title={capitalizeSentence(dictionaire.portugueseLanguage)}
            width={32}
            height={32}
          />
        </Link>

        <Link href={siteURL + "/en"} prefetch>
          <Image
            src="/english.svg"
            className="link-effect"
            alt={capitalizeSentence(dictionaire.englishLanguage)}
            title={capitalizeSentence(dictionaire.englishLanguage)}
            width={32}
            height={32}
          />
        </Link>
      </div>
      <div className="flex justify-end items-center gap-3 mr-2">
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
          className="flex flex-row items-center gap-1 hover:text-primary-700 mr-5 lg:mr-0"
        >
          <EnvelopeSimple size={32} weight="light" />
          <span className="hidden md:inline">{dictionaire.emailAccount}</span>
        </a>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {menuItems.map((menuItem, index) => {
                return (
                  <li
                    key={`hamburguer-${menuProps[index]}`}
                    className="border-b border-gray-600 my-8 uppercase"
                  >
                    <a
                      href={`#${menuProps[index]}`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      {capitalizeSentence(menuItem)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HeaderTop;
