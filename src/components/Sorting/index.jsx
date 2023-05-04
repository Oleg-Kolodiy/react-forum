import React from "react";

import { Wrapper } from "./style";
import { SortItem } from "./SortItem";

export const Sorting = ({ sortItems, sortBy, setSortBy }) => {
  return (
    <Wrapper>
      {sortItems &&
        sortItems.map((item) => (
          <SortItem
            key={item.name}
            {...item}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        ))}
    </Wrapper>
  );
};
