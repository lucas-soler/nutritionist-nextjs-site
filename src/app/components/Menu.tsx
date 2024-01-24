"use client";

import { House } from "@phosphor-icons/react";
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

  function handleBackHome() {
    setMenuItemStates(initialMenuItemStates);
    window.location.href = "#";
  }

  return (
    <ul className="hidden lg:flex w-3/5 flex-row" role="list">
      <li
        id={`menu-item-home`}
        title={`home`}
        className={`flex flex-1 lg:hidden xl:flex justify-center items-center p-2 hover:cursor-pointer`}
        onClick={handleBackHome}
      >
        <House size={25} color="#556F59" weight="fill" />
      </li>

      {menuItems.map((menuItem, index) => {
        const href = index === 0 ? "#" : `#${menuProps[index]}`;

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
