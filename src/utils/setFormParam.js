import * as Yup from "yup";

const setInitialValues = (formItems) => {
  return {
    ...formItems.reduce(
      (obj, { name }) => ({
        ...obj,
        [name]: "",
      }),
      {}
    ),
    // recaptcha: "",
  };
};

const setValidationSchema = (formItems) =>
  Yup.object().shape({
    ...formItems.reduce(
      (obj, { name, validation }) => ({
        ...obj,
        [name]: validation,
      }),
      {}
    ),
    // recaptcha: Yup.string().required(),
  });

export const setFormParam = (formItems) => ({
  initialValues: setInitialValues(formItems),
  validationSchema: setValidationSchema(formItems),
  onSubmit: (values) => {
    console.log(values);
  },
});
