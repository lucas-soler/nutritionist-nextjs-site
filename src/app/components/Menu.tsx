"use client";

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

    for (const menuItemState in menuItemStates)
      newMenuItemStates[menuItemState] = menuItemID === menuItemState;

    setMenuItemStates(newMenuItemStates);
  };

  return (
    <ul className="hidden lg:flex w-3/5 flex-row" role="list" id="welcome">
      {menuItems.map((menuItem, index) => {
        const href = `#${menuProps[index]}`;
        return (
          <MenuLink
            key={menuProps[index]}
            menuItemID={menuProps[index]}
            text={menuItem}
            href={href}
            isActive={menuItemStates[menuProps[index]]}
            changeMenuItemsState={handleChangeMenuItemStates}
          />
        );
      })}
    </ul>
  );
}

export default Menu;
