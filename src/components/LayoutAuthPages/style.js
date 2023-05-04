import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--bg-color);
  & img {
    width: 100%;
  }
`;

export const Info = styled.div`
  max-width: 580px;
  padding: 193px 100px 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: 900;
  text-transform: capitalize;
`;

export const Description = styled.p`
  margin: 20px 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
`;
