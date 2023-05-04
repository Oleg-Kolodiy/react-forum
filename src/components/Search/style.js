import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 41px;
  padding: ${({ isOpenMenu }) => (isOpenMenu ? "0 0 0 50px" : "0 0 0 20px")};
  transition: 0.5s;

  & svg {
    margin: 0 12px 0 0;
    cursor: pointer;
  }
  & input {
    width: ${({ isOpenMenu }) => (isOpenMenu ? "100%" : "0")};
    transition: 0.5s;
    max-width: 152px;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    border: none;
    outline: none;

    &::placeholder {
      color: black;
    }
  }
`;
