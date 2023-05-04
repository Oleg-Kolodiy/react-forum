import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  background-color: var(--bg-color);
`;

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }to{
     transform: rotate(360deg);
   }
`;

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 7px solid #f3f3f3;
  border-top: 7px solid #1700ff;
  border-radius: 100%;
  margin: auto;
  animation: ${spin} 1s infinite linear;
`;
