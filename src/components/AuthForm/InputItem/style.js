import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 380px;
  height: 42px;
  margin: 0 0 15px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 15px;
  color: var(--dark-gray-color);
  font-size: 8px;
  font-weight: 300;
  line-height: 9px;
`;

export const Input = styled.input`
  width: 315px;
  height: 15px;
  margin: 19px 0 0 15px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  border: none;
  outline: none;
`;
export const VisibilityBox = styled.div`
  & svg {
    width: 12px;
    height: 12px;
    right: 30px;
    cursor: pointer;
    g {
      fill: var(--black-gray-color);
    }
  }
`;
