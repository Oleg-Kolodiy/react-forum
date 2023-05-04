import React from "react";

import { ReactComponent as FeatherMore } from "assets/feather_more-vertical.svg";
import eyePost from "assets/eye-post.svg";
import comment from "assets/comment.svg";
import arrowUp from "assets/arrow-up-post.svg";

import {
  Wrapper,
  Container,
  Head,
  Author,
  KarmaImg,
  Info,
  UserName,
  PostContent,
  Image,
  SubMenu,
  Tags,
  Activity,
} from "./style";

export const Post = ({ author, date, title, text, tags, activity, img }) => {
  return (
    <Wrapper>
      <Container>
        <Head>
          <Author>
            {!author.ava ? (
              <KarmaImg>O</KarmaImg>
            ) : (
              <img src={author.ava} alt={author.name} />
            )}
            <Info>
              <UserName>{author.name}</UserName>
              <time dateTime={new Date(date).toString().slice(0, 24)}>
                {new Date(date).toString().slice(0, 24)}
              </time>
            </Info>
          </Author>
          <FeatherMore />
        </Head>
        <PostContent>
          <h4>{title}</h4>
          <p>{text}</p>
          <Image>
            <img src={img} alt={img} />
          </Image>
        </PostContent>
        <SubMenu>
          <Tags>
            {tags.map((item) => (
              <li key={item}>
                <a href="# ">{item}</a>
              </li>
            ))}
          </Tags>
          <Activity>
            <li>
              <img src={eyePost} alt="eyePost" />
              {activity[0]}
            </li>
            <li>
              <img src={comment} alt="comment" />
              {activity[1]}
            </li>
            <li>
              <img src={arrowUp} alt="arrowUp" />
              {activity[2]}
            </li>
          </Activity>
        </SubMenu>
      </Container>
    </Wrapper>
  );
};
