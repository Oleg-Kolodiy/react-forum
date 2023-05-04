import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Navbar = styled.nav`
  position: relative;
  width: 100%;
  max-width: ${({ isOpenMenu }) => (isOpenMenu ? "310px" : "58px")};
  height: 100%;
  padding: 40px 0;
  transition: 0.5s;
`;
export const OpenCloseButton = styled.button`
  position: absolute;
  top: 20px;
  ${({ isOpenMenu }) =>
    isOpenMenu ? "right:20px" : "left:50%;  transform: translateX(-50%);"};
  background-color: inherit;
  border: none;
  outline: none;

  & svg {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transform: ${({ isOpenMenu }) =>
      isOpenMenu ? "rotate(0deg)" : "rotate(180deg)"};
  }
`;

export const Content = styled.section`
  width: 100%;
  background-color: var(--bg-color);
`;
