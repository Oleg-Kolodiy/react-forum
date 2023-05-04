import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ sortBy }) =>
    sortBy ? "var(--blue-color)" : "var(--gray-color)"};
  margin: 0 10px 0 0;
  padding: 5px 10px;
  color: ${({ sortBy }) => (sortBy ? "white" : "var(--dark-gray-color)")};
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-transform: capitalize;
  border-radius: 100px;
  cursor: pointer;

  & svg {
    margin: 0 5px 0 0;
    path {
      fill: ${({ sortBy, color }) => (sortBy ? color : "")};
      stroke: ${({ sortBy, color = "white" }) =>
        sortBy ? color : "var(--dark-gray-color)"};
    }
  }
`;
