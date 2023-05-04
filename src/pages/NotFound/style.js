import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 85px);

  & h1 {
    color: #bc2c2c;
    font-size: 60px;
    line-height: 72px;
  }
  & > h1 {
    color: black;
  }
`;
