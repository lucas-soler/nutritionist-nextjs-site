"use client";

import { capitalizeSentence } from "@/utils/utils";
import { useState } from "react";
import MenuLink from "./MenuLink";

export interface MenuProps {
  menu: { [key: string]: string };
}

interface MenuItemStates {
  [key: string]: boolean;
}

function Menu({ menu }: MenuProps) {
  const menuProps: string[] = [];
  const menuItems: string[] = [];
  const initialMenuItemStates: MenuItemStates = {};

  for (const menuItemPropName in menu) {
    menuProps.push(menuItemPropName);
    menuItems.push(menu[menuItemPropName]);

    initialMenuItemStates[menuItemPropName] = false;
  }

  const [menuItemStates, setMenuItemStates] = useState<MenuItemStates>(
    initialMenuItemStates
  );

  const handleChangeMenuItemStates = (menuItemID: string): void => {
    const newMenuItemStates: MenuItemStates = { ...menuItemStates };

    for (const menuItemState in menuItemStates) {
      newMenuItemStates[menuItemState] =
        menuItemID === menuItemState ? true : false;
    }

    setMenuItemStates(newMenuItemStates);
  };

  return (
    <ul
      className="hidden lg:flex basis-5/12 flex-row justify-center"
      role="list"
    >
      {menuItems.map((menuItem, index) => (
        <MenuLink
          key={menuProps[index]}
          menuItemID={menuProps[index]}
          text={capitalizeSentence(menuItem)}
          isActive={menuItemStates[menuProps[index]]}
          changeMenuItemsState={handleChangeMenuItemStates}
        />
      ))}
    </ul>
  );
}

export default Menu;
