import styled from "styled-components";

export const Wrapper = styled.header`
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 35px;
  border-bottom: 1px solid var(--gray-color);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 25px;
    height: 30px;
  }
  & h1 {
    margin: 0 0 0 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    & b {
      font-weight: 900;
    }
  }
`;
