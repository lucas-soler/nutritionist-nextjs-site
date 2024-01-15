"use client";

import { capitalizeSentence, capitalizeWord } from "@/utils/utils";

interface MenuLinkProps {
  menuItemID: string;
  text: string;
  href: string;
  isActive: boolean;
  changeMenuItemsState: (menuItemID: string) => void;
}

function MenuLink({
  menuItemID,
  text,
  href,
  isActive,
  changeMenuItemsState,
}: MenuLinkProps) {
  const handleMenuClick = (href: string) => {
    changeMenuItemsState(menuItemID);
    window.location.href = href;
  };

  return (
    <li
      id={`menu-item-${menuItemID}`}
      title={`${capitalizeSentence(text)}`}
      className={`flex basis-1/5 justify-center items-end p-2 duration-300 hover:text-primary-500 hover:cursor-pointer`}
      onClick={() => handleMenuClick(href)}
    >
      {capitalizeWord(text)}
    </li>
  );
}

export default MenuLink;
