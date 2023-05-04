import React, { useState } from "react";

import { Wrapper, Notification, Profile, KarmaImg, Karma } from "./styled";
import { Button, Dropdown } from "components";
import { ReactComponent as Bell } from "assets/bell.svg";
import { Link } from "react-router-dom";

export const Authorized = ({ userName, email, ava, setUser, setIsLoading }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const karma = userName?.[0] || email?.[0] || "Us";

  return (
    <Wrapper>
      <Link to="/create-post">
        <Button width="XL" height="M" icon={"plusCircle"}>
          Ask a question
        </Button>
      </Link>

      <Notification>
        <Bell />
      </Notification>
      <Profile
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        title={userName}
      >
        {ava ? (
          <>
            <img src={ava} alt="avatar" />
            <Karma>{karma}</Karma>
          </>
        ) : (
          <KarmaImg>{karma}</KarmaImg>
        )}

        <Dropdown
          list={[
            // "Edit profile", "Contact Us",
            "Log out",
          ]}
          isOpenDropdown={isOpenDropdown}
          setIsOpenDropdown={setIsOpenDropdown}
          setIsLoading={setIsLoading}
          setUser={setUser}
        />
      </Profile>
    </Wrapper>
  );
};
