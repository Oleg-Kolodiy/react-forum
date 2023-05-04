import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0 0;
  text-tarnsform: capitalize;

  & h3 {
    margin: ${({ isOpenMenu }) => (isOpenMenu ? "0 0 0 50px" : "0 0 0 13px")};
    color: var(--dark-gray-color);
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    transition: 0.5s;
  }
  & ul {
    li {
      width: 100%;
      margin: 10px 0 0;

      a {
        display: flex;
        align-items: center;
        height: 41px;
        font-weight: 700;
        font-size: ${({ isOpenMenu }) => (isOpenMenu ? "13px" : "0")};
        line-height: 15px;
        padding: ${({ isOpenMenu }) =>
          isOpenMenu ? "0 0 0 45px" : " 0 3px 0 15px"};
        border-left: 5px solid white;
        transition: 0.5s;
      }
      svg {
        margin: 0 12px 0 0;
      }

      &:hover {
        a {
          background-color: var(--rose-white-color);
          color: var(--orange-color);
          border-left: 5px solid var(--orange-color);
        }

        & svg path {
          stroke: var(--orange-color);
        }
      }
    }
  }

  & .active {
    background-color: var(--rose-white-color);
    color: var(--orange-color);
    border-left: 5px solid var(--orange-color);
    & svg path {
      stroke: var(--orange-color);
    }
  }
`;
