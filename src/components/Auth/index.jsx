import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./style";
import { Button } from "components/";

export const Auth = () => {
  return (
    <Wrapper>
      <Link to="/registration">
        <Button width="M" height="M" icon="userPlus">
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button
          width="XS3"
          height="M"
          bg="gray"
          margin="0 0 0 16px"
          color="blue"
        >
          Login
        </Button>
      </Link>
    </Wrapper>
  );
};
