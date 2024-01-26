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
      className={`flex flex-1 last:border-0 justify-center items-end p-2 duration-700 hover:text-primary-400 hover:cursor-pointer hover:underline`}
      onClick={() => handleMenuClick(href)}
    >
      {capitalizeWord(text)}
    </li>
  );
}

export default MenuLink;
