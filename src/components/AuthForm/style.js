import styled from "styled-components";

export const Form = styled.form`
  & a {
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  }
`;

export const Error = styled.div`
  height: 20px;
  margin: 15px 0 15px 15px;
  color: var(--error-color);
  font-size: 10px;
  line-height: 20px;
  font-weight: 500;
`;
