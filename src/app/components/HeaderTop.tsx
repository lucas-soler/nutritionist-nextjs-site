"use client";

import {
  capitalizePersonName,
  capitalizeSentence,
  capitalizeWord,
} from "@/utils/utils";
import { EnvelopeSimple, InstagramLogo, Phone } from "@phosphor-icons/react";
import LogoEN from "../../../public/logo-en.png";
import Logo from "../../../public/logo.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderTopProps {
  menu: { [key: string]: string };
  siteURL: string;
  dictionaire: {
    [key: string]: string;
  };
  professionalFullNameWithTitle: string;
}

function HeaderTop({
  menu,
  siteURL,
  dictionaire,
  professionalFullNameWithTitle,
}: HeaderTopProps) {
  const menuProps: string[] = [];
  const menuItems: string[] = [];

  const logo = dictionaire.lang === "en" ? LogoEN : Logo;

  for (const menuItemPropName in menu) {
    menuProps.push(menuItemPropName);
    menuItems.push(menu[menuItemPropName]);
  }

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex lg:justify-between mt-6 lg:mt-2 ml-2 p-2 flex-1 text-sm font-semibol">
      <a className="flex lg:hidden flex-1" href={process.env.FULL_URL}>
        <Image
          src={logo}
          alt={
            capitalizeSentence(dictionaire.basicPrefixAlternativeImageText) +
            " " +
            capitalizePersonName(professionalFullNameWithTitle)
          }
          width={230}
          title={capitalizePersonName(professionalFullNameWithTitle)}
          quality={100}
        />
      </a>
      <div className="hidden lg:flex justify-start items-center gap-3">
        <Link href={siteURL + "/pt"} prefetch>
          <Image
            src="/portuguese.svg"
            className="link-effect"
            alt={capitalizeSentence(dictionaire.portugueseLanguage)}
            title={capitalizeSentence(dictionaire.portugueseLanguage)}
            width={32}
            height={32}
            quality={100}
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
            quality={100}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col lg:justify-end items-end">
        <section className="flex gap-4">
          <a
            href={dictionaire.instagramAccountURL}
            target="_blank"
            title={`${capitalizeSentence(
              dictionaire.instagramLinkText
            )} ${capitalizeSentence(dictionaire.professionalName)}`}
            className="flex flex-row items-center gap-1 hover:text-primary-700"
          >
            <InstagramLogo size={32} />
            <span className="hidden md:inline">Instagram</span>
          </a>
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
            className="flex flex-row items-center gap-1 hover:text-primary-700 lg:mr-0"
          >
            <EnvelopeSimple size={32} weight="light" />
            <span className="hidden lg:inline">{dictionaire.emailAccount}</span>
          </a>
        </section>
        <section className="MOBILE-MENU flex lg:hidden mt-12 mr-12">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
          </div>

          <div className={isNavOpen ? "showModal" : "hideModal"}>
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
            <div className="absolute top-0 left-0 px-8 py-8 flex justify-start items-center gap-3">
              <Link href={siteURL + "/pt"} prefetch>
                <Image
                  src="/portuguese.svg"
                  className="link-effect"
                  alt={capitalizeSentence(dictionaire.portugueseLanguage)}
                  title={capitalizeSentence(dictionaire.portugueseLanguage)}
                  width={32}
                  height={32}
                  quality={100}
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
                  quality={100}
                />
              </Link>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {menuItems.map((menuItem, index) => {
                const href = index === 0 ? "#" : `#${menuProps[index]}`;
                return (
                  <li
                    key={`hamburguer-${menuProps[index]}`}
                    className="border-b border-gray-600 my-8 uppercase"
                  >
                    <a href={`${href}`} onClick={() => setIsNavOpen(false)}>
                      {capitalizeWord(menuItem)}
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
