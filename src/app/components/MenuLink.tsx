"use client";

import { capitalizeSentence } from "@/utils/utils";

interface MenuLinkProps {
  menuItemID: string;
  text: string;
  isActive: boolean;
  changeMenuItemsState: (menuItemID: string) => void;
}

function MenuLink({
  menuItemID,
  text,
  isActive,
  changeMenuItemsState,
}: MenuLinkProps) {
  const handleMenuClick = () => {
    changeMenuItemsState(menuItemID);
  };

  return (
    <li
      id={`menu-item-${menuItemID}`}
      className={`basis-1/5 text-center rounded-full p-2 duration-300 hover:bg-secondary-500 hover:text-white ${
        isActive ? "bg-secondary-600 text-white" : ""
      }`}
    >
      <a href={`#${menuItemID}`} onClick={handleMenuClick}>
        {capitalizeSentence(text)}
      </a>
    </li>
  );
}

export default MenuLink;
