import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./style";

export const Dropdown = ({
  list,
  isOpenDropdown,
  setIsOpenDropdown,
  setUser,
  setIsLoading,
}) => {
  return (
    isOpenDropdown && (
      <Wrapper>
        {list &&
          list.map((item) => (
            <li key={item}>
              <Link
                to={"/login"}
                onClick={(e) => {
                  setIsLoading(true);
                  setUser([]);
                  // localStorage.userName = "";
                  // localStorage.password = "";
                  setIsOpenDropdown(false);
                  e.preventDefault();
                }}
              >
                {item}
              </Link>
            </li>
          ))}
      </Wrapper>
    )
  );
};
