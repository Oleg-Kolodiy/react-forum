import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  margin: 40px 0 0 45px;
  padding: 30px 40px;
  & form {
    max-width: 640px;
  }

  & select,
  & input,
  & textarea {
    width: 100%;
    margin: 0 0 20px;
    letter-spacing: 0.02em;
    color: #808080;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    border: 2px solid #eaeaea;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
  }
  & select,
  & input {
    height: 34px;
  }
  & select {
    width: calc(100% + 23px);
  }
  & textarea {
    height: 344px;
    padding: 10px;
    resize: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% + 23px);

  & > div {
    display: flex;
  }
`;
