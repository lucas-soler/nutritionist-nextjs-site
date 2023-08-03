"use client";

import { capitalizeSentence } from "@/utils/utils";

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
  const handleMenuClick = () => {
    changeMenuItemsState(menuItemID);
  };

  return (
    <li
      id={`menu-item-${menuItemID}`}
      title={`${capitalizeSentence(text)}`}
      className={`basis-1/5 text-center rounded-full p-2 duration-300 hover:bg-white hover:text-primary-700 hover:cursor-pointer ${
        isActive ? "bg-white text-primary-700" : ""
      }`}
    >
      <a href={href} onClick={handleMenuClick}>
        {capitalizeSentence(text)}
      </a>
    </li>
  );
}

export default MenuLink;
