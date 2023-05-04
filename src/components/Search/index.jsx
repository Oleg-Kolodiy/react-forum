import React from "react";

import { Wrapper } from "./style";
import { ReactComponent as SearchIcon } from "assets/search.svg";

export const Search = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <Wrapper isOpenMenu={isOpenMenu}>
      <SearchIcon onClick={() => setIsOpenMenu(true)} />
      <input type="search" placeholder="Search" />
    </Wrapper>
  );
};
