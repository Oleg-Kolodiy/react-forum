import React from "react";
import axios from "axios";

import { LayoutAuthPages } from "components";
import registrationImage from "assets/registration-image.jpg";
import { itemsInput } from "./constants";

export const Registration = ({ getUser, isLoading }) => {
  const createUser = (values) => {
    axios.post("https://62ae6ae6645d00a28a07f114.mockapi.io/users", {
      email: values.email,
      userName: values.userName,
      password: values.password,
    });
  };

  return (
    <LayoutAuthPages
      title="Join Alem community"
      description="Get more features and priviliges by joining to the most helpful community"
      itemsInput={itemsInput}
      buttonName="REGISTER"
      img={registrationImage}
      getUser={getUser}
      isLoading={isLoading}
      createUser={createUser}
    ></LayoutAuthPages>
  );
};
