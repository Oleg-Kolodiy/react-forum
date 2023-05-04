import * as Yup from "yup";

export const itemsInput = [
  {
    id: 1,
    name: "userName",
    type: "text",
    labelText: "Username",
    required: true,
    validation: Yup.string()
      .min(4, "The Username field is short.")
      .max(50, "The Username field is too long.")
      .required("Please complete, Username this required field."),
  },
  {
    id: 2,
    name: "email",
    type: "email",
    labelText: "Email",
    required: true,
    validation: Yup.string()
      .email("Email must be formatted correctly.")
      .min(6, "The Email field is short.")
      .max(50, "The Email field is too long.")
      .required("Please complete, Email this required field."),
  },
  {
    id: 3,
    name: "password",
    type: "password",
    labelText: "Password",
    required: true,
    validation: Yup.string()
      .min(6, "Password is too short - should be 8 chars minimum.")
      .max(100, "Password is too long - should be 100 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Please complete, Password this required field."),
  },
  {
    id: 4,
    name: "passwordConfirmation",
    type: "password",
    labelText: "Repeat pasword",
    required: true,
    validation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please complete, Repeat pasword this required field."),
  },
];
