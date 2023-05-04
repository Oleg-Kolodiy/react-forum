import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Wrapper, Buttons } from "./style";
import { Button } from "components";
import { setFormParam } from "utils/setFormParam";
import { itemsInput } from "./constants";

export const CreatePost = ({ categories, setIsOpenSvgEditor, user }) => {
  const formik = useFormik(setFormParam(itemsInput));

  const createPost = (values) => {
    axios.post("https://62ae6ae6645d00a28a07f114.mockapi.io/posts", {
      author: {
        ava: user?.ava || "",
        name: user?.userName || "",
      },
      user: user?.userName || "",
      date: new Date().getTime(),
      title: values.title,
      text: values.text,
      category: values.category,
      tags: [],
      activity: [0, 0, 0],
      img: "",
    });
  };

  return (
    <Wrapper>
      <form>
        <select
          name="category"
          type="select"
          value={formik.values.select}
          error={formik.errors.select}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Choose categories</option>
          {categories?.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Type catching attention title"
          name="title"
          value={formik.values.title}
          error={formik.errors.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <textarea
          placeholder="Type your question"
          name="text"
          value={formik.values.text}
          error={formik.errors.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Buttons>
          <Button
            icon="image"
            width="L"
            bg="blue"
            onClick={(e) => {
              setIsOpenSvgEditor(true);
              e.preventDefault();
            }}
          >
            Add Image
          </Button>
          <div>
            <Button
              width="M"
              bg="gray"
              color="gray"
              onClick={(e) => {
                alert("Post saved");
                e.preventDefault();
              }}
            >
              Save as draft
            </Button>
            <Button
              icon="send"
              width="S"
              margin="0 0 0 20px"
              onClick={(e) => {
                createPost(formik.values);
                alert("Published");
                e.preventDefault();
              }}
            >
              Publish
            </Button>
          </div>
        </Buttons>
      </form>
    </Wrapper>
  );
};
