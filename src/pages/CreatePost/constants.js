import * as Yup from "yup";

export const itemsInput = [
  {
    id: 1,
    name: "category",
    type: "select",
    labelText: "category",
    required: true,
  },
  {
    id: 2,
    name: "title",
    type: "text",
    labelText: "title",
    required: true,
    validation: Yup.string()
      .min(4, "The title field is short.")
      .max(50, "The title field is too long.")
      .required("Please complete, Username this required field."),
  },
  {
    id: 1,
    name: "text",
    type: "text",
    labelText: "text",
    required: false,
    validation: Yup.string()
      .min(4, "The text field is short.")
      .max(50, "The text field is too long."),
  },
];
