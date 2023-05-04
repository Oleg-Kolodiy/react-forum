import React from "react";
import { Wrapper, Info, Title, Description } from "./style";
import { AuthForm } from "components/AuthForm";
import { Preloader } from "components/Preloader";

export const LayoutAuthPages = ({
  title,
  description,
  itemsInput,
  buttonName,
  img,
  getUser,
  user,
  isLoading,
  createUser,
}) => {
  return isLoading ? (
    <Preloader />
  ) : (
    <Wrapper>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <AuthForm
          itemsInput={itemsInput}
          buttonName={buttonName}
          getUser={getUser}
          user={user}
          createUser={createUser}
        />
      </Info>
      <img src={img} alt="img" />
    </Wrapper>
  );
};
