import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 30px;
  border-radius: 5px;

  & button {
    display: flex;
    justify-content: center;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 3px;
    top: 3px;

    & svg {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }

  & iframe {
    width: 1000px;
    height: 600px;
  }
`;
