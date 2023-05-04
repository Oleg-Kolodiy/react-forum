import React, { useState } from "react";
import { Outlet } from "react-router";

import { Main, Navbar, OpenCloseButton, Content } from "./style";
import { ReactComponent as ChevronLeft } from "assets/chevron-left.svg";
import { Search, Menu } from "components";
import { menuItems, personalNavigatorItems } from "components/Menu/constants";
import { Preloader } from "components";

export const Home = ({ user, isLoading }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Main>
      <Navbar isOpenMenu={isOpenMenu}>
        <OpenCloseButton
          isOpenMenu={isOpenMenu}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <ChevronLeft />
        </OpenCloseButton>
        <Search isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <Menu title="MENU" menuItems={menuItems} isOpenMenu={isOpenMenu} />
        {user && (
          <Menu
            title={isOpenMenu ? "PERSONAL NAVIGATOR" : ""}
            menuItems={personalNavigatorItems}
            isOpenMenu={isOpenMenu}
          />
        )}
      </Navbar>
      {isLoading ? (
        <Preloader />
      ) : (
        <Content>
          <Outlet />
        </Content>
      )}
    </Main>
  );
};
