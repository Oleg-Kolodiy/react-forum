import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  margin: 23px 0 0;
  border: 1px solid #eaeaea;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const Container = styled.div`
  padding: 25px 30px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  & svg {
    cursor: pointer;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
`;

export const KarmaImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--orange-color);
  color: #fff;
  border-radius: 100%;
  overflow: hidden;
`;

export const Info = styled.div`
  margin: 0 0 0 15px;
  font-weight: 400;

  & time {
    margin: 5px 0 0;
    color: var(--dark-gray-color);
    font-size: 10px;
    line-height: 12px;
  }
`;

export const UserName = styled.div`
  font-size: 13px;
  line-height: 15px;
`;

export const PostContent = styled.div`
  margin: 15px 0;
  font-size: 14px;

  & h4 {
    font-weight: 700;
    line-height: 16px;
  }

  & p {
    margin: 10px 0 0;
    font-weight: 300;
    line-height: 25px;
  }
`;

export const Image = styled.div`
  margin: 10px auto;
  width: 30%;
  & img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tags = styled.ul`
  display: flex;

  & li {
    display: flex;
    align-items: center;
    background-color: var(--gray-color);
    border-radius: 5px;

    & a {
      padding: 5px 10px;
      color: var(--dark-gray-color);
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
    }
  }

  & li + li {
    margin-left: 10px;
  }
`;

export const Activity = styled.ul`
  display: flex;
  align-items: center;

  & li {
    color: var(--dark-gray-color);
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;

    svg {
      margin: 0 0 0 5px;
      cursor: pointer;
    }
  }

  & li + li {
    margin-left: 15px;
  }
`;
