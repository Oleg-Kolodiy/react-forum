import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--roboto-font);
  font-size: 12px;
  line-height: 14px;
  font-weight: 900;
  margin: ${({ margin = "0" }) => margin};
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  width: ${({ width }) => {
    switch (width) {
      case "XS3":
        return "72px";

      case "XS2":
        return "78px";

      case "XS":
        return "95px";

      case "S":
        return "108px";

      case "M":
        return "113px";

      case "L":
        return "126px";

      case "XL":
        return "149px";

      case "XXL":
        return "380px";

      default:
        return "112px";
    }
  }};

  height: ${({ height = "112px" }) => {
    switch (height) {
      case "S":
        return "30px";

      case "M":
        return "38px";

      default:
        return "30px";
    }
  }};

  background-color: ${({ bg }) => {
    switch (bg) {
      case "blue":
        return "var(--blue-color)";

      case "gray":
        return "var(--gray-color)";

      default:
        return "var(--orange-color)";
    }
  }};

  color: ${({ color }) => {
    switch (color) {
      case "blue":
        return "var(--blue-color)";

      case "gray":
        return "var(--dark-gray-color)";

      default:
        return "#fff";
    }
  }};

  & a {
    color: ${({ color }) => {
      switch (color) {
        case "blue":
          return "var(--blue-color)";

        case "gray":
          return "var(--dark-gray-color)";

        default:
          return "#fff";
      }
    }};
  }

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.8;
    transform: translateY(1px);
  }
  & svg {
    margin: 0 12px 0 0;
  }
`;
