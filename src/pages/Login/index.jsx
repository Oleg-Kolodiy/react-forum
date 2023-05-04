import { LayoutAuthPages } from "components";
import loginImage from "assets/login-image.jpg";
import { itemsInput } from "./constants";

export const Login = ({ getUser, user, isLoading, setIsLoading }) => {
  return (
    <LayoutAuthPages
      title="We’ve missed you!"
      description="More than 150 questions are waiting for your wise suggestions!"
      itemsInput={itemsInput}
      buttonName="Login"
      img={loginImage}
      getUser={getUser}
      user={user}
      isLoading={isLoading}
    ></LayoutAuthPages>
  );
};
