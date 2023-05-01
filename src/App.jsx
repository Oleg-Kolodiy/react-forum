import React, { useState, useEffect } from "react";

import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle, Container } from "./globalStyles";
import { Header, SvgEditor } from "components";
import {
  Home,
  CreatePost,
  NotFound,
  Registration,
  Login,
  Questions,
  Tags,
  Ranking,
} from "pages";

function App() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(false);

  const [isOpenSvgEditor, setIsOpenSvgEditor] = useState(false); // при додаванні поста
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios("https://62ae6ae6645d00a28a07f114.mockapi.io/users").then((resp) =>
        setUsers(resp.data)
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // useEffect(() => {
  //   if (localStorage.userName && localStorage.password) {
  //     setUser({
  //       userName: localStorage?.getItem("userName"),
  //       password: localStorage?.getItem("password"),
  //     });
  //   }
  // }, []);

  const getUser = (formikValues) => {
    setUser(
      users?.find(
        (item) =>
          // item
          // item?.userName === localStorage?.getItem("userName") &&
          // item?.password === localStorage?.getItem("password")
          (item?.userName === formikValues.userName ||
            item?.email === formikValues.userName) &&
          item?.password === formikValues.password
      )
    );
  };
  // setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className="App">
      <Container>
        <GlobalStyle />
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} isLoading={isLoading} />}>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/"
              element={<Questions setIsLoading={setIsLoading} />}
            />
            <Route
              path="/your_questions"
              element={<Questions user={user} setIsLoading={setIsLoading} />}
            />
            <Route
              path="/create-post"
              element={
                <CreatePost
                  categories={[
                    "business",
                    "technology",
                    "learning",
                    "science",
                    "news",
                    "programming",
                    "psychology",
                    "entertainment",
                    "travel",
                  ]}
                  setIsOpenSvgEditor={setIsOpenSvgEditor}
                  user={user}
                />
              }
            />

            <Route path="/tags" element={<Tags />} />
            <Route path="/ranking" element={<Ranking />} />
          </Route>
          <Route
            path="/registration"
            element={
              <Registration
                isLoading={isLoading}
                getUser={getUser}
                user={user}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isLoading={isLoading}
                getUser={getUser}
                user={user}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
        <SvgEditor
          isOpen={isOpenSvgEditor}
          setIsOpenSvgEditor={setIsOpenSvgEditor}
        />
      </Container>
    </div>
  );
}

export default App;
