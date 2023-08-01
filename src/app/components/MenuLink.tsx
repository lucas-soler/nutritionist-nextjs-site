"use client";

import { capitalizeSentence } from "@/utils/utils";
import resolveConfig from "tailwindcss/resolveConfig";
//@ts-ignore
import { tailwindConfig } from "../../../tailwind.config.js";

interface MenuLinkProps {
  menuItemID: string;
  href: string;
  text: string;
  menuItemsKeys: string[];
}

const { theme } = resolveConfig(tailwindConfig);

function MenuLink({ menuItemID, href, text, menuItemsKeys }: MenuLinkProps) {
  const handleMenuClick = () => {
    const menuItem = document.getElementById(menuItemID)!;

    for (const menuItemKey of menuItemsKeys) {
      menuItemKey === menuItemID
        ? menuItem.style.setProperty(
            "background-color",
            theme.colors.secondary[400]
          )
        : menuItem.style.setProperty(
            "background-color",
            theme.colors.primary[400]
          );
    }
  };

  return (
    <a href={href} onClick={handleMenuClick}>
      {capitalizeSentence(text)}
    </a>
  );
}

export default MenuLink;
