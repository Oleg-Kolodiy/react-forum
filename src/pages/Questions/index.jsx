import React, { useState, useEffect } from "react";

import axios from "axios";
import { Wrapper, Posts } from "./style";
import { Sorting, Post } from "components";
import { sortItems } from "components/Sorting/constants";

export const Questions = ({ setIsLoading, user }) => {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setIsLoading(true);
    try {
      axios(
        "https://62ae6ae6645d00a28a07f114.mockapi.io/posts" +
          (user?.userName ? "?filter=" + user.userName + "&" : "") +
          (sortBy !== "" && sortBy !== "closed"
            ? "?sortBy=" + sortBy + "&order=desc"
            : sortBy
            ? "?filter=" + sortBy
            : "")
      ).then((resp) => setPosts(resp?.data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, user]);

  return (
    <Wrapper>
      <Sorting sortItems={sortItems} sortBy={sortBy} setSortBy={setSortBy} />
      <Posts>
        {posts?.map((item) => (
          <Post key={item?.id} {...item} />
        ))}

        {!posts?.length && <div>У вас ще немає ваших дописів.</div>}
      </Posts>
    </Wrapper>
  );
};
