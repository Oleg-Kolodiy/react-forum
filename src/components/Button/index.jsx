import React from "react";

import { Wrapper } from "./style";

import { ReactComponent as UserPlus } from "assets/user-plus.svg";
import { ReactComponent as PlusCircle } from "assets/plus-circle.svg";
import { ReactComponent as ArrowUp } from "assets/arrow-up.svg";
import { ReactComponent as Message } from "assets/message-square.svg";
import { ReactComponent as Image } from "assets/image.svg";
import { ReactComponent as Send } from "assets/send.svg";

export const Button = ({
  children,
  width,
  height,
  bg,
  margin,
  color,
  icon,
  disabled,
  onClick,
}) => {
  const setIcon = (icon) => {
    switch (icon) {
      case "userPlus":
        return <UserPlus />;

      case "plusCircle":
        return <PlusCircle />;

      case "arrowUp":
        return <ArrowUp />;

      case "message":
        return <Message />;

      case "image":
        return <Image />;

      case "send":
        return <Send />;

      default:
        return null;
    }
  };
  return (
    <Wrapper
      width={width}
      height={height}
      bg={bg}
      margin={margin}
      color={color}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
    >
      {icon && setIcon(icon)}
      {children}
    </Wrapper>
  );
};
