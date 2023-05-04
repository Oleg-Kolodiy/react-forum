import React from "react";
import { NavLink } from "react-router-dom";

import { Wrapper } from "./style";

export const Menu = ({ title, menuItems, isOpenMenu }) => {
  return (
    <Wrapper isOpenMenu={isOpenMenu}>
      <h3>{title}</h3>
      <ul>
        {menuItems.map(({ Icon, href, name }) => (
          <li key={href}>
            <NavLink to={href}>
              <Icon />
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
