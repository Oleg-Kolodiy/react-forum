import styled from "styled-components";

export const Wrapper = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  background-color: #8080805c;
  border-radius: 5px;
  & li {
    padding: 5px 10px;
  }
  & a {
    &:hover {
      color: white;
    }
  }
`;
