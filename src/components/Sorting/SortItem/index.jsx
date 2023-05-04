import React from "react";

import { Wrapper } from "./style";

export const SortItem = ({ Icon, name, color, type, sortBy, setSortBy }) => {
  return (
    <Wrapper
      onClick={() => {
        setSortBy(type);
      }}
      sortBy={sortBy === type}
      color={color}
    >
      <Icon />
      {name}
    </Wrapper>
  );
};
